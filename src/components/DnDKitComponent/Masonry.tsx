
import React, { Fragment, Key, ReactNode } from "react";

import Cell from './Cell';

interface Item {
	id: number;
	title: string;
	height?: number;
  width: number;
	img?: string;
}

export function Masonry({
  items,
  gap,
}: {
  items: Item[]
  columnWidth: number
  gap?: number | string
}) {

  return (
    <div style={{ gap, display: 'flex', flex: 'wrap' }}>
      {items.map((item) => (
        <div key={item.id} style={{
          width: `${(item.width / 12)* 100}%`,
        }}>
          <Cell item={item}/>
        </div>
      ))}
    </div>
  )
}
