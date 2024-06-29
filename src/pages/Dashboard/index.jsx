import axios from "axios"
import React, { useEffect, useState } from "react"
import { get } from "react-hook-form"
import RoleModal from "../../components/RoleModal"
const Dashboard = () => {
  const [users, setUsers] = useState([])
  const [isOpenRole ,setIsOpenRole]  = useState(false)
  const [user ,setUser]  = useState(null)
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/users')
        if (res.data.success)
          setUsers(res.data.data);
      } catch (error) {
        console.log(error);
      }
    })()
  }, [])
  const handleEdit = async (id) => {
    setIsOpenRole(true)
    setUser(users.find((data)=> data._id  === id))
  }
  
  


  return (
      <>
   {
    isOpenRole && <RoleModal 
    setIsOpenRole={setIsOpenRole}
    user={user}
    setUser={user}
   
   />
   }
      
        <div className="text-gray-900 bg-gray-200 w-full">
          <div className="p-4 flex">
            <h1 className="text-3xl">Users Lists</h1>
          </div>
          <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
              <tbody>
                <tr className="border-b">
                  <th className="text-left p-3 px-5">Name</th>
                  <th className="text-left p-3 px-5">Email</th>
                  <th className="text-left p-3 px-5">Role</th>
                  <th className="float-end p-3 px-6">Action</th>
                  <th />
                </tr>
                {
                  users.map((data, index) => (
                    <tr key={index} className="border-b hover:bg-orange-100 bg-gray-100">
                      <td className="p-3 px-5">
                        {data.name}
                      </td>
                      <td className="p-3 px-5">
                        {data.email}
                      </td>
                      <td className="p-3 px-5">
                        {data.role != 10 ?"Admin" : "User"}
                      </td>
                      <td className="p-3 px-5 flex justify-end">
                        <button
                          type="button"
                          onClick={() => handleEdit(data._id)}
                          className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Edit
                        </button>

                      </td>
                    </tr>
                  ))
                }

              </tbody>
            </table>
          </div>
        </div>
      </>
    )
  }
  export default Dashboard