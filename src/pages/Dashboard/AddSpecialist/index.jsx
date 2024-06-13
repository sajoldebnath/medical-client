import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../context";
const AddSpecialist = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const navigator = useNavigate();
      const {setSpecialists, specialists} = useContext(GlobalContext);

    const onSubmit = async(data) =>{
       try{
         const res = await axios.post('/specialists', data)
         if(res.data.success)
          {
             specialists.push(res.data.data)
           
             setSpecialists(specialists)
             navigator('/dashboard/specialist')
          }

       }catch(error)
       {
        console.log(error)
       }

    }
    

    return (
      <>
        <div className="bg-white px-6 py-12 sm:py-24 lg:px-8 w-full">
          <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Add Specialist
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                {
                  errors.category ?
                  <label
                  htmlFor="category"
                  className="block text-sm font-semibold leading-6 text-red-900"
                >
                  {errors.category.message}
                </label>:
                 <label
                 htmlFor="category"
                 className="block text-sm font-semibold leading-6 text-gray-900"
               >
                 Name
               </label>
                }
          
                <div className="mt-2.5">
                  <input
                    type="text"
                    {
                      ...register('category',{
                        required:"Name is required"
                      })
                    }
                    name="category"
                    id="category"
                    autoComplete="given-name"
                    placeholder="Your First Name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              
              
              
              
              
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-sm py-2 w-full block"
              >
                Submit →
              </button>
            </div>
          </form>
        </div>
  
      </>
    )
  }
  
  export default AddSpecialist