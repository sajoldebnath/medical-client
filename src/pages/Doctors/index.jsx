import Header from "../../components/Header"
import doc3_jpg from '../../assets/doc3.jpg'
import doc2_png from '../../assets/doc2.png'
import doc4_png from '../../assets/doc4.png'
import doc1_jpg from '../../assets/doc1.jpg'
import doc5_jpg from '../../assets/doc5.jpg'
import doc6_jpg from '../../assets/doc6.jpg'
import { useContext } from "react"
import { GlobalContext } from "../../context"
import { Navigate, useNavigate } from "react-router-dom"
export default function Doctors() {
    const { doctors } = useContext(GlobalContext)
    const navigate = useNavigate();

    return (
        <>

            <div
                className="max-w-7xl mx-auto my-8 px-2">

                <div className="flex justify-center text-2xl md:text-3xl font-bold mb-4">
                    Our Doctors
                </div>
                <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">
                    {
                        doctors.map((doctor, index) => (
                            <div key={index} onClick={()=>{navigate(`/doctors/${doctor._id}`)}}  className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-sm cursor-pointer">
                                <div className="relative">

                                    <img
                                        className="w-full"
                                        src={doctor.image}
                                        alt="Image"
                                    />

                                </div>
                                <div className="p-4">
                                    <div className=" flex justify-between">
                                        <h3 
                                    
                                        className="text-lg font-medium mb-2"
                                        >{doctor.name}</h3>
                                        <div className="flex justify-center">

                                            <svg

                                                className="w-4 h-4 mx-px fill-current text-orange-600"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14"
                                            >
                                                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1.59-1.8l2.87-.06a1 1 0 0 0.92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1.59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                                            </svg>
                                            <svg

                                                className="w-4 h-4 mx-px fill-current text-orange-600"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14"
                                            >
                                                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1.59-1.8l2.87-.06a1 1 0 0 0.92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1.59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                                            </svg>
                                            <svg

                                                className="w-4 h-4 mx-px fill-current text-orange-600"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14"
                                            >
                                                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1.59-1.8l2.87-.06a1 1 0 0 0.92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1.59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                                            </svg>
                                            <svg

                                                className="w-4 h-4 mx-px fill-current text-orange-600"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14"
                                            >
                                                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1.59-1.8l2.87-.06a1 1 0 0 0.92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1.59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                                            </svg>
                                            <svg

                                                className="w-4 h-4 mx-px fill-current text-orange-600"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14"
                                            >
                                                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1.59-1.8l2.87-.06a1 1 0 0 0.92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1.59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                                            </svg>

                                        </div>


                                    </div>

                                    <p className="text-gray-600 text-sm mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante
                                        vel eros fermentum faucibus sit amet euismod lorem.
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span>{doctor.specilist}</span>

                                        {doctor.specialist.map((data, index) => (
                                            

                                            <span key={index}>{data.category}</span>
                                        ))
                                        }

                                        <a
                                         href={`/appointment/${doctor._id}`}
                                        
                                         className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                            Appointment
                                        </a>
                                    </div>
                                </div>
                            </div>



                        ))
                    }
                </ul>


            </div>
        </>
    )
}
