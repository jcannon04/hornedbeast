import Modal from 'react-bootstrap/Modal'

/**
 * SelectedBeast renders a modal for the beast that was clicked on
 * includes image, description, and title of the beast
 */
export default function SelectedBeast({beast, selectBeast}) {

  return (
    <Modal show={true} onHide={() => selectBeast(null)}>
      <img src={beast.image_url} alt={beast.title} />
      <Modal.Header closeButton>
        <Modal.Title>{beast.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{beast.description}</Modal.Body>
    </Modal>
  )
}
