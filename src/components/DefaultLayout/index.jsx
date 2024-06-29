import { Link, Outlet } from "react-router-dom";
const DafaultLayout = () => {
    return (
        <div>
            <div className="bg-orange-100 min-h-screen">
                <div className="fixed bg-white text-blue-800 px-10 py-1 z-10 w-full">
                    <div className="flex items-center justify-between py-2 text-5x1">
                        <div className="font-bold text-blue-900 text-xl">
                            Admin<span className="text-orange-600">Panel</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                            <span
                                className="material-icons-outlined p-2"
                                style={{ fontSize: 20 }}
                            >
                                Admin
                            </span>

                            <div
                                className="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 ml-2"
                                style={{
                                    backgroundImage:
                                        "url(https://i.pinimg.com/564x/de/0f/3d/de0f3d06d2c6dbf29a888cf78e4c0323.jpg)"
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row pt-24 px-10 pb-4">
                    <div className="w-2/12 mr-6">
                        <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
                            <Link
                                to="/dashboard"
                                className="inline-block text-gray-600 hover:text-black my-4 w-full"
                            >
                                Home
                            </Link>
                         
                            <Link
                                to="/dashboard/doctorlist"
                                className="inline-block text-gray-600 hover:text-black my-4 w-full"
                            >
                                <span className="material-icons-outlined float-left pr-2">
                                    Doctors List
                                </span>

                            </Link>
                            <Link
                                to={'/dashboard/specialist'}
                                className="inline-block text-gray-600 hover:text-black my-4 w-full"
                            >
                                <span className="material-icons-outlined float-left pr-2">
                                    Specialist
                                </span>

                            </Link>
                            <Link
                                to={'/dashboard/appointmentlist'}
                                className="inline-block text-gray-600 hover:text-black my-4 w-full"
                            >
                                <span className="material-icons-outlined float-left pr-2">
                                    Appointment Lists
                                </span>

                            </Link>
                            <Link
                                to={'/dashboard/services'}
                                className="inline-block text-gray-600 hover:text-black my-4 w-full"
                            >
                                <span className="material-icons-outlined float-left pr-2">
                                    Services
                                </span>

                            </Link>
                        </div>
                {/* <div className="flex flex-row pt-24 px-10 pb-4">
                    <div className="w-2/12 mr-6">
                        <div className="bg-white rounded-xl shadow-lg mb-6 px-10 py-2">
                            <Link
                                to="/dashboard"
                                className="inline-block text-gray-600 hover:text-black my-4 w-full">
                                LogOut
                            </Link>
                        </div>
                    </div>
                </div> */}
                    </div>
                    
                <Outlet />
                </div>
            </div>
        </div>
    )

}

export default DafaultLayout;