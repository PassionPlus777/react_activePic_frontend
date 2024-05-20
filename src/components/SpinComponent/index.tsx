import { FC } from "react";
import { Flex, Spin } from "antd";

const SpinComponent: FC = () => (
  <Flex className="mt-32 flex justify-center">
    <Spin size="large" />
  </Flex>
);

export default SpinComponent;
