import { FC, useState } from "react";
import { Tabs } from "antd";

import TabConfigs from "./TabConfigs";
import { EventData } from "@/types";

const EventComponent: FC<any> = ({ dispatchCreateRace }) => {
  const [eventData, setEventData] = useState<EventData>({});
  const [key, setKey] = useState<string>("1");

  const onChange = (selectedKey: string) => {
    setKey(selectedKey);
    // if (selectedKey > "4") setKey(selectedKey);
    // else if (key > "4") setKey("1");
    // else if (key < "5" && selectedKey < key) setKey(selectedKey);
  };

  return (
    <Tabs
      activeKey={key}
      items={[
        ...TabConfigs(setEventData, setKey, eventData, dispatchCreateRace),
      ]}
      onChange={onChange}
      className="h-full"
    />
  );
};

export default EventComponent;
