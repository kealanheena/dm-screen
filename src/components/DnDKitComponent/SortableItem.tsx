import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, CardContent, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import OpenWithIcon from '@mui/icons-material/OpenWith';

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
    width: props.id % 2 === 0 ? "250px" : "500px",
    height: "200px",
    border: "2px solid red",
    backgroundColor: "#cccccc",
    margin: "10px",
    zIndex: isDragging ? "100" : "auto",
    opacity: isDragging ? 0.3 : 1,
  };

  return (
    <Card ref={setNodeRef} style={style}>
      <CardContent>
        <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>
            Title
          </Typography>
          <Tooltip title="Move card">
            <IconButton>
              <OpenWithIcon {...listeners} {...attributes} />
            </IconButton>
          </Tooltip>
        </Grid>

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
      </CardContent>
    </Card>
  );
};

export default SortableItem;
