import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContentItemButton } from "../ButtonComponent";
import { Col, Collapse, Row } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const { Panel } = Collapse;
interface ContentItemDataTypes {
  event: any;
}

const ContentItem: FC<ContentItemDataTypes> = ({ event }) => {
  const navigate = useNavigate();

  const [activeKey, setActiveKey] = useState<number>(0);

  const eventSetup = (event: any) => {
    console.log(event);

    navigate("/event");
  };

  return (
    <Row className="content-item flex-col lg:flex-row justify-around items-center p-2 px-4 rounded-md mt-3 relative">
      <Col
        lg={12}
        span={24}
        className="flex justify-around items-center w-full"
      >
        <div className="flex justify-center items-center rounded-md cursor-pointer w-[140px] h-[90px] overflow-hidden">
          <img
            src={`https://cms.activepix.com/siteAssets/${event?.image?.filename}`}
            alt="Item picture"
          />
        </div>
        <div className="flex flex-col justify-around rounded-md px-10 p-1 w-[250px] h-[90px]">
          <p className="text-lg text-white font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
            {event.name}
          </p>
          <p className="text-base text-white whitespace-nowrap overflow-hidden text-ellipsis">
            {event.location}
          </p>
          <p className="text-base text-white whitespace-nowrap overflow-hidden text-ellipsis">
            {event.date}
          </p>
        </div>
      </Col>
      <Col span={24} className="lg:hidden mt-1">
        {activeKey ? (
          <UpOutlined
            onClick={() => setActiveKey(0)}
            className="text-3xl text-white mt-1"
          />
        ) : (
          <DownOutlined
            onClick={() => setActiveKey(1)}
            className="text-3xl text-white mt-1"
          />
        )}
      </Col>
      <Col
        lg={12}
        className="lg:flex flex flex-col hidden lg:flex-row justify-around"
      >
        <ContentItemButton name="View Map" icon="icon (23).png" />
        <ContentItemButton
          name="Event Setup"
          onClick={() => eventSetup(event)}
        />
        <ContentItemButton name="Upload" />
      </Col>
      <Col span={24} className="w-full lg:hidden block">
        <Collapse
          accordion
          activeKey={[activeKey]}
          expandIcon={() => null}
          className=""
        >
          <Panel header={null} key={1}>
            <>
              <ContentItemButton name="View Map" icon="icon (23).png" />
              <ContentItemButton
                name="Event Setup"
                onClick={() => eventSetup(event)}
              />
              <ContentItemButton name="Upload" />
            </>
          </Panel>
        </Collapse>
      </Col>
    </Row>
  );
};

export default ContentItem;
