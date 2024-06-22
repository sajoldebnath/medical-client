import { useParams } from "react-router-dom"
import Header from "../../components/Header"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../context"
import { useForm } from "react-hook-form";

export default function index() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const { id } = useParams()
      const [specialist, setSpecialists] = useState([])
      const [spacilist ,setSpacilist] = useState([]);
      const { doctors } = useContext(GlobalContext)
      const handleDoctor = (id) =>{
        
        const doctor = doctors.find((data) => data._id === id)
        setSpacilist(doctor.specialist)
      }

      useEffect(()=>{},[spacilist])
    
        
    return (
        <>

            <div

                className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
                    Book an Appointment
                </div>
                <form className="py-4 px-6" action="" method="POST">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name" type="text" placeholder="Enter your name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                            Phone Number
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phone" type="tel" placeholder="Enter your phone number" />
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
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="date" type="date" placeholder="Select a date" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="time">
                            Time
                        </label>
                        <input
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
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message" rows="4" placeholder="Enter any additional information"></textarea>
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
