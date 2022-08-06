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
    <div>
    {jobs.map((job)=>{
      

    console.log(job);
    return(

    <div class="container">
  <div class="card">
    <div class="card__header">
      <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600"/>
    </div>
    <div class="card__body">
      <span class="tag tag-blue">{job.job_name}</span>
      <h4>{jobs.company_name}</h4>
      <p>ivade job_desc</p>
      <ul>
        <li>ivade skills oronum ittamathi bullet points aayitu</li>
        <li>ithellam jobs array il indatto</li>
      </ul>
    </div>
    <div class="card__footer">
     <button>Apply</button>
    </div>
  </div>
  </div>)
})}
</div>
  )
}

export default Cards