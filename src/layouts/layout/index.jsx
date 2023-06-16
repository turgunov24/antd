import React from "react";

//antd-components
import { Layout, Space } from "antd";

function AntLayout() {
  const { Header, Content, Sider, Footer } = Layout;
  return (
    <Space direction="vertical" style={{ width: "100%", height: "100%" }}>
      <Layout hasSider >
        <Sider>This is Sider Component</Sider>
        <Layout>
          <Header style={{ background: "#909090" }}>
            This is Header Component
          </Header>
          <Content>This is Content Component</Content>
          <Footer>This is Footer Component</Footer>
        </Layout>
      </Layout>
    </Space>
  );
}

export default AntLayout;
