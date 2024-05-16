import React, { useState } from "react";
import { Button, message, Card, Upload, Typography, Row, Col } from "antd";
import { UploadOutlined, DownloadOutlined } from "@ant-design/icons";

import type { GetProp, UploadFile, UploadProps } from "antd";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const ImageUpload: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("files[]", file as FileType);
    });
    setUploading(true);
    // You can use any AJAX library you like
    fetch("https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        setFileList([]);
        message.success("upload successfully.");
      })
      .catch(() => {
        message.error("upload failed.");
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const props: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);

      return false;
    },
    fileList,
  };

  return (
    <Card
      title="IMAGE UPLOADS"
      bordered={false}
      className="h-full overflow-y-scroll"
    >
      <Typography.Title level={5}>
        * Please contact support@activePic.com if you have any issues
      </Typography.Title>

      <Typography.Title level={5}>Priview Gallery</Typography.Title>

      <Row>
        <Col span={18}>
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Select Gallery Zip File</Button>
          </Upload>
        </Col>
        <Col span={4} offset={2}>
          <Button
            type="primary"
            onClick={handleUpload}
            disabled={fileList.length === 0}
            loading={uploading}
          >
            {uploading ? "Uploading" : "Start Upload"}
          </Button>
        </Col>
      </Row>

      <Typography.Title level={5} className="mt-6">
        Download Image Uploader
      </Typography.Title>

      <Row className="mt-4">
        <Col span={3}>
          <Button icon={<DownloadOutlined />}>Windows</Button>
        </Col>
        <Col span={3} offset={1}>
          <Button icon={<DownloadOutlined />}>Mac OS</Button>
        </Col>
        <Col span={3} offset={1}>
          <Button icon={<DownloadOutlined />}>Linux</Button>
        </Col>
      </Row>
    </Card>
  );
};

export default ImageUpload;
