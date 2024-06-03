import { FC } from "react";
import type { FormProps } from "antd";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

import { SignUpData, SignUpFunc } from "@/types";
import GoogleSignIn from "../GoogleSignComponent";

const RegisterForm: FC<SignUpFunc> = ({ dispatchSignUp }) => {
  const onFinish: FormProps<SignUpData>["onFinish"] = (values) => {
    dispatchSignUp(values);
  };

  const onFinishFailed: FormProps<SignUpData>["onFinishFailed"] = (
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
      <Row className="justify-between">
        <Col md={11}>
          <Form.Item<SignUpData>
            name="firstName"
            className="w-full"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Your First Name" size="large" />
          </Form.Item>
        </Col>
        <Col md={11}>
          <Form.Item<SignUpData>
            name="surName"
            className="w-full"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Your Surname" size="large" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item<SignUpData>
        name="email"
        className="w-full"
        rules={[
          {
            required: true,
            type: "email",
          },
        ]}
      >
        <Input
          placeholder="Your primary email address..."
          size="large"
          prefix={<MailOutlined />}
        />
      </Form.Item>

      <Form.Item<SignUpData> name="password" rules={[{ required: true }]}>
        <Input.Password
          size="large"
          placeholder="Your password here..."
          prefix={<LockOutlined />}
        />
      </Form.Item>
      <Form.Item<SignUpData>
        name="cPassword"
        rules={[
          { required: true, message: "Please confirm your password!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password
          size="large"
          placeholder="Confirm your password here..."
          prefix={<LockOutlined />}
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="w-full"
          size="large"
        >
          Sign Up with Email
        </Button>
      </Form.Item>
      <Divider />
      <Form.Item>
        <GoogleSignIn />
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
