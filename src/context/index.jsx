import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const GlobalContext = createContext();

const GlobalState = ({children}) =>{
   const [user, setUser] = useState({
      username:'',
      email:'',
      _id:'',
      role:'',
      isLoggedin:false,
   });
   const [specialists , setSpecialists] = useState([]);
   const [doctors , setDoctors] = useState([]);
   const [services , setServices] = useState([]);
   const getProfile = async()=>{
    try{
        const res = await axios.get('/users/profile');
        if(res.data.success){
            setUser((perv)=>({...res.data.data, isLoggedin:true}));
        }

    }catch(error){
        console.log(error)
    }
   }
   const getSp = async() =>{
    try{
        const res = await axios.get('/specialists');
        if(res.data.success)
            {
                setSpecialists(res.data.data)
            }

    }catch(error)
    {
        console.log(error)
    }
   }
   const getDoctor = async() =>{
    try{
        const res = await axios.get('/doctors');
  
        if(res.data.success){
            setDoctors(res.data.data)
        }

    }catch(error)
    {
        console.log(error)
    }

   }
   const getService = async() =>{
    try{
        const res = await axios.get('/services');
  
        if(res.data.success){
            setServices(res.data.data)
        }

    }catch(error)
    {
        console.log(error)
    }

   }

   useEffect(()=>{
      getProfile();

   },[user.isLoggedin])
 useEffect(()=>{
    getSp()
    getDoctor();
    getService()

 },[])

   return (
    <GlobalContext.Provider value={{
        user,
        setUser,
        specialists,
        setSpecialists,
        doctors,
        setDoctors,
        services,
        setServices
    }}>
        {children}
    </GlobalContext.Provider>
   )

}
export default GlobalState;