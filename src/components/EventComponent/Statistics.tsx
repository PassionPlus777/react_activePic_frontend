import { FC } from "react";
import { Card, Typography, Row, Col } from "antd";

interface StatisticCardProps {
  title?: string;
  value?: number;
}

const StatisticCard: FC<StatisticCardProps> = ({ title, value }) => {
  return (
    <div className="flex flex-col p-2 statistic-card">
      <Typography.Title level={5} className="text-center">
        {title}
      </Typography.Title>
      <p className="text-center text-5xl font-bold my-3">{value}</p>
    </div>
  );
};

const Statistics = () => {
  return (
    <Card
      title="EVENT STATISTICS"
      bordered={false}
      className="h-full overflow-y-scroll"
    >
      <Typography.Title level={5}>
        * Please contact support@activePic.com if you have any issues
      </Typography.Title>

      <Row className="mt-8">
        <Col span={5}>
          <StatisticCard title={"Total Participants"} value={3615} />
        </Col>
        <Col span={5} offset={1}>
          <StatisticCard title={"Images Uploaded"} value={21674} />
        </Col>
        <Col span={5} offset={1}>
          <StatisticCard title={"Galleries Activated"} value={3196} />
        </Col>
        <Col span={5} offset={1}>
          <StatisticCard title={"Total Impressions"} value={364885} />
        </Col>
      </Row>
    </Card>
  );
};

export default Statistics;
