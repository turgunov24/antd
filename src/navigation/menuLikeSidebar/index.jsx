import React, { useState } from "react";

//antd-components
import { Button, Menu } from "antd";

function AntMenu() {
  const [collapse, setCollapse] = useState(false);

  const getItem = (label, key, children, type) => {
    return {
      key,
      children,
      label,
      type,
    };
  };

  const items = [
    getItem("One", "1"),
    getItem("Two", "2"),
    getItem("Three", "3"),
    getItem("Four", "4", [
      getItem("subItemOne", "5"),
      getItem("subItemTwo", "6"),
    ]),
  ];

  return (
    <div
      style={{
        width: "256px",
      }}
    >
      <Menu
        items={items}
        defaultSelectedKeys={["1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapse}
      />
      <Button onClick={() => setCollapse(!collapse)} />
    </div>
  );
}

export default AntMenu;
