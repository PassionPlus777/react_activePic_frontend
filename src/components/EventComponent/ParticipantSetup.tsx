import React from "react";
import { Button, Form, Input, Card, Upload, Typography, Divider } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import type { FormProps } from "antd";

type FieldType = {
  participantData: string;
  participantCSV: string;
};

const ParticipantSetup: React.FC = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <Card
      title="NEW PARTICIPANT SETUP"
      bordered={false}
      className="h-full overflow-y-scroll"
    >
      <Form
        name="participantSetup"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Typography.Title level={5}>
          *If you need support, please contact us at support@activepic.com
        </Typography.Title>

        <Divider className="mt-0" />

        <Form.Item<FieldType>
          label="Upload participant data. The data should be a .csv file in the following format:"
          name="participantData"
          rules={[
            { required: true, message: "Please input Participant Data!" },
          ]}
        >
          <Input placeholder="Participant Data" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Paticipant Upload"
          name="participantCSV"
          rules={[
            { required: true, message: "Please Choose Paticipant CSV File!" },
          ]}
          getValueFromEvent={normFile}
        >
          <Upload
            maxCount={1}
            name="participantCSV"
            action="/upload.do"
            listType="picture"
          >
            <Button icon={<UploadOutlined />}>Paticipant CSV File</Button>
          </Upload>
        </Form.Item>

        <Typography.Title level={5}>Priview</Typography.Title>

        <Divider className="mt-0" />

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Save And Progress
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ParticipantSetup;
