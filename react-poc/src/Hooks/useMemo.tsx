import { TextField } from '@mui/material'
import React from 'react'
import { ChangeEvent, useMemo, useState } from 'react'
import UseMemoChild from './useMemoChild'

const UseMemoHook = () => {
  const [number, setNumber] = useState<number>(0)
  const [dummyState, setDummyState] = useState<number>(0)

  const calculateFactorial = (inputNumber: number) => {
    let result: number = 1
    if (inputNumber > 0) {
      for (let i = inputNumber; i >= 1; i--) {
        result *= i
      }
    }
    return result
  }

  const memoizeFactorial = useMemo(() => calculateFactorial(number), [number])

  return (
    <React.Fragment>
      <div>
        <TextField
          id="outlined-basic"
          label="Get Factorial"
          variant="outlined"
          type="number"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (e) {
              setNumber(Number(e.target.value))
            }
          }}
        />
        <TextField
          id="outlined-basic"
          label="Dummy State"
          variant="outlined"
          type="number"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (e) {
              setDummyState(Number(e.target.value))
            }
          }}
        />
      </div>
      <UseMemoChild factorialOfNumber={memoizeFactorial}></UseMemoChild>
    </React.Fragment>
  )
}

export default UseMemoHook
