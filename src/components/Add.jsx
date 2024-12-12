
import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import uploadProject from '../assets/images/uploadProject.png'
import { addProjectAPI } from '../services/allAPI'
import { addProjectContext } from '../contexts/ContextShare'
const Add = () => {
 const {addProjectResponse,setAddProjectResponse} = useContext(addProjectContext)
  const [preview,setPreview] = useState("")
  const[uploadFileStatus,setUploadFileSatus]= useState(false)
  const [projectDetails,setProjectDetails] = useState({
    title:"",langauges:"",overview:"",github:"",website:"",projectImage:""
  })
  console.log(projectDetails);
  
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setPreview("")
    setUploadFileSatus(false)
    setProjectDetails({title:"",langauges:"",overview:"",github:"",website:"",projectImage:""})
  }
  const handleShow = () => setShow(true);
   
  useEffect(()=>{
    if(projectDetails.projectImage.type=="image/png" ||projectDetails.projectImage.type=="image/jpeg" ||projectDetails.projectImage.type=="image/jpg"){
      setUploadFileSatus(true)
      // convert img string to url
      setPreview(URL.createObjectURL(projectDetails.projectImage))
    } 
    else{
      setUploadFileSatus(false)
      setProjectDetails({...projectDetails,projectImage:""})
    }

  },[projectDetails.projectImage])

  const handleAddProject = async ()=>{
    const {title,langauges,overview,github,website,projectImage} = projectDetails
    if(title && langauges && overview && github && website && projectImage){
      // api call
      const reqBody = new FormData()
      reqBody.append("title",title)
      reqBody.append("langauges",langauges)
      reqBody.append("overview",overview)
      reqBody.append("github",github)
      reqBody.append("website",website)
      reqBody.append("projectImage",projectImage)

      const token = sessionStorage.getItem("token")
       if(token){
        const reqHeader ={
          "Content-Type" :"multipart/form-data",
          "Authorization" :`Bearer ${token}`
        }
        // make api call
        try{
          const result = await addProjectAPI(reqBody,reqHeader)
          console.log(result);
          if(result.status==200){
            alert(`${result?.data?.title} uploaded successfully`)
            handleClose()
            // share result to view using context
            setAddProjectResponse(result)
          }
          else{
            if(result.response.status==406){
              alert(result.response.data)
            }
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
                <input type="file"  onChange={e=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})} style={{display:'none'}} />
                <img src={preview?preview:uploadProject} className='img-fluid' height={'200px'} alt="" />
              </label>
             {!uploadFileStatus &&
              <div className='text-warning fw-bolder'>* Upload only following file types (jpg,jpeg,png) here !!

              </div>}
            </div>
            <div className="col-lg-8">
              <div className="mb-2">
                <input type="text" value={projectDetails.title} onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})} className='form-control' placeholder='Project Tilte' />
              </div>
              <div className="mb-2">
                <input type="text" value={projectDetails.langauges} onChange={e=>setProjectDetails({...projectDetails,langauges:e.target.value})} className='form-control' placeholder='Project Langauge' />
              </div>
              <div className="mb-2">
                <input type="text" value={projectDetails.overview} onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})} className='form-control' placeholder='Project Overview' />
              </div>
              <div className="mb-2">
                <input type="text" value={projectDetails.github} onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})} className='form-control' placeholder='Project Github link' />
              </div>
              <div className="mb-2">
                <input type="text" value={projectDetails.website} onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})} className='form-control' placeholder='Project Website link' />
              </div>

            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddProject} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add