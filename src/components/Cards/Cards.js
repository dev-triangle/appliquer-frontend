import React, { useEffect, useState } from 'react'
import './Cards.css'
import {useGlobalContext} from '../../Context'
import baseUrl from '../../utils/urls'
import axios from 'axios'
import axiosInstance from '../../axios'


function Cards() {
const [jobs,setJobs]= useState([]);
const [datee,setdatee]=useState("");
const {loggedin,setLoggedin} =useGlobalContext()


const handleSubmit=(e)=>{
  console.log(e);

  
}

useEffect(()=>{
  //if(loggedin==true){
  axiosInstance.get('http://127.0.0.1:8000/jobs/').then((res)=>{
    setJobs(res.data);
    console.log(localStorage.getItem('access_token'))
   } ).catch(error=>console.log(error))
},[])


  return (
    
   

    <div class="card_container">
    {jobs.map((job)=>{
      

      console.log(job);
      return(
  <div class="card">
    <div class="card__header">
      <img src={job.image} alt="card__image" class="card__image" width="600"/>
    </div>
    <div class="card__body">
      <strong>{job.job_name}</strong>

      <h4>{job.company_name}</h4>
      <p>{job.desc}</p>
    
    </div>
    <div className="card__footer">
   
    <div className="apply_container">
      <div className="buttons">
        
        <button className="button2" target="_blank" rel="noopener" onClick={()=>{
          var today=new Date();
          
         
          axiosInstance.post('/application/',{
            "date_of_application": today,
            "username": localStorage.getItem('username'),
            "user_foreign": parseInt(localStorage.getItem('user-id')),
            "job_foreign": job.id,
          }).then((res)=>{
            if(res){
              window.alert("Applied")
            }
    console.log(res.data)
          }).catch((error)=>{

    console.log(error);
    if(loggedin===false){alert("please log in")}
    else { }

  })

        }} >Apply</button>
       
      </div>
    </div>
    </div>
  </div>
  )
})}
</div>
  )
}

export default Cards