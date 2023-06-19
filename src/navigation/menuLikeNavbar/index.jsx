import React from "react";

//ant-components
import { Menu } from "antd";

function AntMenu() {
  const items = [
    {
      label: "Home",
      key: "home",
    },
    {
      label: "About",
      key: "about",
    },
    {
      label: "withChilds",
      key: "withChilds",
      children: [
        {
          type: "group",
          label: "childOne",
          children: [
            {
              label: "subChildONe",
              key: "subChildONe",
            },
            {
              label: "subChildTwo",
              key: "subChildTwo",
            },
          ],
        },
      ],
    },
  ];

  return <Menu defaultSelectedKeys={["home"]} items={items} mode="horizontal" />;
}

export default AntMenu;
