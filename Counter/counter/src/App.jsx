import { useState } from 'react'
import Counter from './Counter.jsx'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
        <Counter/>
    </div>
  )
}
export default App
