import React from 'react'

interface UseMemoChildProps {
  factorialOfNumber: number
}
const UseMemoChild: React.FC<UseMemoChildProps> = React.memo(
  ({ factorialOfNumber }) => {
    console.log('sdf')
    return (
      <div>
        <h2>{factorialOfNumber}</h2>
      </div>
    )
  },
)

// const UseMemoChild: React.FC<UseMemoChildProps> = ({ factorialOfNumber }) => {

//   return (
//     <div>
//       <h2>{factorialOfNumber} </h2>
//     </div>
//   )
// }

export default UseMemoChild
