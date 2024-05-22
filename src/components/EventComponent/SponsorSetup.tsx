import { FC, useState } from "react";
import { Button, Form, Input, Card, Upload, Typography, Divider } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import type {
  FormProps,
  // GetProp,
  UploadFile,
  UploadProps,
} from "antd";

type FieldType = {
  topBackgroundImage?: UploadFile[];
  topTargetUrl?: string;
  // topUTMParameters?: string;
  bottomBackgroundImage?: UploadFile[];
  bottomTargetUrl?: string;
  // bottomUTMParameters?: string;
  overlay?: UploadFile[];
  overlayPortrait?: UploadFile[];
};

const SponsorSetup: FC<any> = ({ setEventData, setKey, eventData }) => {
  const [topImage, setTopImage] = useState<UploadFile[]>([]);
  const [bottomImage, setBottomImage] = useState<UploadFile[]>([]);
  const [overlay, setOverlay] = useState<UploadFile[]>([]);
  const [overlayPortrait, setOverlayPortrait] = useState<UploadFile[]>([]);

  const topImageProps: UploadProps = {
    onRemove: () => {
      setTopImage([]);
    },
    beforeUpload: (file) => {
      setTopImage([file]);
      return false;
    },
    fileList: topImage,
  };

  const bottomImageProps: UploadProps = {
    onRemove: () => {
      setBottomImage([]);
    },
    beforeUpload: (file) => {
      setBottomImage([file]);
      return false;
    },
    fileList: bottomImage,
  };

  const overlayProps: UploadProps = {
    onRemove: () => {
      setOverlay([]);
    },
    beforeUpload: (file) => {
      setOverlay([file]);
      return false;
    },
    fileList: overlay,
  };

  const overlayPortraitProps: UploadProps = {
    onRemove: () => {
      setOverlayPortrait([]);
    },
    beforeUpload: (file) => {
      setOverlayPortrait([file]);
      return false;
    },
    fileList: overlayPortrait,
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    let { galleryConfig } = eventData;
    galleryConfig = { ...galleryConfig, adsConfig: {}, overlayConfig: {} };
    galleryConfig.adsConfig = {
      topAdBanner: {
        target: values.topTargetUrl,
        backgroundImage: values.topBackgroundImage,
      },
      bottomAdBanner: {
        target: values.bottomTargetUrl,
        backgroundImage: values.bottomBackgroundImage,
      },
    };
    galleryConfig.overlayConfig = {
      overlay: values.overlay,
      overlayPortrait: values.overlayPortrait,
    };
    setEventData({ ...eventData, galleryConfig });
    setKey("4");
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
          name="topBackgroundImage"
          rules={[
            {
              required: false,
              message: "Please Choose Top Banner Image File!",
            },
          ]}
          getValueFromEvent={normFile}
        >
          <Upload {...topImageProps}>
            <Button icon={<UploadOutlined />}>Top Banner Image File</Button>
          </Upload>
        </Form.Item>

        <Form.Item<FieldType>
          label="Event Description URL"
          name="topTargetUrl"
          rules={[
            { required: false, message: "Please input Event Description URL!" },
          ]}
        >
          <Input placeholder="Event Description URL" />
        </Form.Item>

        {/* <Form.Item<FieldType>
          label="UTM Parameters"
          name="topUTMParameters"
          rules={[
            { required: false, message: "Please input Event UTM Parameters!" },
          ]}
        >
          <Input placeholder="Event UTM Parameters" />
        </Form.Item> */}

        <Typography.Title level={5}>Bottom Banner</Typography.Title>

        <Divider className="mt-0" />

        <Form.Item<FieldType>
          label="Bottom Banner (1200 X 200 PX) - JPEG Only"
          name="bottomBackgroundImage"
          rules={[
            { required: false, message: "Please Choose Bottom Banner File!" },
          ]}
          getValueFromEvent={normFile}
        >
          <Upload {...bottomImageProps}>
            <Button icon={<UploadOutlined />}>Bottom Banner Image File</Button>
          </Upload>
        </Form.Item>

        <Form.Item<FieldType>
          label="Event Description URL"
          name="bottomTargetUrl"
          rules={[
            { required: false, message: "Please input Event Description URL!" },
          ]}
        >
          <Input placeholder="Event Description URL" />
        </Form.Item>

        {/* <Form.Item<FieldType>
          label="UTM Parameters"
          name="bottomUTMParameters"
          rules={[
            { required: false, message: "Please input Event UTM Parameters!" },
          ]}
        >
          <Input placeholder="Event UTM Parameters" />
        </Form.Item> */}

        <Typography.Title level={5}>Image Overlays</Typography.Title>

        <Form.Item<FieldType>
          label="Landscape (1200 X 200 PX) - JPEG Only"
          name="overlay"
          rules={[
            { required: false, message: "Please Choose Landscape Image File!" },
          ]}
          getValueFromEvent={normFile}
        >
          <Upload {...overlayProps}>
            <Button icon={<UploadOutlined />}>Landscape Image File</Button>
          </Upload>
        </Form.Item>

        <Form.Item<FieldType>
          label="Portrait (1200 X 200 PX) - JPEG Only"
          name="overlayPortrait"
          rules={[
            { required: false, message: "Please Choose Portrait Image File!" },
          ]}
          getValueFromEvent={normFile}
        >
          <Upload {...overlayPortraitProps}>
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
