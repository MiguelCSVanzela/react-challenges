import React from "react";

const NestedList = () => {
  let list = [
    ["item 1.1", "item 1.2", "item 1.3"],
    ["item 2.1", "item 2.2", "item 2.3"],
    ["item 3.1", "item 3.2", "item 3.3"],
  ];

  return (
    <ul>
      {list.map((subList, index) => (
        <li key={index}>
          <ul>
            {subList.map((item, subIndex) => (
              <li key={subIndex}>{item}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default NestedList;
