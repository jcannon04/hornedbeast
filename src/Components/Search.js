// Bootstrap components
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

/**
 * Search component renders a search bar 
 * updates the state of Main component
 * when the value typed in the search is changed
 */
export default function Search({ updateSearch }) {
  function change(e) {
    updateSearch(e.target.value)
  }

  return (
    <Container className='mb-5'>
      <Form.Label htmlFor='search'>Search</Form.Label>
      <Form.Control
        type='text'
        id='search'
        aria-describedby='searchHelp'
        onChange={(e) => change(e)}
      />
      <Form.Text id='searchHelp' muted>
        Start typing to filter beasts by title and keyword
      </Form.Text>
    </Container>
  )
}
