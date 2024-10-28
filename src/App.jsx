import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div id='content'>
        <img src="emblems.jpeg" alt="Tomorrow starts yesterday." />
        <h1>Lorem Ipsum</h1>
        <p>
        Ex esse ullamco consequat quis mollit Lorem tempor culpa deserunt cupidatat. Ad in eiusmod qui adipisicing. Incididunt ut ea ipsum. Pariatur ex amet cillum enim ullamco adipisicing sit ut Lorem. Reprehenderit ea et aliquip pariatur. Aute sit consequat Lorem cupidatat cupidatat consequat consectetur proident veniam. Id proident officia adipisicing ex culpa reprehenderit nulla eu. Cupidatat non laboris enim reprehenderit enim anim Lorem non.
        </p>
      </div>
    </>
  )
}

export default App
