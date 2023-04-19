// Bootstrap Components 
import Container from 'react-bootstrap/Container'

/**
 * Footer component contains author of document.
 * Used for global site footer
 */
export default function Footer({ author }) {
  return (
    <Container>
      <p className='text-center'>Author: {author}</p>
    </Container>
  )
}
