//Components
import Header from './Components/Header'
import Footer from './Components/Footer'
import Main from './Components/Main'
import { Container } from 'react-bootstrap'


/** App component is the main wrapper for all other components
 * see src/Components for other components used in App
 */
function App() {
  
  const author = 'Josh Cannon';
  const title = 'Horned Beasts';

  return (
    <Container>
      <Header title={title} />
      <Main />
      <Footer author={author} />
    </Container>
  )
}

export default App
