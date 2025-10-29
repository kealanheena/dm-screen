'use client'

import React, { useState } from "react";
import { find, findIndex, map } from 'lodash';
import { Grid } from "@mui/material";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  DragStartEvent,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy
} from "@dnd-kit/sortable";

import { CardType } from "@/types";

import SortableItem from "./SortableItem";
import ActiveItem from "./ActiveItem";

const GRIDSPACEING = 2;

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
  const [activeItem, setActiveItem] = useState<CardType | null>(null);
  const [items, setItems] = useState<CardType[]>(testData);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    const newActiveItem: CardType | null = find(items, ['id', event.active.id]) || null;

    setActiveItem(newActiveItem);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    setActiveItem(null);

    if (!active || !over) {
      return;
    }

    if (active.id !== over.id) {
      const oldIndex = findIndex(items, ['id', active.id]);
      const newIndex = findIndex(items, ['id', over.id]);

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
        spacing={GRIDSPACEING}
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>

          {map(items, (item) => (
            <SortableItem
              key={item.id}
              {...item}
            />
          ))}

          <DragOverlay>
            {activeItem ? <ActiveItem {...activeItem}/>  : null}
          </DragOverlay>
        </SortableContext>
      </Grid>
    </DndContext>
  );
};

export default App;
