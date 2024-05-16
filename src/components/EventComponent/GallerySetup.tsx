import React from "react";
import {
  Button,
  Form,
  Input,
  Card,
  Upload,
  Row,
  Col,
  ColorPicker,
  Typography,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

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

const GallerySetup: React.FC = () => {
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
      title="NEW GALLERY SETUP"
      bordered={false}
      className="h-full overflow-y-scroll"
    >
      <Form
        name="gallerySetup"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row justify={"space-between"}>
          <Col span={11}>
            <Form.Item<FieldType>
              label="Event Logo"
              name="eventLogo"
              rules={[
                { required: true, message: "Please Choose Event Logo File!" },
              ]}
              getValueFromEvent={normFile}
            >
              <Upload
                maxCount={1}
                name="eventLogo"
                action="/upload.do"
                listType="picture"
              >
                <Button icon={<UploadOutlined />}>Event Logo File</Button>
              </Upload>
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item<FieldType>
              label="Header Image"
              name="headerImage"
              rules={[
                { required: true, message: "Please Choose Header Image File!" },
              ]}
              getValueFromEvent={normFile}
            >
              <Upload
                maxCount={1}
                name="headerImage"
                action="/upload.do"
                listType="picture"
              >
                <Button icon={<UploadOutlined />}>Header Image File</Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Form.Item<FieldType>
              label="Event Images (Max 5 Images)"
              name="eventImages"
              rules={[
                { required: true, message: "Please Choose Event Image Files!" },
              ]}
              getValueFromEvent={normFile}
            >
              <Upload
                maxCount={5}
                name="eventImages"
                action="/upload.do"
                listType="picture"
              >
                <Button icon={<UploadOutlined />}>Event Image File</Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>

        <Typography.Text>Gallery Colour Settings</Typography.Text>

        <Row justify={"space-between"} className="mt-3">
          <Col span={7}>
            <Form.Item<FieldType>
              label="Primary Colour"
              name="galleryPrimaryColour"
            >
              <ColorPicker showText className="w-full" />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item<FieldType>
              label="Secondary Colour"
              name="gallerySecondaryColour"
            >
              <ColorPicker showText className="w-full" />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item<FieldType>
              label="Third Colour"
              name="galleryThirdColour"
            >
              <ColorPicker showText className="w-full" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item<FieldType>
          label="Event Website"
          name="eventWebsite"
          rules={[
            { required: true, message: "Please input Event Website URL!" },
          ]}
        >
          <Input placeholder="Event Website URL" />
        </Form.Item>

        <Typography.Text>Event Social Media</Typography.Text>

        <Form.Item<FieldType>
          name="eventSocialMediaFacebook"
          rules={[
            { required: true, message: "Please input Fackbook Profile URL!" },
          ]}
          className="mt-3"
        >
          <Input placeholder="Fackbook Profile URL" />
        </Form.Item>

        <Form.Item<FieldType>
          name="eventSocialMediaInstagram"
          rules={[
            { required: true, message: "Please input Instagram UserName!" },
          ]}
        >
          <Input placeholder="Instagram UserName" />
        </Form.Item>

        <Form.Item<FieldType>
          name="eventSocialMediaTiktok"
          rules={[{ required: true, message: "Please input Tiktok UserName!" }]}
        >
          <Input placeholder="Tiktok UserName" />
        </Form.Item>

        <Form.Item<FieldType>
          name="eventSocialMediaXorTwitter"
          rules={[
            { required: true, message: "Please input X / Twitter UserName!" },
          ]}
        >
          <Input placeholder="X / Twitter UserName" />
        </Form.Item>

        <Form.Item<FieldType>
          name="eventHashtags"
          rules={[{ required: true, message: "Please Event HashTags!" }]}
        >
          <Input placeholder="Event HashTags" />
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

export default GallerySetup;
