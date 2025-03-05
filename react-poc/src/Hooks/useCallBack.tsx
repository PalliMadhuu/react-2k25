import { Button } from '@mui/material'
import { useCallback, useMemo, useState } from 'react'
import UseCallBackChildHook from './useCallBackChild'

export const UseCallBackHook = () => {
  const [count, setCount] = useState<number>(0)
  const [dummyState, setDummyState] = useState<number>(0)

  const getCount = useCallback((): number => {
    return count
  }, [count])

  // child will call only when the getCount func reference changes
  const memoizedFunc = useMemo(
    () => <UseCallBackChildHook getCount={getCount}></UseCallBackChildHook>,
    [getCount],
  )

  return (
    <div>
      <Button
        variant="contained"
        sx={{ marginRight: '10px' }}
        onClick={() => {
          setCount((prev) => prev + 1)
        }}
      >
        Increase Count
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          setCount((prev) => prev - 1)
        }}
        sx={{ marginRight: '10px' }}
      >
        Decrease Count
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          setDummyState((prev) => prev + 1)
        }}
      >
        Increase Dummy State
      </Button>

      {memoizedFunc}
    </div>
  )
}
