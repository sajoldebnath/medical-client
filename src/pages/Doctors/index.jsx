import Header from "../../components/Header"
import doc3_jpg from '../../assets/doc3.jpg'
import doc2_png from '../../assets/doc2.png'
import doc4_png from '../../assets/doc4.png'
import doc1_jpg from '../../assets/doc1.jpg'
import doc5_jpg from '../../assets/doc5.jpg'
import doc6_jpg from '../../assets/doc6.jpg'
export default function Doctors() {
    return (
        <>
        
            <div
                className="max-w-7xl mx-auto my-8 px-2">

                <div className="flex justify-center text-2xl md:text-3xl font-bold mb-4">
                    Our Doctors
                </div>

                <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">
                    <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">

                        <a className="relative" href="/tool/writey-ai">
                            <div className="relative w-full aspect-video">
                                <img className='h-full mt-10' src={doc2_png} alt="" />
                                <div
                                    className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                                    <h2 className="text-xl font-semibold">Jacqueline fernandis</h2>
                                    
                                </div>
                            </div>
                        </a>

                        <div className="flex flex-col justify-beetween gap-3 px-4 py-2">

                            <p className="text-gray-600 two-lines">
                                Writey A.I is an AI tool that generates original, researched blog posts in minutes, provides content
                                optimization advice, and works with a plagiarism-free rule.
                            </p>

                            <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
                                <li title="Pricing type"
                                    className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full">
                                
                                    <span>Specilist</span>
                                </li>
                            </ul>

                            <ul className="flex flex-wrap text-sm gap-2 my-1">
                                <li className="flex items-center gap-2">
                                    <span>Anesthesiology,</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span>Cardiology,</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span>Dermatology,</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span>Family Medicine</span>
                                </li>
                            </ul>
                        </div>

                    </li>

                    <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">
                        <a className="relative" href="/tool/writemeai">
                            <div className="relative w-full aspect-video">
                                
                                    <img className='h-full mt-10' src={doc3_jpg} alt="" />
                                <div
                                    className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                                    <h2 className="text-xl font-semibold">Jeneliya</h2>
                                    
                                </div>
                            </div>
                        </a>


                        <div className="flex flex-col justify-beetween gap-3 px-4 py-2">

                            <p className="text-gray-600 two-lines">
                                WriteMe.ai is your #1 AI-powered content writing assistant that crafts high-quality content at a
                                fraction of
                                the cost. This advanced solution eliminates the need for manual writing and allows users to
                                effortlessly
                                generate content in a few clicks.
                            </p>

                            <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
                                <li title="Pricing type"
                                    className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full">
                                   
                                    <span>Specilist</span>
                                </li>

                            </ul>

                            <ul className="flex flex-wrap text-sm gap-2 my-1">
                                <li className="flex items-center gap-2">
                                    <span>General Surgery,</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span>Cardiology,</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span>Dermatology,</span>
                                </li>
                                
                            </ul>
                        </div>

                    </li>

                    <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">
                        <a className="relative" href="/tool/publer">
                            <div className="relative w-full aspect-video">
                                <img className='h-full mt-10' src={doc4_png} alt="" />
                                    <div
                                    className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                                    <h2 className="text-xl font-semibold">Publer</h2>
                                    
                                </div>
                            </div>
                        </a>


                        <div className="flex flex-col justify-beetween gap-3 px-4 py-2">

                            <p className="text-gray-600 two-lines">
                                Publer is a robust social media management platform offering a range of features including post
                                scheduling,
                                collaboration tools, analytics, and AI assistance to supercharge your social media strategy across
                                multiple
                                platforms.
                            </p>

                            <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
                                <li title="Pricing type"
                                    className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full">
                                    
                                    <span>Specilist</span>
                                </li>

                                <li title="Support for API"
                                    className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full">
                                    
                                </li>
                            </ul>

                            <ul className="flex flex-wrap text-sm gap-2 my-1">
                                <li className="flex items-center gap-2">
                                    <span>General Surgery,</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span>Cardiology,</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span>Dermatology</span>
                                </li>
                            </ul>
                        </div>

                    </li>

                    <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">
                        <a className="relative" href="/tool/anyword">
                            <div className="relative w-full aspect-video">
                            <img className='h-full mt-10' src={doc5_jpg} alt="" />
                                  <div
                                    className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                                    <h2 className="text-xl font-semibold">Anyword</h2>
                                   
                                </div>
                            </div>
                        </a>


                        <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
                            <p className="text-gray-600 two-lines">
                                Anyword is an AI-powered platform trusted by marketing teams across the globe to generate, score,
                                and rank
                                content based on predicted performance. With features like Custom Scoring AI models, Brand Messaging
                                Management, and a Performance Boost Chrome Extension, Anyword provides highly personalized and
                                effective
                                content for every channel.
                            </p>

                            <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
                                <li title="Pricing type"
                                    className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full">
                                    
                                    <span>Specilist</span>
                                </li>

                                <li title="Support for API"
                                    className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full">
                                    
                                </li>
                            </ul>

                            <ul className="flex flex-wrap text-sm gap-2 my-1">
                                <li className="flex items-center gap-2">
                                    <span>General Surgery,</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span>Hospital Medicine</span>
                                </li>
                            </ul>
                        </div>

                    </li>

                    <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">

                        <a className="relative" href="/tool/blogseo-ai">
                            <div className="relative w-full aspect-video">
                            <img className='h-full mt-10' src={doc1_jpg} alt="" />
                                 <div
                                    className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                                    <h2 className="text-xl font-semibold">Adword</h2>
                                    
                                </div>
                            </div>
                        </a>


                        <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
                            <p className="text-gray-600 two-lines">
                                BlogSEO AI revolutionizes SEO writing. Stay at the top of your SEO game with this automated writing
                                tool that
                                generates high-performing blog content. It also offers keyword research, internal linking strategy,
                                schema
                                generation, and more.
                            </p>

                            <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
                                <li title="Pricing type"
                                    className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full">
                                    
                                    <span>Specilist</span>
                                </li>

                                <li title="Support for API"
                                    className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full">
                                    
                                </li>
                            </ul>

                            <ul className="flex flex-wrap text-sm gap-2 my-1">
                                <li className="flex items-center gap-2">
                                    <span>Dermatology,</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span>Hospital Medicine</span>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">

                        <a className="relative" href="/tool/typewise">
                            <div className="relative w-full aspect-video">
                            <img className='h-full mt-10' src={doc6_jpg} alt="" />
                             <div
                                    className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                                    <h2 className="text-xl font-semibold">Adison</h2>
                                    
                                </div>
                            </div>
                        </a>


                        <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
                            <p className="text-gray-600 two-lines">
                                Typewise is an AI Communication Assistant that helps customer service and sales teams communicate
                                faster and
                                more effectively.
                            </p>

                            <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
                                <li title="Pricing type"
                                    className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full">
                                    
                                    <span>Specilist</span>
                                </li>

                                <li title="Support for API"
                                    className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full">
                                    
                                </li>
                            </ul>

                            <ul className="flex flex-wrap text-sm gap-2 my-1">
                                <li className="flex items-center gap-2">
                                    <span>Cardiology,</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span>Hospital Medicine</span>
                                </li>
                            </ul>
                        </div>

                    </li>
                </ul>

            </div>
        </>
    )
}
