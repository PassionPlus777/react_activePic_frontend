import { useAppSelector } from "@/store";

import MessageComponent from "@/components/MessageComponent";

const MessagePage = () => {
  const message = useAppSelector((state) => state.message);

  return <MessageComponent {...message} />;
};

export default MessagePage;
