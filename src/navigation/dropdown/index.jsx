import React from "react";

//antd-components
import { Dropdown, Button } from "antd";

function AntDropdown() {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.google.com"
        >
          google.com
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.yahoo.com"
        >
          yahoo.com
        </a>
      ),
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottom">
      <Button>dropdown</Button>
    </Dropdown>
  );
}

export default AntDropdown;
