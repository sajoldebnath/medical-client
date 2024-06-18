import { useForm } from "react-hook-form";
import { useContext } from "react"
import { Link } from "react-router-dom"
import { GlobalContext } from "../../../context"

const AppointmentList = () =>{
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
            <th className="text-left p-3 px-5">age</th>
            <th className="text-left p-3 px-5">address</th>
            <th className="text-left p-3 px-5">email</th>
            <th className="text-left p-3 px-5">phone</th>
            <th className="text-left p-3 px-5">doctor</th>
            
            <th className="text-left p-3 px-5">app_Time</th>
            <th className="text-left p-3 px-5">status</th>
            <th className="text-left float-end mr-12 mt-3">action</th>
            <th />
          </tr>
          <tr className="border-b hover:bg-orange-100 bg-gray-100">
            <td className="p-3 px-5">
              <p>
                name
              </p>
            </td>
            <td className="p-3 px-5">
            name
            </td>
            <td className="p-3 px-5">
            name
            </td>
            <td className="p-3 px-5">
            name
            </td>
            <td className="p-3 px-5">
            name
            </td>
            <td className="p-3 px-5">
            name
            </td><td className="p-3 px-5">
            name
            </td>
            <td className="p-3 px-5">
            name
            </td>
            <td className="p-3 px-5 flex justify-end">
              <button
                type="button"
                className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Edit
              </button>
              <button
                type="button"
                className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>
            
         </div>
        </>
    )
}

export default AppointmentList