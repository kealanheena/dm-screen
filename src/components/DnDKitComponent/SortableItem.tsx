import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, CardContent, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import OpenWithIcon from '@mui/icons-material/OpenWith';
import { CardType } from "@/types";


const SortableItem = ({ id, width, title }: CardType) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    height: "200px",
    zIndex: isDragging ? "100" : "auto",
    opacity: isDragging ? 0.3 : 1,
  };

  return (
    <Grid size={width}>
      <Card ref={setNodeRef} style={style}>
        <CardContent>
          <Grid
            container
            sx={{ justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Typography>
              {title}
            </Typography>

            <Tooltip title="Move card">
              <IconButton>
                <OpenWithIcon {...listeners} {...attributes} />
              </IconButton>
            </Tooltip>
          </Grid>

          <Typography >
            {id}
          </Typography>

        </CardContent>
      </Card>
    </Grid>
  );
};

export default SortableItem;
