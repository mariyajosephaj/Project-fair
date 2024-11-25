import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'

const ProjectCard = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Card onClick={handleShow} className='btn shadow'>
      <Card.Img height={'200px'} variant="top" src="https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/28oct/Project-Manager.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        
      </Card.Body>
    </Card>

    <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className='row'>
          <div className="col-lg-6">
            <img src="https://as2.ftcdn.net/v2/jpg/02/23/50/73/1000_F_223507324_jKl7xbsaEdUjGr42WzQeSazKRighVDU4.jpg" className='img-fluid' alt="" />
          </div>
          <div className="col-lg-6">
            <h3>Title</h3>
            <h6>Langauge Used : <span className='text-danger'>langauge</span></h6>
            <p style={{textAlign:'justify'}}><span className='fw-bolder'>Project OverView</span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae nemo delectus obcaecati dolore aliquam velit rerum quia accusamus quidem recusandae ex eligendi quis similique labore ratione, eum incidunt illum? Qui?
            </p>
      
          </div>
        
         </div>
         <div className="mt-2 float-start">
          <a href='https://github.com/mariyajosephaj/E-cart' target='_blank' className='btn btn-secondary me-2'><i className='fa-brands fa-github'></i></a>
          <a href='https://github.com/mariyajosephaj/E-cart' target='_blank' className='btn btn-secondary me-2'><i className='fa-solid fa-link'></i></a>
         </div>
          </Modal.Body>
        
      </Modal>
    </>
  )
}

export default ProjectCard