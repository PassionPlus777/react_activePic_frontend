import React from "react";
import {
  Button,
  Form,
  Input,
  Card,
  Upload,
  Typography,
  Divider,
  Row,
  Col,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const Activition: React.FC = () => {
  return (
    <Card
      title="MANUAL MATCHING"
      bordered={false}
      className="h-full overflow-y-scroll"
    >
      <Typography.Title level={5}>
        Manually add codes to images
      </Typography.Title>

      <Divider className="mt-0" />

      <Button type="primary" htmlType="submit" className="w-full">
        Click To Add Manually
      </Button>

      <Typography.Title level={5} className="mt-6">
        Priview Gallery
      </Typography.Title>

      <Row>
        <Col span={18}>
          <Input placeholder="Enter Paricitant Number" />
        </Col>
        <Col span={4} offset={2}>
          <Button type="primary">Priview</Button>
        </Col>
      </Row>

      <Typography.Title level={5} className="mt-6">
        Embed widget - Use this to embed the event widget on your website
      </Typography.Title>

      <Row>
        <Col span={18}>
          <Input placeholder='<iframe src=https://events.activepix.com/widget/662e6e8a21691f35c6223b60 style="border-radius: .5rem; border: none;"></iframe>' />
        </Col>
        <Col span={4} offset={2}>
          <Button type="primary">Copy Code</Button>
        </Col>
      </Row>
    </Card>
  );
};

export default Activition;
