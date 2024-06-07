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
    <Layout className="h-full">
      <Header className="p-0">
        <Row className="justify-between">
          <Col span={15}>
            <Input
              placeholder="What event are you looking for?"
              className="search-input font-sans"
              prefix={<SearchOutlined />}
            />
          </Col>
          <Col className="flex justify-end items-center">
            <Button
              type="primary"
              icon={<PlusCircleOutlined />}
              className="px-6"
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
