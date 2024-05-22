import { FC, useEffect, useState } from "react";
import { Col, Row, Input, Button } from "antd";
import { SearchOutlined, PlusCircleOutlined } from "@ant-design/icons";

import ContentItem from "./ContentItem";
import SpinComponent from "../SpinComponent";

const HomeComponent: FC<any> = ({ ownedRaces }) => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    setEvents(ownedRaces);
  }, [ownedRaces]);

  return (
    <>
      <div className="mt-4">
        <Row>
          <Col span={15}>
            <Input
              placeholder="What event are you looking for?"
              className="search-input font-sans"
              prefix={<SearchOutlined />}
            />
          </Col>
          <Col span={9} className="flex justify-center">
            <Button
              type="primary"
              icon={<PlusCircleOutlined />}
              className="px-6"
            >
              New Event
            </Button>
          </Col>
        </Row>
      </div>
      <div className="mt-6">
        {events.length ? (
          events.map((event, index) => {
            return <ContentItem event={event} key={index} />;
          })
        ) : (
          <SpinComponent />
        )}
      </div>
    </>
  );
};

export default HomeComponent;
