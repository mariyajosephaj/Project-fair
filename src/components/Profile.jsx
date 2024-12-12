import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import profilPng from '../assets/images/profile.png'
import SERVER_BASE_URL from '../services/serverUrl'
import { editUserAPI } from '../services/allAPI'

const Profile = () => {
   const [open, setOpen] = useState(false);
   const [preview,setPreview]= useState("")
   const[existingProfilePic,setExistingProfilePic]= useState("")
   const [userDetails,setUserDetails] = useState({
      username:"",email:"",password:"",github:"",linkedin:"",profilePic:""
   })
   console.log(userDetails);
   // get existing user details from the session

   useEffect(()=>{
      if(sessionStorage.getItem("user")){
         const user= JSON.parse(sessionStorage.getItem("user"))
         setUserDetails({
            ...userDetails,username:user.username,email:user.email,password:user.password,github:user.github,linkedin:user.linkedin,
         })
         setExistingProfilePic(user.profilePic)
    }
  },[open])

  useEffect(()=>{
   if(userDetails.profilePic){
      setPreview(URL.createObjectURL(userDetails.profilePic))
   }
   else{
      setPreview("")
   }

  },[userDetails.profilePic])

  const handleUserUpdate= async ()=>{
   // get all user details
   const {username,email,password,github,linkedin,profilePic} = userDetails
   if(github && linkedin){
      // req body
      const reqBody = new FormData()
      reqBody.append("username",username)
      reqBody.append("email",email)
      reqBody.append("password",password)
      reqBody.append("github",github)
      reqBody.append("linkedin",linkedin)
      preview?reqBody.append("profilePic",profilePic):reqBody.append("profilePic",existingProfilePic)
   //   req header
   const token = sessionStorage.getItem("token")
       if(token){
        const reqHeader ={
          "Content-Type" :"multipart/form-data",
          "Authorization" :`Bearer ${token}`
        }
      //   api call
      try{
         const result = await editUserAPI(reqBody,reqHeader)
         if(result.status == 200){
            alert("User Profile Updated Successfully")
            // store updated user in session
            sessionStorage.setItem("user",JSON.stringify(result.data))
            // collapse profile
            setOpen(!open)
         }

      }
      catch(err){
         console.log(err);
      }
      }


   }
   else{
      alert("Please fill the form completely")
   }
  }
    
  return (
    <>
    <div className="d-flex justify-content-evenly">
        <h3 className="text-warning">Profile</h3>
        <button onClick={() => setOpen(!open)} className="btn text-warning"><i className='fa-solid fa-chevron-down'></i></button>
    </div>
    <Collapse in={open}>
        <div className='row container-fluid align-items-center justify-content-center p-2 shadow rounded' id="example-collapse-text">
            <label className='text-center' >
            <input onChange={e=>setUserDetails({...userDetails,profilePic:e.target.files[0]})} type="file" style={{display:'none'}} />
            {
               existingProfilePic==""?
               <img src={preview?preview:profilPng}  width={'200px'} height={'200px'} className='rounded-circle img-fluid' alt="" />
               :
               <img src={preview?preview:`${SERVER_BASE_URL}/uploads/${existingProfilePic}`}  width={'200px'} height={'200px'} className='rounded-circle img-fluid' alt="" />

            }
            </label>
         <div className="mb-2 w-100">
            <input value={userDetails.github} onChange={e=>setUserDetails({...userDetails,github:e.target.value})} type="text" placeholder='User github Link' className="form-control" />
         </div>
         <div className="mb-2 w-100">
            <input value={userDetails.linkedin} onChange={e=>setUserDetails({...userDetails,linkedin:e.target.value})} type="text" placeholder='User Linked In Link' className="form-control" />
         </div>
         <div className="d-grid w-100">
            <button onClick={handleUserUpdate} className="btn btn-warning">Update</button>
         </div>
        </div>
      </Collapse>
    </>
  )
}

export default Profile