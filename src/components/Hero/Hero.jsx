import { Link } from 'react-router-dom';
import hero_img from '../../assets/hero.png'
const Home = () =>{
    return (
        <div className="bg-green-400 pb-20 flex relative">
            <div className="left ml-48 w-1/2">
                <h1 className="text-xl font-bold pt-24 mb-5">WELCOM TO MEDINOVA</h1>
                <p className="text-6xl font-bold text-white mb-10 ">Best Healthcare Solution In Your City</p>
                <Link to={'/doctors'} className="font-semibold px-8 py-4 border-2 rounded-full cursor-pointer mr-5 hover:bg-white duration-500" >Find Doctor</Link>
                <Link to={'/appointment'} className="font-semibold px-8 py-4 border-2 rounded-full cursor-pointer hover:bg-white duration-500">Appointment</Link>
            </div>
            <div className="right item-left">
                <img className='h-full mt-10' src={hero_img} alt="" />
            </div>
            {/* <div className="right items-start">

            <img className='mt-20 absolute' src={hero_img} alt="" />
            </div> */}

        </div>
    )

}
export default Home;