import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import baseUrl from './utils/urls'
import axiosInstance from './axios'


const AppContext = React.createContext()
const AppProvider = ({ children }) => {
    const [loggedin, setLoggedin] = useState(false);
    const [searchTerm,setSearchTerm]= useState('a')
    const [jobs,setJobs]= useState([])
    const [userid,setUserid]=useState()

    const [name,setName] =useState("");
    const [skills,setSkills]=useState("");
    const [experience,setExperience]=useState([]);
    const [project,setProject]=useState([]);
    const [description,setDescription]=useState("");
    const [inkedin,setLinkedin]=useState("")
    const [github,setGithub]=useState("")
    const [dob,setDob]=useState("")
    const [email,setEmail]=useState("");

    useEffect(()=>{
      if(localStorage.getItem('access_token'))
      {console.log(localStorage.getItem('access_token'))
        setLoggedin(true)
      }
    })


    const fetchjobs=()=>{
      axios.defaults.withCredentials=true
        try{
            axios.get(`${baseUrl}/jobs/`).then(res=>{
                setJobs(res.data);
                console.log(res.data)
                console.log(jobs)
            })
        }catch(e){



        }

    }

  

    return <AppContext.Provider value={{
        loggedin,
        setLoggedin,
        jobs,
        setJobs,
        userid,
        setUserid,

        dob,setDob,github,setGithub,inkedin,setLinkedin,description,setDescription,project,setProject,experience,setExperience,
        skills,setSkills,name,setName,

        email,setEmail,
        
    }}>{children}</AppContext.Provider>
}


















export const useGlobalContext = () => {
    return useContext(AppContext)
  }
  
  export { AppContext, AppProvider }