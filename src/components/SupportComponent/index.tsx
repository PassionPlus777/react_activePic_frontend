import React from "react";
import { Button, Form, Input, Card } from "antd";

import type { FormProps } from "antd";

type FieldType = {
  eventLogo?: string;
  headerImage?: string;
  eventImages?: string;
  galleryPrimaryColour?: string;
  gallerySecondaryColour?: string;
  galleryThirdColour?: string;
  eventWebsite?: string;
  eventSocialMediaFacebook?: string;
  eventSocialMediaInstagram?: string;
  eventSocialMediaTiktok?: string;
  eventSocialMediaXorTwitter?: string;
  eventHashtags?: string;
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
      title="NEW GALLERY SETUP"
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
          label="Event Website"
          name="eventWebsite"
          rules={[
            { required: true, message: "Please input Event Website URL!" },
          ]}
        >
          <Input placeholder="Event Website URL" />
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

export default SupportComponent;
