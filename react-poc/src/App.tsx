import './App.css'
import { UseCallBackHook } from './Hooks/useCallBack'
import UseMemoHook from './Hooks/useMemo'
import { UseReducerHook } from './Hooks/useReducerHook'

function App() {
  return (
    <>
      {/* <UseMemoHook></UseMemoHook> */}
      {/* <UseCallBackHook></UseCallBackHook> */}
      <UseReducerHook></UseReducerHook>
    </>
  )
}

export default App
