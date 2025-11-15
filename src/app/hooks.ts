import React from 'react';
import { debounce }  from 'lodash';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useDebounce(callback: any, delay: number) {
  const callbackRef = React.useRef(callback)

  React.useLayoutEffect(() => {
    callbackRef.current = callback
  })

  return React.useMemo(
    () => debounce((...args) => callbackRef.current(...args), delay),
    [delay],
  )
}