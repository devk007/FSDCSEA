import React from "react";
import './student.css' 
const Student = () => {
  return (
    <div className="icard">
      <table border={2}>
        <tr>
          <th>Name</th>
          <th>Roll NO.</th>
          <th>Branch</th>
        </tr>
        <tr>
          <td>Dev</td>
          <td>53</td>
          <td>CSE</td>
        </tr>
      </table>
    </div>
  );
};

export default Student;