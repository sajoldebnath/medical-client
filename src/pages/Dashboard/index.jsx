import React from "react"
const Dashboard = () => {
  return (
    <>
    <div className="services_list  w-full">
     
      <div className="title w-full flex justify-center text-2xl font-bold">
        <h1>Users </h1>
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
                <th className="text-left p-3 px-5">Email</th>
                <th className="text-left p-3 px-5">Phone</th>
                <th />
              </tr>
              <tr className="border-b hover:bg-orange-100 bg-gray-100">
                <td className="p-3 px-5">

                </td>
                <td className="p-3 px-5">

                </td>
                <td className="p-3 px-5">

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
                    onClick={() => handleDelete(data._id)}
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
export default Dashboard