// Styles
import './App.css'

// React
import { useState } from 'react'

//Components
import Header from './Components/Header'
import Footer from './Components/Footer'
import Main from './Components/Main'

function App() {
  
  const [author, setAuthor] = useState('Josh')
  const [title, setTitle] = useState('Horned Beasts')

  return (
    <div className='App'>
      <Header title={title} />
      <Main />
      <Footer author={author} />
    </div>
  )
}

export default App
