
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import uploadProject from '../assets/images/uploadProject.png'
const Add = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="btn btn-primary">+ New Projecct</button>
      <Modal size='lg' centered show={show} onHide={handleClose} backdrop="static" keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <label>
                <input type="file" style={{display:'none'}} />
                <img src={uploadProject} className='img-fluid' height={'200px'} alt="" />
              </label>
              <div className='text-warning fw-bolder'>* Upload only following file types (jpg,jpeg,png) here !!

              </div>
            </div>
            <div className="col-lg-8">
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Tilte' />
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Langauge' />
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Overview' />
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Github link' />
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Website link' />
              </div>

            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add