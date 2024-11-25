import React from 'react'
import { Link } from 'react-router-dom'
import landingImage from'../assets/images/landingImage.jpg'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'

const Home = () => {
  return (
    <>
    {/* landing */}
    <div style={{minHeight:'100vh'}} className="d-flex align-items-center justify-content-center shadow rounded w-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 style={{fontSize:'80px'}}><i className='fa-brands fa-docker'></i>Project Fair</h1>
            <p>One Stop Destination for all Software Development Projects. Where User can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!!</p>
            <Link to={'/login'} className='btn btn-warning'>STARTS TO EXPLORE</Link>
          </div>
          <div className="col-lg-6">
            <img className='img-fluid' src={landingImage} alt="" />
          </div>
        </div>
      </div>

    </div>
    {/* projects */}
    <div className="my-5 text-center">
      <h1 className="mb-5">Explore Our Projects</h1>
      <marquee>
        <div className="d-flex">
          <div className="me-5">
            <ProjectCard/>
          </div>
        </div>
      </marquee>
      <button className="btn btn-link mt-5">Click Here To View More Projects...</button>
    </div>
    {/* testimonials */}
    <div className="d-flex justify-content-center align-items-center my-3 flex-column">
      <h1>Our Testimonials</h1>
      <div className="d-flex justify-content-evenly align-items-center w-100 mt-3">
      <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        
        <Card.Text className="d-flex justify-content-center align-items-center flex-column">
          <img width={'60px'} height={'60px'}src="https://cdni.iconscout.com/illustration/premium/thumb/woman-profile-illustration-download-in-svg-png-gif-file-formats--young-female-girl-avatar-portraits-pack-people-illustrations-6590622.png?f=webp" className='img-fluid rounded-circle' alt="" />
          <div className="d-flex justify-content-center my-2">
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>

          </div>
          <p style={{textAlign:'justify'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          </p>
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        
        <Card.Text className="d-flex justify-content-center align-items-center flex-column">
          <img width={'60px'} height={'60px'}src="https://as2.ftcdn.net/v2/jpg/02/23/50/73/1000_F_223507324_jKl7xbsaEdUjGr42WzQeSazKRighVDU4.jpg" className='img-fluid rounded-circle' alt="" />
          <div className="d-flex justify-content-center my-2">
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            

          </div>
          <p style={{textAlign:'justify'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          </p>
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        
        <Card.Text className="d-flex justify-content-center align-items-center flex-column">
          <img width={'60px'} height={'60px'} src="https://cdni.iconscout.com/illustration/premium/thumb/female-avatar-illustration-download-in-svg-png-gif-file-formats--young-woman-girl-portraits-pack-people-illustrations-6590630.png?f=webp" className='img-fluid rounded-circle' alt="" />
          <div className="d-flex justify-content-center my-2">
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>

          </div>
          <p style={{textAlign:'justify'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          </p>
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>

    </div>
    </>
  )
}

export default Home