import React from 'react'
import login from '../assets/images/login.png'
import { Form,FloatingLabel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Auth = ({insideRegister}) => {
  return (
    <div style={{minHeight:'100vh', width:'100%'}} className='d-flex justify-content-center align-items-center'>
   <div className="container w-75">
    <div className="card shadow p-2">
      <div className="row align-items-center">
        <div className="col-lg-6">
           <img src={login} className='img-fluid' alt="" />
        </div>
        <div className="col-lg-6">
        <h1><i className='fa-brands fa-docker'></i>Project Fair</h1>
        <h5>Sign {insideRegister?'Up ':'In ' }To Your Account</h5>
        <Form>
             {
              insideRegister &&
              <FloatingLabel
              controlId="floatingUserName"
              label="User Name"
              className="mb-3"
            >
            <Form.Control type="text" placeholder="User Name" />
            </FloatingLabel>
             }
               <FloatingLabel
                 controlId="floatingInput"
                 label="Email address"
                 className="mb-3"
               >
               <Form.Control type="email" placeholder="name@example.com" />
               </FloatingLabel>
               <FloatingLabel controlId="floatingPassword" label="Password">
               <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                {
                  insideRegister ?
                  <div className="mt-3">
                    <button className='btn btn-primary mb-2'>Register</button>
                    <p>Existing User ? Please Click Here To <Link to={'/login'}>Login</Link></p>
                  </div>
                  :
                  <div className="mt-3">
                  <button className='btn btn-primary mb-2'>Login</button>
                  <p>New User ? Please Click Here To <Link to={'/register'}>Register</Link></p>
                </div>
                }
        </Form>
        </div>
      </div>
    </div>
   </div>
    </div>
  )
}

export default Auth