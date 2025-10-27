import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable({
  children,
  id,
}: Readonly<{
  children: React.ReactNode;
  id: string,
}>) {
  const {isOver, setNodeRef} = useDroppable({
    id,
  });
  const style = {
    color: isOver ? 'green' : undefined,
    height: '100%',
    backgroundColor: 'red'
  };
  
  
  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}