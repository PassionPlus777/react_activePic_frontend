import React from "react";
import { Button, Form, Input, Card } from "antd";

import type { FormProps } from "antd";

type FieldType = {
  name?: string;
  phone?: string;
  email?: string;
  event?: string;
  severity?: string;
  description?: string;
};

const SupportComponent: React.FC = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card
      title="EVENT STATISTICS"
      bordered={false}
      className="h-full overflow-y-scroll"
    >
      <Form
        name="supportComponent"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="name"
          rules={[{ required: true, message: "Please input your name" }]}
        >
          <Input placeholder="Enter Name" />
        </Form.Item>

        <Form.Item<FieldType> name="phone">
          <Input placeholder="Enter Phone Number" />
        </Form.Item>

        <Form.Item<FieldType>
          name="email"
          rules={[{ required: true, message: "Please input your email" }]}
        >
          <Input placeholder="Enter Email" />
        </Form.Item>

        <Form.Item<FieldType>
          name="event"
          rules={[{ required: true, message: "Please input your event" }]}
        >
          <Input placeholder="Enter Event" />
        </Form.Item>

        <Form.Item<FieldType>
          name="severity"
          rules={[{ required: true, message: "Please input your severity" }]}
        >
          <Input placeholder="Enter Severity" />
        </Form.Item>

        <Form.Item<FieldType>
          name="severity"
          rules={[{ required: true, message: "Please input your severity" }]}
        >
          <Input.TextArea rows={4} placeholder="Enter Severity" maxLength={6} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Contact us
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default SupportComponent;
