import { useCallback, useContext } from "react"
import { Link } from "react-router-dom"
import { GlobalContext } from "../../../context"
import axios from "axios"



const DoctorList = () => {
  const {
    doctors,
    setDoctors
  } = useContext(GlobalContext)
 const handleDelete = async(id) =>{
     try{
      const res = await axios.delete(`/doctors/${id}`);
      if(res.data.success){
        setDoctors(doctors.filter((doctor) => doctor._id !== id));
        // alert("Doctor deleted successfully");
      }
     }catch(error){
      console.log(error)
     }
 }



  return (
    <>
      <div className="doctor_list  w-full">
        <Link to={'/dashboard/doctors'} className=" bg-sky-600 hover:bg-sky-800 rounded-lg p-4  float-end" > add doctor</Link>
        <div className="title w-full flex justify-center text-2xl font-bold">
          {/* <h1>Doctors </h1> */}
        </div>

        <div className="text-gray-900 bg-gray-200">
          <div className="p-4 flex">
            <h1 className="text-3xl">Doctors Lists</h1>
          </div>
          <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
              <tbody>
                <tr className="border-b">
                  <th className="text-left p-3 px-5">name</th>
                  <th className="text-left p-3 px-5">email</th>
                  <th className="text-left p-3 px-5">specialist</th>
                  <th className="text-left p-3 px-5">rating</th>
                  <th className="text-left p-3 px-5">image</th>
                  <th className=" float-end p-3 px-10">Action</th>
                </tr>
                {
                  doctors.map((data, index) => (
                    <tr key={index} className="border-b hover:bg-orange-100 bg-gray-100">

                      <td className="p-3 px-5">
                        {data.name}
                      </td>
                      <td className="p-3 px-5">
                        {data.email}
                      </td>
                      <td className="p-3 px-5">
                        {data.specialist[0].category}
                      </td>
                      <td className="p-3 px-5">
                        {data.rating}
                      </td>
                      <td className="p-3 px-5 w-10 h-10 ">
                        <img
                          className="rounded-lg border-gray-500 border-2"
                          src={data.image} alt="no image" />
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
                          onClick={()=> handleDelete(data._id)}
                          className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>

                  ))
                }


              </tbody>
            </table>
          </div>
        </div>


      </div>
    </>
  )
}

export default DoctorList