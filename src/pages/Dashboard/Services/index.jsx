import { useCallback, useContext } from "react"
import { Link } from "react-router-dom"
import { GlobalContext } from "../../../context"
import axios from "axios"

const Services = () => {
  const {
    services,
    setServices
  } = useContext(GlobalContext)

console.log(services);
  const handleDelete = async (id) => {
    console.log(id)
    try {
      const res = await axios.delete(`/services/${id}`);
      if (res.data.success) {
        setServices(services.filter((service) => service._id !== id));

      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="services_list  w-full">
        <Link to={'/dashboard/addservices'} className=" bg-sky-600 hover:bg-sky-800 rounded-lg p-4  float-end" > Add Services</Link>
        <div className="title w-full flex justify-center text-2xl font-bold">
          <h1>Services </h1>
        </div>


        <div className="text-gray-900 bg-gray-200">
          <div className="p-4 flex">
            <h1 className="text-3xl">Lists</h1>
          </div>

          <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
              <tbody>
                <tr className="border-b">
                  <th className="text-left p-3 px-5">Name</th>

                  <th className="text-left p-3 px-5">Phone</th>
                  <th className="text-left p-3 px-5">Message</th>
                  <th className="text-left p-3 px-5">Price</th>
                  <th className="text-left p-3 px-5">Image</th>
                  <th className=" float-end p-3 px-6">Action</th>
                  <th />
                </tr>
                {
                  services.map((data, index) => (
                    <tr key={index} className="border-b hover:bg-orange-100 bg-gray-100">
                      <td className="p-3 px-5">
                        {data.name}
                      </td>
                      <td className="p-3 px-5">
                        {data.phone}
                      </td>
                      <td className="p-3 px-5">
                        {data?.message}
                      </td>
                      <td className="p-3 px-5">
                        {data.price}
                      </td>
                      <td className="p-3 px-5 w-10 h-10 ">
                        <img
                          className="rounded-lg border-gray-500 border-2"
                          src={data.image} alt="no image" />
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
export default Services