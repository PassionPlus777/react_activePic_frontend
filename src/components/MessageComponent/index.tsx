import { FC, useEffect } from "react";
import { message } from "antd";
import { MessageDataTypes } from "@/types";

const MessageComponent: FC<MessageDataTypes> = ({
  datetime,
  type,
  content,
}) => {
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    datetime &&
      messageApi.open({
        type: type,
        content: content,
      });
  }, [datetime]);

  return contextHolder;
};

export default MessageComponent;
