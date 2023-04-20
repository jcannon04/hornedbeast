import { useState } from "react"

// Components
import HornedBeast from "./HornedBeast"
import Search from "./Search"

// Bootstrap Components
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

/**
 * Main component contains all horned beast cards.
 * Creates all horned beast components based on object found in src/data.json
 */
export default function Main({ beasts, selectBeast }) {
  const [searchString, setSearchString] = useState("")
  const [filterCriteria, setFilterCriteria] = useState(null)

  // remove white space lower case all chars in search string
  let searchCriteria = searchString.toLowerCase().trim()

  // filter beast for correct number of horns, and search is include in title or keyword
  let filteredBeasts = beasts.filter((beast) => {

    let hasCorrectHorns = true
    if (filterCriteria) {
      hasCorrectHorns = parseInt(filterCriteria) === beast.horns
    }

    return (
      hasCorrectHorns &&
      (beast.title.toLowerCase().includes(searchCriteria) ||
        beast.keyword.toLowerCase().includes(searchCriteria))
    )
  })

  return (
    <Container>
      <Search updateSearch={setSearchString} updateFilter={setFilterCriteria} />
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
