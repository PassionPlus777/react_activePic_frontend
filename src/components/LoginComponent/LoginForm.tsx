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
      className="login-form content-center px-5 lg:px-24 w-full"
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
        <Input placeholder="example@anyemail.com" prefix={<MailOutlined />} />
      </Form.Item>

      <Form.Item<SignInData> name="password" rules={[{ required: true }]}>
        <Input.Password placeholder="Password" prefix={<LockOutlined />} />
      </Form.Item>

      <Form.Item<SignInData> name="remember" valuePropName="checked">
        <div className="flex justify-between">
          <div className="flex">
            <Switch />
            <Text style={{ lineHeight: "25px" }} className="ml-5 font-bold">
              Remember me
            </Text>
          </div>
          <div>
            <Link className="ml-2 font-bold" href="/register">
              Forgot Password
            </Link>
          </div>
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
      <div className="flex flex-col justify-center items-center md:flex-row mt-10">
        <Text className="flex items-center">Don`t you have an Account?</Text>
        <Link className="ml-2 font-bold" href="/register">
          Join ActivePix
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
