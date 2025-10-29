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
import { CardType } from "@/types"

const initialItems: CardType[] = [{
  id: 3,
  title: 'Test Combat Tracker',
  height: 25,
  width: 11,
}, {
  id: 3,
  title: 'Test Combat Tracker',
  height: 25,
  width: 11,
}];

const DnDKitComponent = () => {
  const [cards, setCards] = useState(initialItems)

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
          setCards((items) => {
            const oldIndex = items.findIndex((item) => item.id === active.id)
            const newIndex = items.findIndex((item) => item.id === over.id)

            return arraySwap(items, oldIndex, newIndex)
          })
        }
      }}
    >
        <div style={{
          padding: '16px',
          height: '100%'
        }}>
          <SortableContext items={cards} strategy={rectSwappingStrategy}>
            <Masonry
              items={cards}
              columnWidth={300}
              gap={8}
            />
          </SortableContext>
        </div>
    </DndContext>
  );
}

export default DnDKitComponent;
