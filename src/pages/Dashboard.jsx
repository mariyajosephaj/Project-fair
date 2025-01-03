import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import View from '../components/View'
import Profile from '../components/Profile'
const Dashboard = () => {

  const [userName,setUserName] = useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("user")){
      setUserName(JSON.parse(sessionStorage.getItem("user")).username.split(" ")[0])
    }

  },[])
  return (
    <>
   <Header insideDashboard={true}/>
   <div className="container-fluid py-5">
    <div className="row">
      <div className="col-lg-8">
        <h1>Welcome <span className='text-warning'>{userName}</span>,</h1>
        <View/>
      </div>
      <div className="col-lg-4">
        <Profile/>
      </div>
    </div>
   </div>
    </>
  )
}

export default Dashboard