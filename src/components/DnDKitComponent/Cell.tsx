import React from "react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, CardContent, CardMedia, Typography } from '@mui/material';


// typeof initialItems[number] => for when we decide the structure 
interface Item {
	id: number;
	title: string;
	height: number;
	width: number;
	img?: string;
}

interface CellProps {
	item: Item;
}

const Cell = ({ item }: CellProps) => {
  const sortable = useSortable({
    id: item.id,
    animateLayoutChanges: (args) => {
      // return false
      // return args.isSorting
      return !args.wasDragging
    },
  })

  const getPlaceholderHeight = () => {
    if (sortable.isOver && sortable.active) {
      return sortable.active.rect.current.initial?.height
    }

    if (sortable.isDragging && sortable.over) {
      return sortable.over.rect.height
    }

    return item.height
  }

  return (
    <div style={{ height: getPlaceholderHeight(), transition: "0.2s height" }}>
      <Card
        // This is the ref and need to be put up so I can add restrictToParentElement
        // otherwise it will not be moveable as the parent is just a container
        ref={sortable.setNodeRef}
        style={{
          height: item.height,
          lineHeight: item.height + "px",
          transform: CSS.Translate.toString(sortable.transform),
          transition: sortable.transition,
          opacity:
            sortable.isOver && sortable.over?.id !== sortable.active?.id
              ? 0.5
              : 1,
          fontWeight: 'bold',
          fontSize: '56px',
          textAlign: 'center',
        }}
        {...sortable.attributes}
        {...sortable.listeners}
      >
				{item.img && (
					<CardMedia
						component="img"
						// sx={{ width: '100%', height: '100%' }}
						image={item.img}
						title="green iguana"
					/>
				)}
				<CardContent>
					<Typography variant="h5" component="div">
						{item.title}
					</Typography>
					{item.id}
				</CardContent>
      </Card>
    </div>
  )
};

export default Cell;