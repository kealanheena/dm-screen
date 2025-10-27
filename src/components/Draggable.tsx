import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Card } from '@mui/material';

const draggableStyle = {
  height: '100px',
  width: '100px',
  display: 'flex',
  backgroundColor: '#90D5FF',
}

export function Draggable({
  children,
  id,
}: Readonly<{
  children?: React.ReactNode;
  id: string,
}>) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = transform ? {
    ...draggableStyle,
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : draggableStyle;

  
  return (
    <Card ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </Card>
  );
}