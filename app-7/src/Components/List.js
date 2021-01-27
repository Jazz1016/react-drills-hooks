import React from "react";
import ToDo from "./ToDo";

function List(props) {
  let listDisplay = props.list.map((item, index) => {
    return <ToDo item={item} key={index} />;
  });
  return <div>{listDisplay}</div>;
}

export default List;
