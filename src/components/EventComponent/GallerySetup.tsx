import { FC, useState } from "react";
import {
  Button,
  Form,
  // Input,
  Card,
  Upload,
  Row,
  Col,
  // ColorPicker,
  // Typography,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

import type {
  FormProps,
  // GetProp,
  UploadFile,
  UploadProps,
} from "antd";

type FieldType = {
  eventLogo?: UploadFile[];
  headerBackgroundImage?: UploadFile[];
  images?: UploadFile[];
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

const GallerySetup: FC<any> = ({ setEventData, setKey, eventData }) => {
  const [eventLogo, setEventLogo] = useState<UploadFile[]>([]);
  const [headerBack, setHeaderBack] = useState<UploadFile[]>([]);
  const [images, setImages] = useState<UploadFile[]>([]);

  const eventLogoProps: UploadProps = {
    onRemove: () => {
      setEventLogo([]);
    },
    beforeUpload: (file) => {
      setEventLogo([file]);
      return false;
    },
    fileList: eventLogo,
  };

  const headerBackProps: UploadProps = {
    onRemove: () => {
      setHeaderBack([]);
    },
    beforeUpload: (file) => {
      setHeaderBack([file]);
      return false;
    },
    fileList: headerBack,
  };

  const imagesProps: UploadProps = {
    onRemove: (file) => {
      const index = images.indexOf(file);
      const newImages = images.slice();
      newImages.splice(index, 1);
      setImages(newImages);
    },
    beforeUpload: (file) => {
      if (images.length > 4) {
        const newImages = images.slice();
        newImages.pop();
        setImages([...newImages, file]);
      } else setImages([...images, file]);
      return false;
    },
    fileList: images,
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const { images, ...rest } = values;
    setEventData({ ...eventData, images, galleryConfig: rest });
    setKey("3");
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const normFile = (e: any) => {
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
                { required: false, message: "Please Choose Event Logo File!" },
              ]}
              getValueFromEvent={normFile}
            >
              <Upload {...eventLogoProps}>
                <Button icon={<UploadOutlined />}>Event Logo File</Button>
              </Upload>
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item<FieldType>
              label="Header Image"
              name="headerBackgroundImage"
              rules={[
                {
                  required: false,
                  message: "Please Choose Header Image File!",
                },
              ]}
              getValueFromEvent={normFile}
            >
              <Upload {...headerBackProps}>
                <Button icon={<UploadOutlined />}>Header Image File</Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Form.Item<FieldType>
              label="Event Images (Max 5 Images)"
              name="images"
              rules={[
                {
                  required: false,
                  message: "Please Choose Event Image Files!",
                },
              ]}
              getValueFromEvent={normFile}
            >
              <Upload {...imagesProps}>
                <Button icon={<UploadOutlined />}>Event Image File</Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>
        {/* 
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
            { required: false, message: "Please input Event Website URL!" },
          ]}
        >
          <Input placeholder="Event Website URL" />
        </Form.Item>

        <Typography.Text>Event Social Media</Typography.Text>

        <Form.Item<FieldType>
          name="eventSocialMediaFacebook"
          rules={[
            { required: false, message: "Please input Fackbook Profile URL!" },
          ]}
          className="mt-3"
        >
          <Input placeholder="Fackbook Profile URL" />
        </Form.Item>

        <Form.Item<FieldType>
          name="eventSocialMediaInstagram"
          rules={[
            { required: false, message: "Please input Instagram UserName!" },
          ]}
        >
          <Input placeholder="Instagram UserName" />
        </Form.Item>

        <Form.Item<FieldType>
          name="eventSocialMediaTiktok"
          rules={[
            { required: false, message: "Please input Tiktok UserName!" },
          ]}
        >
          <Input placeholder="Tiktok UserName" />
        </Form.Item>

        <Form.Item<FieldType>
          name="eventSocialMediaXorTwitter"
          rules={[
            { required: false, message: "Please input X / Twitter UserName!" },
          ]}
        >
          <Input placeholder="X / Twitter UserName" />
        </Form.Item>

        <Form.Item<FieldType>
          name="eventHashtags"
          rules={[{ required: false, message: "Please Event HashTags!" }]}
        >
          <Input placeholder="Event HashTags" />
        </Form.Item> */}

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
