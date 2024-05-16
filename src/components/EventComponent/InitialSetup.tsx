import React from "react";
import { Button, Form, Input, Card } from "antd";

import type { FormProps } from "antd";

type FieldType = {
  eventName?: string;
  eventLocation?: string;
  eventDate?: string;
  eventDesc?: string;
};

const InitialSetup: React.FC = () => {
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
      title="NEW EVENT SETUP"
      bordered={false}
      className="h-full overflow-y-scroll"
    >
      <Form
        name="initialSetup"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Event Name"
          name="eventName"
          rules={[{ required: true, message: "Please input Event Name!" }]}
        >
          <Input placeholder="Event Name" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Event Location"
          name="eventLocation"
          rules={[{ required: true, message: "Please input Event Location!" }]}
        >
          <Input placeholder="Event Location" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Event Date"
          name="eventDate"
          rules={[{ required: true, message: "Please input Event Date!" }]}
        >
          <Input placeholder="Event Date" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Event Description"
          name="eventDesc"
          rules={[
            { required: true, message: "Please input Event Description!" },
          ]}
        >
          <Input placeholder="Event Description" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Save And Progress
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default InitialSetup;
