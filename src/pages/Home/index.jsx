import Header from './../../components/Header';
import Hero from '../../components/Hero/Hero'
import About from '../../pages/About'
import Service from '../Service';
import Doctors from '../Doctors';
import Gallary from '../../components/Gallary';
import Appointment from '../../pages/Appointment'



const Home = () =>{
    return (
        <div>
            <Hero/>
            <Service/>
            <Doctors/>
            {/* <Appointment/> */}
            <About/>
        </div>
    )

}
export default Home;