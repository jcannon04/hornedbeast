// Components
import HornedBeast from './HornedBeast'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import  Row from 'react-bootstrap/Row'
import  Col from 'react-bootstrap/Col'

// horned beasts json data
import hornedBeasts from '../data.json'

/**
 * Main component contains all horned beast cards.
 * Creates all horned beast components based on object found in src/data.json
 */
export default function Main() {
  return (
    <Container >
      <Row>
        {hornedBeasts.map((beast) => {
          return (
            <Col className='mb-5'>
              <HornedBeast
                imgUrl={beast.image_url}
                title={beast.title}
                description={beast.description}
                key={beast._id}
              />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
