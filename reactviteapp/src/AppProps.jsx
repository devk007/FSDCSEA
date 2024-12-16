// AppProps.js
import React from "react";
import Child1 from "./child1";

function AppProps() {
  const data = {
    name: "Dev",
    class: "CSE",
    section: "A",
  };

  return (
    <div>
      <Child1 child1data={data} />
    </div>
  );
}

export default AppProps;
