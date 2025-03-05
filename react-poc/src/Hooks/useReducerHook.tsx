import { Button } from '@mui/material'
import { Reducer, useReducer } from 'react'

interface InitialState {
  userInfo?: string
  personalInfo?: string
}

interface Action {
  type: string
  payload: InitialState
}
export const UseReducerHook = () => {
  const initialState: InitialState = {
    userInfo: '',
    personalInfo: '',
  }

  const reducerFunc: Reducer<InitialState, Action> = (
    state,
    action,
  ): InitialState => {
    switch (action.type) {
      case 'user_info':
        return { ...state, userInfo: action.payload.userInfo }

      case 'personal_info':
        return { ...state, personalInfo: action.payload.personalInfo }
      default:
        throw new Error('Invalid Action Type Error')
    }
  }
  const [state, dispatch] = useReducer(reducerFunc, initialState)
  return (
    <div>
      <h1>UseReducer Hook</h1>
      <Button
        onClick={() =>
          dispatch({
            type: 'user_info',
            payload: {
              userInfo: 'Madhu Palli',
            },
          })
        }
      >
        Set UserInfo{' '}
      </Button>
      <h3>{state.userInfo}</h3>

      <Button
        onClick={() => {
          dispatch({
            type: 'personal_info',
            payload: { personalInfo: 'Gender : Male' },
          })
        }}
      >
        Set Personal Info
      </Button>
      <h3>{state.personalInfo}</h3>
    </div>
  )
}
