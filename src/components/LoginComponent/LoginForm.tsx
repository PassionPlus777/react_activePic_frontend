import { FC } from "react";
import type { FormProps } from "antd";
import { Button, Divider, Form, Input, Switch, Typography } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

import { SignInData, SignInFunc } from "@/types";
import GoogleSignIn from "../GoogleSignComponent";

const { Text, Link } = Typography;

const LoginForm: FC<SignInFunc> = ({ dispatchSignIn }) => {
  const onFinish: FormProps<SignInData>["onFinish"] = (values) => {
    dispatchSignIn(values);
  };

  const onFinishFailed: FormProps<SignInData>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="content-center p-5 w-full login-form"
    >
      <Form.Item<SignInData>
        name="email"
        className="w-full"
        rules={[
          {
            required: true,
            type: "email",
          },
        ]}
      >
        <Input placeholder="Email" size="large" prefix={<MailOutlined />} />
      </Form.Item>

      <Form.Item<SignInData> name="password" rules={[{ required: true }]}>
        <Input.Password
          size="large"
          placeholder="Password"
          prefix={<LockOutlined />}
        />
      </Form.Item>

      <Form.Item<SignInData> name="remember" valuePropName="checked">
        <div className="flex">
          <Switch />
          <p className="ml-5 remember">Remember me</p>
        </div>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="w-full"
          size="large"
        >
          Sign In with Email
        </Button>
      </Form.Item>
      <Divider />
      <Form.Item>
        <GoogleSignIn />
      </Form.Item>
      <div className="flex justify-center flex-col items-center md:flex-row">
        <Text>Don`t you have an Account?</Text>
        <Link className="ml-2 font-bold" href="/register">
          Join ActivePix
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
