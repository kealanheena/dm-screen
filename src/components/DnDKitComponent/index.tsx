"use client"

import React, { useState } from "react"
import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import {
  arraySwap,
  rectSwappingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable"

import { Masonry } from "./Masonry"
import { range } from "./range"
import Cell from './Cell';

const initialItems = [{
  id: 1,
  title: 'Test Maps',
  img: '',
  height: 1000,
}, {
  id: 2,
  title: 'Test Conditions',
  height: 150,
}, {
  id: 3,
  title: 'Test Combat Tracker',
  height: 250,
}]

const DnDKitComponent = () => {
  const [items, setItems] = useState(initialItems)

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragEnd={(event) => {
        console.log({ event })
        const { active, over } = event
        if (over && active.id !== over.id) {
          setItems((items) => {
            const oldIndex = items.findIndex((item) => item.id === active.id)
            const newIndex = items.findIndex((item) => item.id === over.id)

            return arraySwap(items, oldIndex, newIndex)
          })
        }
      }}
    >
        <div style={{
          padding: '8px',
          height: '100%'
        }}>
          <SortableContext items={items} strategy={rectSwappingStrategy}>
            <Masonry
              items={items}
              itemKey={(item) => item.id}
              columnWidth={300}
              gap={8}
              renderItem={(item) => <Cell item={item} />}
            />
          </SortableContext>
        </div>
    </DndContext>
  );
}

export default DnDKitComponent;
