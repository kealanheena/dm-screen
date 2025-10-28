
import { Fragment, Key, ReactNode } from "react"
import { range } from "./range"
import { useSize } from "./useSizes"

export function Masonry<T>({
  items,
  itemKey,
  columnWidth,
  gap,
  renderItem,
}: {
  items: T[]
  itemKey: (item: T) => Key
  columnWidth: number
  gap?: number | string
  renderItem: (item: T) => ReactNode
}) {
  const [sizeRef, size] = useSize()
  const columnCount = Math.floor(size.width / columnWidth)

  return (
    <div ref={sizeRef} style={{ gap, display: 'flex' }}>
      {range(columnCount).map((columnIndex) => (
        <div key={columnIndex} style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          gap
        }}>
          {range(columnIndex, items.length, columnCount).map((itemIndex) => (
            <Fragment key={itemKey(items[itemIndex])}>
              {renderItem(items[itemIndex])}
            </Fragment>
          ))}
        </div>
      ))}
    </div>
  )
}
