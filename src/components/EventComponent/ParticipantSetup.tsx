import { useState, FC } from "react";
import { Button, Input, Card, Upload, Typography, Divider, Table } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile, UploadProps } from "antd";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store";

interface tableData {
  participantNumber: string;
  firstName: string;
  lastName: string;
  distance: string;
  time: string;
}

const columns = [
  {
    title: "Participant Number",
    dataIndex: "participantNumber",
    key: "participantNumber",
  },
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Distance",
    dataIndex: "distance",
    key: "distance",
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
  },
];

const ParticipantSetup: FC<any> = ({ eventData, dispatchCreateRace }) => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);

  const [loading, setLoading] = useState<boolean>(false);

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [tableData, setTableData] = useState<tableData[]>([]);

  const readAndParseCsv = (file: Blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        resolve(e.target?.result);
      };

      reader.onerror = () => {
        reader.abort();
        reject(new DOMException("Error reading the file."));
      };

      reader.readAsText(file);
    });
  };

  const makeTableData = (fileData: any): tableData[] => {
    const dataArray: string[] = fileData.split(["\r\n"]);

    if (dataArray.length) {
      dataArray.pop();
      dataArray.shift();
    }

    return dataArray.map((item, index) => {
      const tempArray: string[] = item.split(",");

      return {
        participantNumber: tempArray.length > 0 ? tempArray[0] : "",
        firstName: tempArray.length > 1 ? tempArray[1] : "",
        lastName: tempArray.length > 2 ? tempArray[2] : "",
        distance: tempArray.length > 3 ? tempArray[3] : "",
        time: tempArray.length > 4 ? tempArray[4] : "",
        key: `${index}`,
      };
    });
  };

  const props: UploadProps = {
    onRemove: () => {
      setFileList([]);
      setTableData([]);
    },
    beforeUpload: async (file) => {
      setFileList([file]);
      try {
        const fileData = await readAndParseCsv(file);
        setTableData(makeTableData(fileData));
      } catch (error) {
        console.log(error);
      }
      return false;
    },
    fileList,
    accept: ".csv",
  };

  const makeRacerData = () => {
    const racerData: any = {};
    tableData.forEach((item: any) => {
      delete item["key"];
      const { participantNumber, ...rest } = item;
      racerData[participantNumber] = rest;
    });
    return racerData;
  };

  const makeOwnedRaceIds = (data = []) => {
    return data.map((item: any) => item.id);
  };

  const makeRequest = () => {
    setLoading(true);
    dispatchCreateRace({
      data: { ...eventData, racerData: makeRacerData() },
      navigate: navigate,
      id: user.id,
      ownedRaces: makeOwnedRaceIds(user.ownedRaces),
    });
  };

  return (
    <Card
      title="NEW PARTICIPANT SETUP"
      bordered={false}
      className="h-full overflow-y-scroll"
    >
      <Typography.Title level={5}>
        *If you need support, please contact us at support@activepic.com
      </Typography.Title>

      <Divider className="mt-0" />

      <Typography.Title level={5}>
        Upload participant data. The data should be a .csv file in the following
        format:
      </Typography.Title>

      <Input.TextArea
        disabled
        value="participantNumber, firstName, lastName, distance, time
eg. 1, John, Doe, 5km, 30:00"
      />

      <Upload {...props}>
        <Button icon={<UploadOutlined />} className="mt-5">
          Paticipant CSV File
        </Button>
      </Upload>

      <Typography.Title level={5} className="mt-8">
        Priview
      </Typography.Title>

      <Divider className="mt-0" />

      <Table dataSource={tableData} columns={columns} />

      <Button
        type="primary"
        htmlType="submit"
        className="w-full mt-5"
        loading={loading}
        onClick={makeRequest}
        // disabled={!tableData.length}
      >
        Save
      </Button>
    </Card>
  );
};

export default ParticipantSetup;
