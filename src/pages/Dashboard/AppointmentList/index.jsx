import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { GlobalContext } from "../../../context"
import axios from "axios";

// now

const AppointmentList = () =>{
  const [appointmentList, setAppointmentlist] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigator = useNavigate();
  const { state, dispatch } = useContext(GlobalContext)

  const onSubmit = async (data) => {
    const form = new FormData()
    form.append('name', data.name)
    form.append('email', data.email)
    form.append('phone', data.phone);
    form.append('doctor', data.doctor);
    form.append('specialist', data.specialist);
    form.append('date', data.date);
    form.append('time', data.time);
    form.append('message', data.message)

    
    const res = await axios.post('/appointment/:id?',form)
    if(res.data.success){
      setAppointment(res.data.data);
      alert(res.data.message)
    }
    
  }
  const handleDelete = async(id) =>{
    try{
     const res = await axios.delete(`/appointments/${id}`);
     if(res.data.success){
      setAppointmentlist(appointment.filter((appointment) => appointment._id !== id));
       // alert("Doctor deleted successfully");
     }
    }catch(error){
     console.log(error)
    }
    useEffect(()=>{

    },[appointmentList])
    // const handleDelete = async (id) => {
    //   const res = await axios.delete(`/appointment/${id}`);
    //     if(res.data.success){
    //       dispatch({type: 'DELETE_APPOINTMENT', payload: id})
    //       alert(res.data.message)
    //   }
    // //   try {
    // //     const res = await axios.delete(`/appointment/${id}`);
    // //     if (res.data.success) {
    // //       setAppointment(appointment.filter((appointment) => appointment._id !== id));
  
    // //     }
    // //   } catch (error) {
    // //     console.log(error)
    // //   }
    // }
    
  }

  useEffect(() => {
    const getAppointment = async () => {
        await axios.get('/appointments')
            .then((res) => {
                setAppointmentlist(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    getAppointment()
}, [])
console.log(appointmentList);
    return(
        <>
         <div className="doctor_list  w-full">
            <div className="title w-full flex justify-center text-2xl font-bold">
            
            </div>
            <div className="text-gray-900 bg-gray-200">
    <div className="p-4 flex">
      <h1 className="text-3xl">Appointment Lists</h1>
    </div>
    
    <div className="px-3 py-4 flex justify-center">
      <table className="w-full text-md bg-white shadow-md rounded mb-4">
        <tbody>
          <tr className="border-b">
            
            <th className="text-left p-3 px-5">name</th>
            <th className="text-left p-3 px-5">email</th>
            <th className="text-left p-3 px-5">phone</th>
            <th className="text-left p-3 px-5">doctor</th>
            {/* <th className="text-left p-3 px-5">specialist</th> */}
            <th className="text-left p-3 px-5">time</th>
            <th className="text-left p-3 px-5">date</th>
            <th className="text-left p-3 px-5">message</th>
            {/* <th className="text-left p-3 px-10">action</th> */}
            <th />
          </tr>
          {
              appointmentList.map((data, index) => (
              <tr key={index} className="border-b hover:bg-orange-100 bg-gray-100">
            <td className="p-3 px-5">
              <p>
              {data.name}
              </p>
            </td>
            <td className="p-3 px-5">
            {data.email}
            </td>
            <td className="p-3 px-5">
            {data.phone}
            </td>
            <td className="p-3 px-5">
            abcd
            </td>
            {/* <td className="p-3 px-5">
            {data.specialist}
            </td> */}
            <td className="p-3 px-5">
            {data.time}
            </td>
            <td className="p-3 px-5">
            {data.date}
            </td>
            <td className="p-3 px-5">
            {data.message}
            </td>
            {/* <td className="p-3 px-5">
            action
            </td> */}
            <td className="p-3 px-5 flex justify-end">
              {/* <button
                type="button"
                className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Edit
              </button> */}
              <button
                type="button"
                onClick={() => handleDelete(data._id)}
                className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
            </td>
          </tr>
                  ))}
          
          
        </tbody>
      </table>
    </div>
  </div>
            
         </div>
        </>
    )
}

export default AppointmentList