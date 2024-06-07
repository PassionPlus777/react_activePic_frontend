import { FC, useEffect, useState } from "react";
import { Col, Row, Input, Button, Layout } from "antd";
import { SearchOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import ContentItem from "./ContentItem";
// import SpinComponent from "../SpinComponent";

const { Header, Content } = Layout;

const HomeComponent: FC<any> = ({ ownedRaces }) => {
  const navigate = useNavigate();
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    setEvents(ownedRaces);
  }, [ownedRaces]);

  return (
    <Layout className="home-component h-full">
      <Header style={{ height: "auto" }} className="p-0">
        <Row className="justify-between">
          <Col sm={15} span={24}>
            <Input
              placeholder="What event are you looking for?"
              className="search-input font-sans"
              prefix={<SearchOutlined />}
            />
          </Col>
          <Col
            sm={7}
            lg={4}
            span={24}
            className="flex justify-end items-center"
          >
            <Button
              type="primary"
              icon={<PlusCircleOutlined />}
              className="new-event-button px-6 w-full"
              onClick={() => navigate("/event")}
            >
              New Event
            </Button>
          </Col>
        </Row>
      </Header>
      <Content className="mt-6 overflow-y-scroll">
        {events.map((event, index) => {
          return <ContentItem event={event} key={index} />;
        })}
      </Content>
    </Layout>
  );
};

export default HomeComponent;
