import React from "react";

//antd-components
import { Row, Col } from "antd";

function AntGrid() {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "700px",
        height: "500px",
        color: "white",
      }}
    >
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        justify={"space-around"}
        align={"middle"}
      >
        <Col
          order={3}
          span={5}
          style={{
            backgroundColor: "blue",
            height: "100px",
          }}
        >
          col-1
        </Col>
        <Col
          order={1}
          span={5}
          style={{
            backgroundColor: "green",
            height: "50px",
          }}
        >
          col-24
        </Col>
        <Col
          order={2}
          span={5}
          style={{
            backgroundColor: "orange",
          }}
        >
          col-2
        </Col>
      </Row>
    </div>
  );
}

export default AntGrid;
