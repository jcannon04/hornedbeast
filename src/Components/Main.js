import { useState } from 'react'

// Components
import HornedBeast from './HornedBeast'
import Search from './Search'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

/**
 * Main component contains all horned beast cards.
 * Creates all horned beast components based on object found in src/data.json
 */
export default function Main({ beasts, selectBeast }) {
  const [searchString, setSearchString] = useState('')

  // remove white space lower case all chars in search string
  let searchCriteria = searchString.toLowerCase().trim()

  // remove all beasts where either the keywords or title don't include search criteria
  let filteredBeasts = beasts.filter(
    (beast) =>
      beast.title.toLowerCase().includes(searchCriteria) ||
      beast.keyword.toLowerCase().includes(searchCriteria)
  )

  return (
    <Container>
      <Search updateSearch={setSearchString} />
      <Row>
        {filteredBeasts.map((beast) => {
          return (
            <Col className='mb-5' key={beast._id}>
              <HornedBeast
                beast={beast}
                imgUrl={beast.image_url}
                title={beast.title}
                description={beast.description}
                selectBeast={selectBeast}
              />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
