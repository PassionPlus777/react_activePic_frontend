import { ContentHeaderProps } from "@/types";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { FC } from "react";
import { Link } from "react-router-dom";

const HeaderComponent: FC<ContentHeaderProps> = ({
  dispatchSetMobileStatus,
}) => {
  return (
    <div className="header-component p-5 lg:p-0">
      <div className="icon lg:hidden inline p-1 rounded-md cursor-pointer">
        <MenuUnfoldOutlined
          style={{ fontSize: 25, color: "rgba(76, 81, 86, 1)" }}
          onClick={() => dispatchSetMobileStatus(true)}
        />
      </div>
      <Link to="/" className="flex justify-center p-3 rounded-md">
        <img src={"/images/mark.png"} alt="mark" />
      </Link>
      <Link to="/" className="flex justify-center mt-4">
        Logged in as&nbsp;<span className="user-email">test@test.com</span>
      </Link>
    </div>
  );
};

export default HeaderComponent;
