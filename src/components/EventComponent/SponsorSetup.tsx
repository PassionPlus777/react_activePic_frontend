import React from "react";
import { Button, Form, Input, Card, Upload, Typography, Divider } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import type { FormProps } from "antd";

type FieldType = {
  topBannerImage?: string;
  topEventDescritionUrl?: string;
  topUTMParameters?: string;
  bottomBannerImage?: string;
  bottomEventDescritionUrl?: string;
  bottomUTMParameters?: string;
  imageLandscape?: string;
  imagePortrait?: string;
};

const SponsorSetup: React.FC = () => {
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
      title="NEW SPONSOR SETUP"
      bordered={false}
      className="h-full overflow-y-scroll"
    >
      <Form
        name="sponsorSetup"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Typography.Title level={5}>Top Banner</Typography.Title>

        <Divider className="mt-0" />

        <Form.Item<FieldType>
          label="Top Banner (1200 X 200 PX) - JPEG Only"
          name="topBannerImage"
          rules={[
            { required: true, message: "Please Choose Top Banner Image File!" },
          ]}
          getValueFromEvent={normFile}
        >
          <Upload
            maxCount={1}
            name="topBannerImage"
            action="/upload.do"
            listType="picture"
          >
            <Button icon={<UploadOutlined />}>Top Banner Image File</Button>
          </Upload>
        </Form.Item>

        <Form.Item<FieldType>
          label="Event Description URL"
          name="topEventDescritionUrl"
          rules={[
            { required: true, message: "Please input Event Description URL!" },
          ]}
        >
          <Input placeholder="Event Description URL" />
        </Form.Item>

        <Form.Item<FieldType>
          label="UTM Parameters"
          name="topUTMParameters"
          rules={[
            { required: true, message: "Please input Event UTM Parameters!" },
          ]}
        >
          <Input placeholder="Event UTM Parameters" />
        </Form.Item>

        <Typography.Title level={5}>Bottom Banner</Typography.Title>

        <Divider className="mt-0" />

        <Form.Item<FieldType>
          label="Bottom Banner (1200 X 200 PX) - JPEG Only"
          name="bottomBannerImage"
          rules={[
            { required: true, message: "Please Choose Bottom Banner File!" },
          ]}
          getValueFromEvent={normFile}
        >
          <Upload
            maxCount={1}
            name="bottomBannerImage"
            action="/upload.do"
            listType="picture"
          >
            <Button icon={<UploadOutlined />}>Bottom Banner Image File</Button>
          </Upload>
        </Form.Item>

        <Form.Item<FieldType>
          label="Event Description URL"
          name="bottomEventDescritionUrl"
          rules={[
            { required: true, message: "Please input Event Description URL!" },
          ]}
        >
          <Input placeholder="Event Description URL" />
        </Form.Item>

        <Form.Item<FieldType>
          label="UTM Parameters"
          name="bottomUTMParameters"
          rules={[
            { required: true, message: "Please input Event UTM Parameters!" },
          ]}
        >
          <Input placeholder="Event UTM Parameters" />
        </Form.Item>

        <Typography.Title level={5}>Image Overlays</Typography.Title>

        <Form.Item<FieldType>
          label="Landscape (1200 X 200 PX) - JPEG Only"
          name="imageLandscape"
          rules={[
            { required: true, message: "Please Choose Landscape Image File!" },
          ]}
          getValueFromEvent={normFile}
        >
          <Upload
            maxCount={1}
            name="imageLandscape"
            action="/upload.do"
            listType="picture"
          >
            <Button icon={<UploadOutlined />}>Landscape Image File</Button>
          </Upload>
        </Form.Item>

        <Form.Item<FieldType>
          label="Portrait (1200 X 200 PX) - JPEG Only"
          name="imagePortrait"
          rules={[
            { required: true, message: "Please Choose Portrait Image File!" },
          ]}
          getValueFromEvent={normFile}
        >
          <Upload
            maxCount={1}
            name="imagePortrait"
            action="/upload.do"
            listType="picture"
          >
            <Button icon={<UploadOutlined />}>Top Banner Image File</Button>
          </Upload>
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

export default SponsorSetup;
