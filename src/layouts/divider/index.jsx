import React from "react";

//antd-components
import { Divider } from "antd";

function AntDivider() {
  return (
    <div
      style={{
        width: "500px",
      }}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
        reprehenderit sequi corrupti magnam facilis quod quo consequatur tenetur
        aliquam! Nemo sapiente non suscipit laudantium harum soluta, possimus
        dolor tempora eius.
      </p>
      <Divider orientation="" dashed>
        This is Divider
      </Divider>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
        aspernatur vitae minus! Repudiandae nesciunt illum est deleniti earum
        doloribus fugit doloremque! Tempora, sapiente illum. Repudiandae cumque
        obcaecati aliquam recusandae deleniti.
      </p>
    </div>
  );
}

export default AntDivider;
