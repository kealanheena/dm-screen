'use client'

import React, { useState } from 'react';
import { DndContext, DragEndEvent, pointerWithin } from '@dnd-kit/core';

import { Box } from '@mui/material';

import { Droppable } from './Droppable';
import { Draggable } from './Draggable';


export default function BasicDragDrop() {
  const [isDropped, setIsDropped] = useState(false);

  const handleDragEnd = (event: DragEndEvent) => {
    console.log({event})
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
      return;
    }

    setIsDropped(false);
  };

  console.log({ isDropped });

  return (
    <DndContext collisionDetection={pointerWithin} onDragEnd={handleDragEnd}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          padding: '35px',
          borderRadius: 1,
          display: 'flex',
        }}
      >
        {!isDropped && <Draggable id="draggable">Drag Me</Draggable>}

        <Droppable id="droppable"> 
          {isDropped && <Draggable id="draggable"> Drag Me</Draggable>}
        </Droppable>
      </Box>
    </DndContext>
  )
}