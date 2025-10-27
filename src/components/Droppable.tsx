import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable({
  children,
  id,
}: Readonly<{
  children?: React.ReactNode;
  id: string,
}>) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });
  const style = {
    height: '100%',
    width: '100%',
  };

  const droppableStyle = {
    height: '200px',
    width: '200px',
    display: 'flex',
    border: '3px dotted #90D5FF',
    marginLeft: '10px'
  }
  
  return (
     <div ref={setNodeRef} style={style}>
      <span style={{
        ...droppableStyle,
        backgroundColor: isOver ? '#90D5FF' : undefined,
      }}>
        {children || (<span>Drop Here</span>)}
      </span>
    </div>
  );
}