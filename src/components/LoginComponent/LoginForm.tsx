import { FC } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Switch } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { SignInDataTypes, SignFuncTypes } from "@/types";
import GoogleSignIn from "../GoogleSignComponent";

const LoginForm: FC<SignFuncTypes> = ({ dispatchSignIn }) => {
  const navgate = useNavigate();

  const onFinish: FormProps<SignInDataTypes>["onFinish"] = (values) => {
    dispatchSignIn(values);
  };

  const onFinishFailed: FormProps<SignInDataTypes>["onFinishFailed"] = (
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
      className="content-center p-5 w-full"
    >
      <Form.Item<SignInDataTypes>
        name="email"
        className="w-full"
        rules={[
          {
            required: true,
            type: "email",
          },
        ]}
      >
        <Input placeholder="Email" prefix={<MailOutlined />} />
      </Form.Item>

      <Form.Item<SignInDataTypes> name="password" rules={[{ required: true }]}>
        <Input.Password placeholder="Password" prefix={<LockOutlined />} />
      </Form.Item>

      <Form.Item<SignInDataTypes> name="remember" valuePropName="checked">
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
