import MessageComponent from "@/components/MessageComponent";
import { useAppSelector } from "@/store";

const MessagePage = () => {
  const message = useAppSelector((state) => state.message);

  return <MessageComponent message />;
};

export default MessagePage;
