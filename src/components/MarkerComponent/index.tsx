import { Card, Typography, InputNumber, Row, Col, Button } from "antd";

const MarkerComponent = () => {
  return (
    <Card
      title="PLEASE ENTER THE RANGE YOU WOULD LIKE"
      bordered={false}
      className="h-full overflow-y-scroll"
    >
      <Typography.Title level={5}>Range Distance 1</Typography.Title>

      <Row>
        <Col span={4}>
          <InputNumber
            min={1}
            max={49999}
            defaultValue={0}
            className="w-full"
          />
        </Col>
        <Col span={4} offset={2}>
          <InputNumber
            min={1}
            max={49999}
            defaultValue={0}
            className="w-full"
          />
        </Col>
        <Col span={4} offset={4}>
          <Button type="primary" htmlType="submit" className="w-full">
            Download Markers
          </Button>
        </Col>
      </Row>

      <Typography.Title level={5} className="mt-4">
        Range Distance 2
      </Typography.Title>

      <Row>
        <Col span={4}>
          <InputNumber
            min={1}
            max={49999}
            defaultValue={0}
            className="w-full"
          />
        </Col>
        <Col span={4} offset={2}>
          <InputNumber
            min={1}
            max={49999}
            defaultValue={0}
            className="w-full"
          />
        </Col>
        <Col span={4} offset={4}>
          <Button type="primary" htmlType="submit" className="w-full">
            Download Markers
          </Button>
        </Col>
      </Row>

      <Typography.Title level={5} className="mt-4">
        Range Distance 3
      </Typography.Title>

      <Row>
        <Col span={4}>
          <InputNumber
            min={1}
            max={49999}
            defaultValue={0}
            className="w-full"
          />
        </Col>
        <Col span={4} offset={2}>
          <InputNumber
            min={1}
            max={49999}
            defaultValue={0}
            className="w-full"
          />
        </Col>
        <Col span={4} offset={4}>
          <Button type="primary" htmlType="submit" className="w-full">
            Download Markers
          </Button>
        </Col>
      </Row>

      <Typography.Title level={5} className="mt-4">
        Range Distance 4
      </Typography.Title>

      <Row>
        <Col span={4}>
          <InputNumber
            min={1}
            max={49999}
            defaultValue={0}
            className="w-full"
          />
        </Col>
        <Col span={4} offset={2}>
          <InputNumber
            min={1}
            max={49999}
            defaultValue={0}
            className="w-full"
          />
        </Col>
        <Col span={4} offset={4}>
          <Button type="primary" htmlType="submit" className="w-full">
            Download Markers
          </Button>
        </Col>
      </Row>

      <Typography.Title level={5} className="mt-4">
        Range Distance 6
      </Typography.Title>

      <Row>
        <Col span={4}>
          <InputNumber
            min={1}
            max={49999}
            defaultValue={0}
            className="w-full"
          />
        </Col>
        <Col span={4} offset={2}>
          <InputNumber
            min={1}
            max={49999}
            defaultValue={0}
            className="w-full"
          />
        </Col>
        <Col span={4} offset={4}>
          <Button type="primary" htmlType="submit" className="w-full">
            Download Markers
          </Button>
        </Col>
      </Row>

      <Typography.Title level={5} className="mt-4">
        Range Distance 5
      </Typography.Title>

      <Row>
        <Col span={4}>
          <InputNumber
            min={1}
            max={49999}
            defaultValue={0}
            className="w-full"
          />
        </Col>
        <Col span={4} offset={2}>
          <InputNumber
            min={1}
            max={49999}
            defaultValue={0}
            className="w-full"
          />
        </Col>
        <Col span={4} offset={4}>
          <Button type="primary" htmlType="submit" className="w-full">
            Download Markers
          </Button>
        </Col>
      </Row>

      <Button type="primary" htmlType="submit" className="w-full mt-8">
        Download All Markers
      </Button>
    </Card>
  );
};

export default MarkerComponent;
