import React from "react";
import { Tabs } from "antd";

import type { TabsProps } from "antd";
import TabConfigs from "./TabConfigs";

const items: TabsProps["items"] = [...TabConfigs()];

const EventComponent: React.FC = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <Tabs
      defaultActiveKey="3"
      items={items}
      onChange={onChange}
      className="h-full"
    />
  );
};

export default EventComponent;
