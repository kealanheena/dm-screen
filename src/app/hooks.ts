import React from 'react';
import { debounce, find, map }  from 'lodash';

export function useDebounce(callback: Function, delay: number) {
  const callbackRef = React.useRef(callback)

  React.useLayoutEffect(() => {
    callbackRef.current = callback
  })

  return React.useMemo(
    () => debounce((...args) => callbackRef.current(...args), delay),
    [delay],
  )
}