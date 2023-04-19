// Bootstrap Components 
import Container  from "react-bootstrap/Container"

/**
 * Header component contains title of document
 * Used as global site header
 */
export default function Header({ title }) {
  return (
    <Container>
      <h1 className='text-center mb-4'>{title}</h1>
    </Container>
    )
}
