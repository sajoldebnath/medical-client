import { useContext } from "react"
import { Link } from "react-router-dom"
import { GlobalContext } from "../../../context"
import axios from "axios"

const Specialist = () => {
  const { specialists,setSpecialists } = useContext(GlobalContext)
  const handleDelete = async(id) =>{
    try{
     const res = await axios.delete(`/specialists/${id}`);
     if(res.data.success){
      console.log('aaa');
      setSpecialists(specialists.filter(specialist => specialist._id !== id));
      // setSpecialists(specialists.filter((specialist) => specialists._id !== id));
       // alert("Doctor deleted successfully");
     }
    }catch(error){
     console.log(error)
    }
}

  return (
    <>
      <div className="special_list  w-full">

        <Link to={'/dashboard/addspecialist'} className=" bg-sky-600 hover:bg-sky-800 rounded-lg p-4  float-end" > Add Specialist</Link>
        <div className="title w-full flex justify-center text-2xl font-bold">
          {/* <h1>All Specialist List</h1> */}
        </div>


        <div className="text-gray-900 bg-gray-200">
          <div className="p-4 flex">
            <h1 className="text-3xl">All Specialist List</h1>
          </div>
          <div className="px-3  flex justify-center">
            <table className="w-full text-md bg-white  rounded mb-4">
              <tbody>
                <tr className="border-b">

                  <th className="text-left p-3 px-5">Specialize on</th>
                  <th className="float-end p-3 px-6">Action</th>
                  
                  <th />
                </tr>
                {
                  specialists.map((data, index) => (
                    <tr key={index}>
                      <td className="p-3 px-5">
                        {data.category}
                      </td>
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
export default Specialist