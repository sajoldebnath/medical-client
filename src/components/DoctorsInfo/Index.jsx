import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function DoctorsInfo() {
    const { id } = useParams();
    const [doctor, setDoctor] = useState(null)
    useEffect(() => {
        ; (async () => {
            const res = await axios.get(`/doctors/1/${id}`)
            setDoctor(res.data.data)
        })()

    }, [])
    const navigate = useNavigate()

    return (
        <>
            <div className="bg-gray-100 dark:bg-gray-800 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img
                                    className="w-full h-full object-cover"
                                    src={doctor?.image}
                                    alt="Product Image"
                                />
                            </div>
                            <div className="flex -mx-2 mb-4 ml-36">
                                <div className="w-1/2 px-2">
                                    <button onClick={() => { navigate('/appointment') }} className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                                        Appointment
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                                {doctor?.name}
                            </h2>
                            <div className="mr-4 mb-4">
                                <span className="font-bold text-gray-700 dark:text-gray-300">
                                    Email:
                                </span>
                                <span className="text-gray-600 dark:text-gray-300"> {doctor?.email} </span>
                            </div>
                            <div className="mr-4 mb-4">
                                <span className="font-bold text-gray-700 dark:text-gray-300">
                                    Specialist at:
                                </span>
                                {
                                    doctor?.specialist?.map((data, index) => (
                                        <span key={index} className="text-gray-600 dark:text-gray-300"> {data.category} </span>
                                    ))
                                }
                            </div>

                            <div className="flex mb-4">

                                <div className="mb-1 space-x-3">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">
                                        Availabil on:
                                    </span>
                                    {
                                        doctor?.doctorinfo?.day.map((data, index) => (

                                            <span key={index} className="text-gray-600 dark:text-gray-300">{data}</span>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="flex mb-4">

                                <div className="mb-1 space-x-3">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">
                                        Availabil Time:
                                    </span>
                                    
                                    <span className="text-gray-600 dark:text-gray-300">{ new Date(doctor?.doctorinfo?.starting).getHours()}:{ new Date(doctor?.doctorinfo?.starting).getMinutes()}</span>
                                    <span className="text-gray-600 dark:text-gray-300"> -</span>
                                    
                                    <span className="text-gray-600 dark:text-gray-300">{ new Date(doctor?.doctorinfo?.ending).getHours()}:{ new Date(doctor?.doctorinfo?.ending).getMinutes()}</span>

                                </div>
                            </div>
                            <div className="mr-4 mb-4">
                                <span className="font-bold text-gray-700 dark:text-gray-300">
                                    Graduation from:
                                </span>
                                <span className="text-gray-600 dark:text-gray-300"> {doctor?.doctorinfo?.graduation_from} </span>
                            </div>
                            <div></div>
                            <div className="mr-4 mb-4">
                                <span className="font-bold text-gray-700 dark:text-gray-300">
                                    job on:
                                </span>
                                <span className="text-gray-600 dark:text-gray-300"> {doctor?.doctorinfo?.job} </span>
                            </div>
                            <div className="mr-4 mb-4">
                                <span className="font-bold text-gray-700 dark:text-gray-300">
                                    rating on:
                                </span>
                                <span className="text-gray-600 dark:text-gray-300"> {doctor?.rating} </span>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}