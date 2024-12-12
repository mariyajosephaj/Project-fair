import React, { useState,useEffect, useContext } from 'react'
import { Button, Modal } from 'react-bootstrap'
import SERVER_BASE_URL from '../services/serverUrl'
import { editProjectContext } from '../contexts/ContextShare'
import { updateProjectAPI } from '../services/allAPI'
const Edit = ({project}) => {

  const {editProjectResponse,setEditProjectResponse} = useContext(editProjectContext)
  // project key in props will hold project data to be displayed in edit component
  const [preview,setPreview] = useState("")
  const[uploadFileStatus,setUploadFileSatus]= useState(false)
  const [projectDetails,setProjectDetails] = useState({
    id:project?._id, title:project?.title, langauges:project?.langauges, overview:project?.overview, github:project?.github, website:project?.website, projectImage:""
  })
  console.log(projectDetails);
  const [show, setShow] = useState(false);

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

  const handleClose = () => {
    setShow(false)
    setProjectDetails({
       id:project?._id, title:project?.title, langauges:project?.langauges, overview:project?.overview, github:project?.github, website:project?.website, projectImage:""
    })
  };
  const handleShow = () => {
    setShow(true);
    setProjectDetails({
      id:project?._id, title:project?.title, langauges:project?.langauges, overview:project?.overview, github:project?.github, website:project?.website, projectImage:""
   })

  }

  const handleUpdateProject = async()=>{
    const {id,title,langauges,overview,github,website,projectImage} = projectDetails
    if(title && langauges && overview && github && website ){
      const reqBody = new FormData()
      reqBody.append("title",title)
      reqBody.append("langauges",langauges)
      reqBody.append("overview",overview)
      reqBody.append("github",github)
      reqBody.append("website",website)
      // Project image will have value when the user reupload the image
      preview?reqBody.append("projectImage",projectImage) : reqBody.append("projectImage",project?.projectImage)
      const token = sessionStorage.getItem("token")
       if(token){
        const reqHeader ={
          "Content-Type" :"multipart/form-data",
          "Authorization" :`Bearer ${token}`
        }
        // api call
        try{
          const result =await updateProjectAPI(id,reqBody,reqHeader)
          console.log(result);
          
          if(result.status==200){
            alert("Project updated successfully")
            handleClose()
            // share result with view using context
            setEditProjectResponse(result)
          }

        }catch(err){
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
      <button onClick={handleShow} className="btn"><i className="fa-solid fa-edit"></i></button>
      <Modal size='lg' centered show={show} onHide={handleClose} backdrop="static" keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <label>
                <input type="file"  onChange={e=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})} style={{display:'none'}} />
                <img src={preview?preview:`${SERVER_BASE_URL}/uploads/${project?.projectImage}`} className='img-fluid' height={'200px'} alt="" />
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
          <Button onClick={handleUpdateProject} variant="primary">Edit</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit