import{
  useContext,
  useEffect, 
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { debounce, map }  from 'lodash';
import { ScreenContext } from './context';
import { getPlayerCharacters } from '@/actions/playerCharacter.action';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useDebounce<CallbackType extends (...args: any[]) => any>(callback: CallbackType, delay: number) {
  const callbackRef = useRef(callback)

  useLayoutEffect(() => {
    callbackRef.current = callback
  })

  return useMemo(
    () => debounce((...args) => callbackRef.current(...args), delay),
    [delay],
  )
};

// 
export function useFetchScreenData() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const context = useContext(ScreenContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  useEffect(() => {
    const fetchListData = async () => {
      try {
        const result = await getPlayerCharacters();

        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListData();
  }, []); // The effect runs again if the URL changes

  // Return the necessary states for components to use
  return { data, isLoading, error };
};
