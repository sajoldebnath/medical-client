import { Routes, Route, } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth';
import About from './pages/About'
import Service from './pages/Service'
import Appointment from './pages/Appointment'
import Doctors from './pages/Doctors'
import Dashboard from './pages/Dashboard/index'
import AddDoctors from './pages/Dashboard/AddDoctors/'
import DafaultLayout from './components/DefaultLayout';

import { Toaster } from 'react-hot-toast';
import axios from 'axios';
import DoctorList from './pages/Dashboard/Doctorlist/DoctorList';
import AppointmentList from './pages/Dashboard/AppointmentList';
import DafaultLayoutClient from './components/DafaultLayoutClient';
import Specialist from './pages/Dashboard/Specialist';
import AddSpecialist from './pages/Dashboard/AddSpecialist';
import Services from './pages/Dashboard/Services';
import AddServices from './pages/Dashboard/AddServices';




function App() {
  axios.defaults.baseURL = 'http://localhost:8000/api/v1';
  axios.defaults.withCredentials = true;

  return (
    <div>
      <Routes>
        
        <Route element={<DafaultLayoutClient/>}>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About/>} />
           <Route path="/service" element={<Service/>} />
           <Route path="/appointment" element={<Appointment/>} />
           <Route path="/doctors" element={<Doctors/>} />
         
        </Route>
        <Route path="/auth" element={<Auth/>} />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path='/dashboard' element={<DafaultLayout/>}>
            <Route index  element={<Dashboard/>} />
            <Route path="/dashboard/doctors" element={<AddDoctors/>} />
            <Route path="/dashboard/doctorlist" element={<DoctorList/>} />
            <Route path="/dashboard/specialist" element={<Specialist/>} />
            <Route path="/dashboard/addspecialist" element={<AddSpecialist/>} />
            <Route path="/dashboard/appointmentList" element={<AppointmentList/>} />
            <Route path="/dashboard/services" element={<Services/>} />
            <Route path="/dashboard/addservices" element={<AddServices/>} />

        </Route>
        
      

        
        {/* <Route element={<PrivateRoute/>}>
           <Route path='/users' element={<Users/>}/>
           <Route path='/users/:id' element={<Profile/>}/>
        </Route> */}
      </Routes>
      <Toaster/>
    </div>
      
  )
}
export default App;
