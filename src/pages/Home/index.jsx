import Header from './../../components/Header';
import Hero from '../../components/Hero/Hero'
import About from '../../pages/About'
import Service from '../Service';
import Doctors from '../Doctors';
import Gallary from '../../components/Gallary';

const Home = () =>{
    return (
        <div>
            <Hero/>
            <Gallary/>
            <Service/>
            <Doctors/>
            <About/>
        </div>
    )

}
export default Home;