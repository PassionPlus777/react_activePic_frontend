import { FC } from "react";
import { FormattedMessage } from "react-intl";
import { Col, Row } from "antd";

import RegisterForm from "./RegisterForm";
import { SignUpFunc } from "@/types";

const LoginComponent: FC<SignUpFunc> = ({ dispatchSignUp }) => {
  return (
    <Row className="w-full h-full bg-default">
      <Col lg={15} className="flex w-full justify-center">
        <div className="flex lg:flex-row flex-col justify-center items-center title">
          <div className="flex justify-center">
            <FormattedMessage id="welcome" />
          </div>
          <div className="lg:mt-0 mt-5">
            <img src={"/images/mark.png"} alt="mark" />
          </div>
        </div>
      </Col>
      <Col lg={9} className="flex bg-white w-full">
        <RegisterForm dispatchSignUp={dispatchSignUp} />
      </Col>
    </Row>
  );
};

export default LoginComponent;
