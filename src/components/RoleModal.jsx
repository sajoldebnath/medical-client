import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { modalStyles } from './../utils/Constand';
import Modal from 'react-modal'

export default function RoleModal(props) {
    const [isLoading, setIsLoading] = useState(false);
    const { setIsOpenRole, user, setUser, isOpenRole } = props;
    const [role, setRole ]= useState('')

    const onSubmit = async (data) => {
        setIsLoading(true)
        try {
            // const res = await axios.put(`/roles/${role._id}`, data);
            // if (res.data.success) {
            //     const filderRole = roles.filter((data) => data._id !== role._id);
            //     data._id = role._id;
            //     setRoles([data, ...filderRole]);
            //     toast.success(res.data?.message);
            // }
console.log(role);
            
            setIsOpenRole(false)

        } catch (error) {
            console.log(error);
            setIsLoading(false)
        } finally {
            setIsLoading(false)
        }

    }
    
    return (
        <>
            <div
                id="default-modal"
                tabIndex={-1}
                aria-hidden="true"
                className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
                <div className="relative p-4 w-full  max-w-2xl max-h-full">
                    {/* Modal content */}
                    <div className="relative text-black bg-gray-400 w-full rounded-lg ">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-black">
                                Update User
                            </h3>
                            <button
                                type="button"
                                onClick={()=>setIsOpenRole (false)}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="default-modal"
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* Modal body */}
                        <div className="p-4 md:p-5 ">
                        {
                             (
                                <label
                                    htmlFor="role"
                                    className="block text-sm font-medium text-black"
                                >
                                    Role
                                </label>

                           )
                        }
                            <select
                            name="role"
                            id="role"
                            onChange={(e)=>setRole(e.target.value)}
                                value={role}
                                className="bg-transparent border-b-2 border-gray-300 py-2 w-full"
                            >
                                <option disabled hidden value={''} > Select </option>
                                <option value={10}>user</option>
                                <option value={0}>admin</option>
                            </select>
                        </div>
                        {/* Modal footer */}
                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button
                                data-modal-hide="default-modal"
                                type="button"
                                onClick={()=> onSubmit()}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Submit
                            </button>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}