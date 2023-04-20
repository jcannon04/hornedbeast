// React
import { useState } from 'react'

// Bootstrap Components
import Card from 'react-bootstrap/Card'

/**
 * Horned Beast component creates all horned beast cards
 * uses beast info as props passed from Main components to generate
 */
export default function HornedBeast({
  beast,
  title,
  imgUrl,
  description,
  selectBeast,
}) {
  // getting number of favorites  from local storage when component is rendered
  let savedFavorite = parseInt(localStorage.getItem(beast.title)) || 0
  const [favorites, setFavorites] = useState(savedFavorite)

  // click on picture to change state in App and render Modal
  let handlePictureClick = (e) => {
    selectBeast(beast)
  }
  // click heart to add 1 to favorite counter
  let handleHeartClick = () => {
    setFavorites(favorites + 1)
    localStorage.setItem(beast.title, favorites)
  }

  return (
    <>
      <Card style={{ width: '18rem' }} className='beast-card'>
        <Card.Img
          variant='top'
          src={imgUrl}
          alt={title}
          onClick={handlePictureClick}
          style={{ width: '18rem', height: 'auto' }}
        />
        <p onClick={handleHeartClick}>&hearts; {favorites}</p>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}
