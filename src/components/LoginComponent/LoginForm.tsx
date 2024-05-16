import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Switch } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import GoogleSignIn from "../GoogleSignComponent";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const LoginForm: React.FC = () => {
  const navgate = useNavigate();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    navgate("/home");
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    navgate("/home");
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="content-center p-5 w-full"
    >
      <Form.Item<FieldType>
        name="username"
        className="w-full"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input prefix={<MailOutlined />} />
      </Form.Item>

      <Form.Item<FieldType>
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password prefix={<LockOutlined />} />
      </Form.Item>

      <Form.Item<FieldType> name="remember" valuePropName="checked">
        <div className="flex">
          <Switch size="small" />
          <p className="ml-5 remember">Remember me</p>
        </div>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-full">
          Submit
        </Button>
      </Form.Item>

      <Form.Item>
        <GoogleSignIn />
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
