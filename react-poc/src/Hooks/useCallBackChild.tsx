import { memo } from 'react'

interface UseCallBackChildProps {
  getCount: () => number
}
const UseCallBackChildHook: React.FC<UseCallBackChildProps> = ({
  getCount,
}) => {
  console.log('renderes')
  return (
    <div>
      <h2>{getCount()}</h2>
    </div>
  )
}

export default memo(UseCallBackChildHook)
