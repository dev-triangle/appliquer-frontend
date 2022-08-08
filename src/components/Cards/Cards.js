import React, { useEffect, useState } from 'react'
import './Cards.css'
import {useGlobalContext} from '../../Context'
import baseUrl from '../../utils/urls'
import axios from 'axios'



function Cards() {
const {jobs,setJobs}= useGlobalContext();

const handleSubmit=(e)=>{
  console.log(e);

  
}



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
        
        <button className="button2" target="_blank" rel="noopener">Apply</button>
       
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