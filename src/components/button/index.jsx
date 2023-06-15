import React, { useState, useEffect } from "react";
//antd-components
import { Button } from "antd";
//icons
import { DribbbleSquareOutlined } from "@ant-design/icons";

//additional

function AntButton() {
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    let timeout;
    if (toggle) {
      setLoading(true);
      timeout = setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [toggle]);

  return (
    <Button
      type="primary"
      size="large"
      loading={loading}
      ghost
      onClick={() => setToggle(!toggle)}
    >
      hey !
    </Button>
  );
}

export default AntButton;
