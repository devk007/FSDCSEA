// Child1.js
import React from "react";
import Child2 from "./child2";

function Child1({ child1data }) {
  return (
    <div>
      <Child2 child2data={child1data} />
    </div>
  );
}

export default Child1;
