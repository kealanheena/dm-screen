'use client'

import React, { useState } from "react";
import { find, findIndex, map } from 'lodash';
import { Card, Grid } from "@mui/material";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy
} from "@dnd-kit/sortable";

import { CardType } from "@/types";

import SortableItem from "./SortableItem";

const testData: CardType[] = [{
  id: 1,
	title: 'First Item DND',
	width: 2
}, {
  id: 2,
	title: 'New DND Item',
	width: 5
}, {
  id: 3,
	title: 'DND Maps',
	width: 3
}, {
  id: 4,
	title: 'Combat Tracker',
	width: 2
}] 

const App = () => {
  const [activeId, setActiveId] = useState(null);
  const [items, setItems] = useState<CardType[]>(testData);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const handleDragStart = (event) => {
    console.log({ 
      eventActoveId: event.active.id,
      eventActove: event.active
    })
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    setActiveId(null);

    if (active.id !== over.id) {
      const oldIndex = findIndex(items, ['id', active.id]);
      const newIndex = findIndex(items, ['id', over.id]);

      console.log({
        oldIndex,
        newIndex
      });

      const newItems = arrayMove(items, oldIndex, newIndex);

      setItems(newItems);
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <Grid
        container
        direction="row"
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>
          {map(items, ({ id }) => <SortableItem key={id} id={id} value={id} />)}
          <DragOverlay>
            {activeId ? (
              <SortableItem key={activeId} id={activeId} value={activeId}  />
            ) : null}
          </DragOverlay>
        </SortableContext>
      </Grid>
    </DndContext>
  );
};

export default App;
