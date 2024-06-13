import Care_0 from '../../assets/care.png'
import Care_2 from '../../assets/care2.png'
import Care_3 from '../../assets/care3.png'
import Care_4 from '../../assets/care4.png'
import Care_5 from '../../assets/care5.png'
import Care_6 from '../../assets/care6.png'
import Care_7 from '../../assets/care7.png'
import Care_8 from '../../assets/care8.png'

export { Link, Outlet } from "react-router-dom";


const Gallary = () => {
    return (
        <div>
            <div className="max-w-5xl px-7 lg:px-10 py-14 mx-auto">
                
            </div>
            <div className="flex flex-col gap-y-3">
            <h2 className="flex justify-center text-2xl md:text-3xl font-bold mb-4">
            Care Gallary
            </h2>
          </div>
            <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
                <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
                    <section className="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                    <img className='h-full mt-0' src={Care_0} alt="" />
                        <div className="space-x-1 flex justify-center mt-10">
                        
                        </div>
                        <h1 className="text-3xl my-5">Soft Plushy Cushion Chair</h1>
                        <p className="mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
                            incidunt!
                        </p>
                        
                        
                    </section>
                    <section className="p-5 py-10 bg-green-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                    <img className='h-full mt-0' src={Care_2} alt="" />
                        <div className="space-x-1 flex justify-center mt-10">
                        
                        </div>
                        <h1 className="text-3xl my-5">Comfortable Wooden Chair</h1>
                        <p className="mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
                            incidunt!
                        </p>
                        
                        
                    </section>
                    <section className="p-5 py-10 bg-red-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                    <img className='h-full mt-0' src={Care_3} alt="" />
                        <div className="space-x-1 flex justify-center mt-10">
                        
                        </div>
                        <h1 className="text-3xl my-5">Multipurpose Wooden Trolly</h1>
                        <p className="mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
                            incidunt!
                        </p>
                        
                        
                    </section>
                    <section className="p-5 py-10 bg-blue-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                    <img className='h-full mt-0' src={Care_4} alt="" />
                        <div className="space-x-1 flex justify-center mt-10">
                        
                        </div>
                        <h1 className="text-3xl my-5">Multipurpose Wooden Tool</h1>
                        <p className="mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
                            incidunt!
                        </p>

                    </section>
                    <section className="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                        <img className='h-full mt-0' src={Care_5} alt="" />
                        <div className="space-x-1 flex justify-center mt-10">
                        </div>
                        <h1 className="text-3xl my-5">Soft Plushy Cushion Chair</h1>
                        <p className="mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
                            incidunt!
                        </p>
                        
                        
                    </section>
                    <section className="p-5 py-10 bg-green-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                    <img className='h-full mt-0' src={Care_6} alt="" />
                        <div className="space-x-1 flex justify-center mt-10">
                        <h1 className="text-3xl my-5">Comfortable Wooden Chair</h1>
                        </div>
                        
                        <p className="mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
                            incidunt!
                        </p>
                        
                        
                    </section>
                    <section className="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                    <img className='h-full mt-0' src={Care_7} alt="" />
                        <div className="space-x-1 flex justify-center mt-10">
                        
                        </div>
                        <h1 className="text-3xl my-5">Dolor clita vero elitr sea stet dolor justo diam</h1>
                        <p className="mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
                            incidunt!
                        </p>
                        
                        
                    </section>
                    <section className="p-5 py-10 bg-green-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                    <img className='h-full mt-0' src={Care_8} alt="" />
                        <div className="space-x-1 flex justify-center mt-10">
                        
                        </div>
                        <h1 className="text-3xl my-5">Comfortable Wooden Chair</h1>
                        <p className="mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
                            incidunt!
                        </p>
                        
                        
                    </section>
                </section>
            </section>


        </div>
    )

}

export default Gallary;