import { FC, useEffect } from "react";
import { message } from "antd";
import { MessageDataTypes } from "@/types";

const MessageComponent: FC<MessageDataTypes> = ({ status, type, content }) => {
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    status &&
      messageApi.open({
        type: type,
        content: content,
      });
  }, [status]);

  return contextHolder;
};

export default MessageComponent;
