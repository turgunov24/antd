import React from "react";

//antd-components
import { Breadcrumb } from "antd";

function AntBreadCrumb() {
  return (
    <Breadcrumb
      items={[
        {
          title: "Home",
        },
        {
          title: "Main",
        },
      ]}
    />
  );
}

export default AntBreadCrumb;
