import React from "react";
import { ResizableBox } from "react-resizable";

import "react-resizable/css/styles.css";

export default function Dashboard({
  width = 500,
  height = 300,
  resizable = true,
  style = {}
}) {
  return (
    <div>
      {resizable ? (
        <ResizableBox width={width} height={height}>
          <div
            style={{
              ...style,
              width: "100%",
              height: "100%"
            }}
          >
          </div>
        </ResizableBox>
      ) : (
        <div
          style={{
            width: `${width}px`,
            height: `${height}px`,
            ...style
          }}
        >
        </div>
      )}
    </div>
  );
}
