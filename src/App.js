// React imports
import { useState } from 'react'

//Components
import Header from './Components/Header'
import Footer from './Components/Footer'
import Main from './Components/Main'
import SelectedBeast from './Components/SelectedBeast'
import { Container } from 'react-bootstrap'

// HornedBeasts Data
import HornedBeastArray from './data.json'

/** App component is the main wrapper for all other components
 * see src/Components for other components used in App
 */
function App() {
  const [clickedBeast, setClickedBeast] = useState(null)
  const author = 'Josh Cannon'
  const title = 'Horned Beasts'

  // if a beast gets clicked on render its modal otherwise render the Application
  if (clickedBeast) {
    return <SelectedBeast beast={clickedBeast} selectBeast={setClickedBeast} />
  } else {
    return (
      <Container>
        <Header title={title} />
        <Main beasts={HornedBeastArray} selectBeast={setClickedBeast} />
        <Footer author={author} />
      </Container>
    )
  }
}

export default App
