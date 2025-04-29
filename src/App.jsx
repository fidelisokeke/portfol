import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Example from './components/Example';






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
   <Example />
    </>
  )
}

export default App
