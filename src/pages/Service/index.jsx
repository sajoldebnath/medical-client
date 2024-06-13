import Header from "../../components/Header";
import Emergency_Care from '../../assets/Emergency Care.jpg'
import Operation_Surgery from '../../assets/Operation Surgery.jpg'
import Outdoor_Checkup from '../../assets/Outdoor Checkup.jpg'
import Medicine_Pharmacy from '../../assets/Medicine Pharmacy.jpg'
import Ambulance_Service from '../../assets/Ambulance Service.jpg'
import Blood_Testing from '../../assets/Blood Testing.jpg'

export default function Service() {
    return (
        
        <section className="feature__section bg-[#F4F4F7]">
        <div className="max-w-5xl px-7 lg:px-10 py-14 mx-auto">
          <div className="flex flex-col gap-y-3">
            <h2 className="flex justify-center text-2xl md:text-3xl font-bold mb-4">
            Excellent Medical Services
            </h2>
          </div>
          <div className="w-full pt-10 lg:w-full relative isolate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="grid grid-rows-1 p-5 bg-white rounded-xl gap-y-2 w-full border border-slate-500/50 hover:shadow-[5px_5px_0_rgba(0,0,0,0.5)] transition-shadow duration-150 ease-linear cursor-pointer">
              <div className="flex flex-col gap-y-2.5">
              <img className='h-full mt-0' src={Emergency_Care} alt="" />
                <h3 className="text-lg font-semibold">Emergency Care</h3>
                
              </div>
              <p className="text-slate-700/70 text-base">
                Find balance and inner peace with our yoga classes led by experienced
                instructors.
              </p>
              <div className="flex items-center justify-between pt-5 w-full">
                
              </div>
            </div>
            <div className="grid grid-rows-1 p-5 bg-white rounded-xl gap-y-2 w-full border border-slate-500/50 hover:shadow-[5px_5px_0_rgba(0,0,0,0.5)] transition-shadow duration-150 ease-linear cursor-pointer">
              <div className="flex flex-col gap-y-2.5">
              <img className='h-full mt-0' src={Operation_Surgery} alt="" />
                <h3 className="text-lg font-semibold">Operation & Surgery</h3>
                
              </div>
              <p className="text-slate-700/70 text-base">
                Burn calories and boost your metabolism with high-intensity interval
                training sessions.
              </p>
              <div className="flex items-center justify-between pt-5 w-full">
              </div>
            </div>
            <div className="grid grid-rows-1 p-5 bg-white rounded-xl gap-y-2 w-full border border-slate-500/50 hover:shadow-[5px_5px_0_rgba(0,0,0,0.5)] transition-shadow duration-150 ease-linear cursor-pointer">
              <div className="flex flex-col gap-y-2.5">
              <img className='h-full mt-0' src={Ambulance_Service} alt="" />
                <h3 className="text-lg font-semibold">Ambulance Service</h3>
                
              </div>
              <p className="text-slate-700/70 text-base">
                Strengthen and tone your muscles while improving flexibility and
                posture with Pilates.
              </p>
              <div className="flex items-center justify-between pt-5 w-full">
              </div>
            </div>
            <div className="grid grid-rows-1 p-5 bg-white rounded-xl gap-y-2 w-full border border-slate-500/50 hover:shadow-[5px_5px_0_rgba(0,0,0,0.5)] transition-shadow duration-150 ease-linear cursor-pointer">
              <div className="flex flex-col gap-y-2.5">
              <img className='h-full mt-0' src={Outdoor_Checkup} alt="" />
                <h3 className="text-lg font-semibold">Outdoor Checkup</h3>
                
              </div>
              <p className="text-slate-700/70 text-base">
                Strengthen and tone your muscles while improving flexibility and
                posture with Pilates.
              </p>
              <div className="flex items-center justify-between pt-5 w-full">
              </div>
            </div>
            <div className="grid grid-rows-1 p-5 bg-white rounded-xl gap-y-2 w-full border border-slate-500/50 hover:shadow-[5px_5px_0_rgba(0,0,0,0.5)] transition-shadow duration-150 ease-linear cursor-pointer">
              <div className="flex flex-col gap-y-2.5">
              <img className='h-full mt-0' src={Medicine_Pharmacy} alt="" />
                <h3 className="text-lg font-semibold">Medicine & Pharmacy</h3>
                
              </div>
              <p className="text-slate-700/70 text-base">
                Strengthen and tone your muscles while improving flexibility and
                posture with Pilates.
              </p>
              <div className="flex items-center justify-between pt-5 w-full">
              </div>
            </div>
            <div className="grid grid-rows-1 p-5 bg-white rounded-xl gap-y-2 w-full border border-slate-500/50 hover:shadow-[5px_5px_0_rgba(0,0,0,0.5)] transition-shadow duration-150 ease-linear cursor-pointer">
              <div className="flex flex-col gap-y-2.5">
              <img className='h-full mt-0' src={Blood_Testing} alt="" />
                <h3 className="text-lg font-semibold">Blood Testing</h3>
                
              </div>
              <p className="text-slate-700/70 text-base">
                Strengthen and tone your muscles while improving flexibility and
                posture with Pilates.
              </p>
              <div className="flex items-center justify-between pt-5 w-full">
              </div>
            </div>
          </div>
        </div>
      </section>
      
        
    )
}
