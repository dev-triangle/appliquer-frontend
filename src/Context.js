import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import baseUrl from './utils/urls'

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [searchTerm,setSearchTerm]= useState('a')
    const [jobs,setJobs]= useState([])

    const fetchjobs=()=>{
        try{
            axios.get(`${baseUrl}/jobs/`).then(res=>{
                setJobs(res.data);
                console.log(res.data)
                console.log(jobs)
            })
        }catch(e){



        }

    }
   
    useEffect(()=>{
        
        axios.get(`${baseUrl}/jobs/`).then((response)=>{
          console.log(response.data)
          
          setJobs(response.data)
        
        },(error)=>{
          console.log(error)
        })
      
      },[])

    return <AppContext.Provider value={{
        loading,
        jobs,
        setJobs,
        
    }}>{children}</AppContext.Provider>
}


















export const useGlobalContext = () => {
    return useContext(AppContext)
  }
  
  export { AppContext, AppProvider }