import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card } from "@mui/material";

const SortableItem = (props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    width: props.id % 2 === 0 ? "100px" : "200px",
    height: "100px",
    border: "2px solid red",
    backgroundColor: "#cccccc",
    margin: "10px",
    zIndex: isDragging ? "100" : "auto",
    opacity: isDragging ? 0.3 : 1,
  };

  console.log({ props, modulus: props.id % 2 });

  return (
    <div ref={setNodeRef} style={style}>
      <Card>
        <button {...listeners} {...attributes}>
          Drag handle
        </button>
        <div
          style={{
            minWidth: props.id % 2 === 0 ? "30px" : "60px",
            minHeight: "20px",
            border: "1px solid balck",
            borderColor: "black",
          }}
        >
          {props.value}
        </div>
      </Card>
    </div>
  );
};

export default SortableItem;
