import { FC } from "react";
import { Button, Form, Input, Card, DatePicker } from "antd";

import type { FormProps } from "antd";
import { Race } from "@/types";
import dayjs from "dayjs";

const InitialSetup: FC<any> = ({ setEventData, setKey }) => {
  const onFinish: FormProps<Race>["onFinish"] = async (values) => {
    setEventData({ ...values, date: dayjs(values.date).format("YYYY-MM-DD") });
    setKey("2");
  };

  const onFinishFailed: FormProps<Race>["onFinishFailed"] = (errorInfo) => {
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
        <Form.Item<Race>
          label="Event Name"
          name="name"
          rules={[{ required: true, message: "Please input Event Name!" }]}
        >
          <Input placeholder="Event Name" />
        </Form.Item>

        <Form.Item<Race>
          label="Event Location"
          name="location"
          rules={[{ required: false, message: "Please input Event Location!" }]}
        >
          <Input placeholder="Event Location" />
        </Form.Item>

        <Form.Item<Race>
          label="Event Date"
          name="date"
          rules={[{ required: true, message: "Please input Event Date!" }]}
        >
          <DatePicker className="w-full" />
        </Form.Item>

        <Form.Item<Race>
          label="Event Description"
          name="description"
          rules={[
            { required: false, message: "Please input Event Description!" },
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
