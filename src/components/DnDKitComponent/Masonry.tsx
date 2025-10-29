
import React, { Fragment, Key, ReactNode } from "react";

import Cell from './Cell';
import { CardType } from "@/types";


export function Masonry({
  items,
  gap,
}: {
  items: CardType[]
  columnWidth: number
  gap?: number | string
}) {

  return (
    <div style={{ gap, display: 'flex', flexWrap: 'wrap' }}>
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
