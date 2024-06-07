import { FC } from "react";
import type { FormProps } from "antd";
import { Button, Col, Divider, Form, Input, Row, Typography } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

import { SignUpData, SignUpFunc } from "@/types";
import GoogleSignIn from "../GoogleSignComponent";

const { Text, Link } = Typography;

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
      className="register-form content-center px-5 lg:px-24 w-full"
    >
      <Row className="justify-between">
        <Col span={24} sm={11}>
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
        <Col span={24} sm={11}>
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

      <div className="flex flex-col justify-center items-center md:flex-row mt-10">
        <Text className="flex items-center">Have an Account Already? </Text>
        <Link className="ml-2 font-bold" href="/login">
          Sign In
        </Link>
      </div>
    </Form>
  );
};

export default RegisterForm;
