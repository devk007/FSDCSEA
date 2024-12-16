// Child3.js
import React from "react";

function Child3({ child3data }) {
  return (
    <div>
      <div>
        Name: {child3data.name} <br />
        Class: {child3data.class} <br />
        Section: {child3data.section}
      </div>
    </div>
  );
}

export default Child3;
