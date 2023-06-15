import React from "react";
//antd-components
import { Typography } from "antd";

function AntTypography() {
  const { Text, Link } = Typography;

  return (
    <div>
      <Text type="success">This is Text !</Text>
      <Link href="https://www.google.com" type="danger">This is Link !</Link>
    </div>
  );
}

export default AntTypography;
