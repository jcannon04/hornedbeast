// React
import { useState } from 'react'

// Bootstrap Components
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card'

/**
 * Horned Beast component creates all horned beast cards and modals
 * uses beast info as props passed from Main components to generate both
 */
export default function HornedBeast({ title, imgUrl, description }) {
  const [favorites, setFavorites] = useState(0)

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  let handlePictureClick = (e) => {
    setFavorites(favorites + 1)
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
        <p>&hearts; {favorites}</p>
        <Card.Body onClick={handleShow}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
      </Modal>
    </>
  )
}
