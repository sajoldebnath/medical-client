import { useNavigate, useParams } from "react-router-dom"
import Header from "../../components/Header"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../context"
import { useForm } from "react-hook-form";
import axios from "axios";

export default function index() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const navigator = useNavigate()
      const { id } = useParams()
      const [specialist, setSpecialists] = useState([])
      const [spacilist ,setSpacilist] = useState([]);
      const { doctors } = useContext(GlobalContext)
      const handleDoctor = (id) =>{
        
        const doctor = doctors.find((data) => data._id === id)
        setSpacilist(doctor.specialist)
      }
      const onSubmit = async (data) => {
        
        
        const res = await axios.post('/appointments',data)
        console.log(res.data);
        if(res.data.success){
            
          
          navigator(-1)
          alert(res.data.message)
        }
    }
      useEffect(()=>{},[spacilist])
    
        
    return (
        <>

            <div

                className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
                    Book an Appointment
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="py-4 px-6" action="" method="POST">
                <div className="mb-4">
              {
                errors.name ?
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold leading-6 text-red-900"
                  >
                    {errors.name.message}
                  </label> :
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"

                  >
                    Name
                  </label>
              }
              <div className="mt-2.5">
                <input
                  type="text"
                  {
                  ...register('name', {
                    required: "Name is required"
                  })
                  }
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  placeholder="Your First Name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mb-4">
              {
                errors.email ?
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-red-900"
                  >
                    {errors.email.message}
                  </label> :
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"

                  >
                    Email
                  </label>
              }
              <div className="mt-2.5">
                <input
                  type="email"
                  {
                  ...register('email', {
                    required: "Email is required"
                  })
                  }
                  name="email"
                  id="email"
                  autoComplete="given-email"
                  placeholder="Your email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
                    <div className="mb-4">
              {
                errors.phone ?
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold leading-6 text-red-900"
                  >
                    {errors.phone.message}
                  </label> :
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-bold mb-2"

                  >
                    Phone Number
                  </label>
              }
              <div className="mt-2.5">
                <input
                  type="text"
                  {
                  ...register('phone', {
                    required: "Phone number is required"
                  })
                  }
                  name="phone"
                  id="phone"
                  autoComplete="given-phone"
                  placeholder="Your phone"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="doctor_name">
                            Doctor Name
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="doctor"
                            {
                                ...register('doctor')
                            }
                            onChange={(e) =>handleDoctor(e.target.value)}
                            name="doctor">
                            <option value="">Select a doctor</option>
                            {
                                doctors.map((data , index)=>(
                                    <option key={index} value={data._id}>{data.name}</option>
                                   
                                ))
                            }
                       
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="specialist">
                            Specialist
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="specialist"
                            {
                                ...register('specialist')
                            }
                            
                            name="specialist">
                            <option value="">Select a specialist</option>
                            {     
                                spacilist.map((data , index)=>(
                                
                                    <option key={index} value={data._id}>{data.category}</option>
                                ))
                            }
                       
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
                            Date
                        </label>
                        <input 
                        {
                            ...register('date' )
                            }
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="date" type="date" placeholder="Select a date" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="time">
                            Time
                        </label>
                        <input
                        {
                            ...register('time' )
                            }
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="time" type="time" placeholder="Select a time" />
                        
                    </div>
                    {/* <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="service">
                            Service
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="service" name="service">
                            <option value="">Select a service</option>
                            <option value="haircut">Haircut</option>
                            <option value="coloring">Coloring</option>
                            <option value="styling">Styling</option>
                            <option value="facial">Facial</option>
                        </select>
                    </div> */}
                    <div className="mb-4">
              
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"

                  >
                    Message
                  </label>
              
              <div className="mt-2.5">
                <input
                  type="text"
                  {
                  ...register('message')
                  }
                  name="message"
                  id="message"
                  autoComplete="message"
                  placeholder="Your message"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
                    <div className="flex items-center justify-center mb-4">
                        <button
                            className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                            type="submit">
                            Book Appointment
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}
