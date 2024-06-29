import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../context";
import axios from "axios";

// now

const AddServices = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigator = useNavigate();
  const { setServices, services } = useContext(GlobalContext);

  const onSubmit = async (data) => {
    const form = new FormData()
    form.append('name', data.name)
    form.append('email', data.email)
    form.append('phone', data.phone);
    form.append('price', data.price);
    form.append('message', data.message);
    form.append('image', data.image[0]);
  
    try {
      const res = await axios.post('/services', form)
      if (res.data.success) {
        setServices([ res.data.data,...services,])
        navigator('/dashboard/services')
        alert(res.data.message)
      
      }

    } catch (error) {
      
    }
  }

    return (
      <>
        <div className="bg-white px-6 py-12 sm:py-24 lg:px-8 w-full">
          <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
            <p className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Add Services
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              {
                errors.name ?
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold leading-6 text-red-900"
                  >
                    {errors.name.message}
                  </label> :
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Name
                  </label>
              }
              <div className="mt-2.5">
                <input
                  type="text"
                  {
                  ...register('name', {
                    required: "Name is required"
                  })
                  }
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  placeholder="Your First Name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
  
            <div className="sm:col-span-2">
              {
                errors.phone ?
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold leading-6 text-red-900"
                  >
                    {errors.phone.message}
                  </label> :
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
              }
              <div className="mt-2.5">
                <input
                  type="text"
                  {
                  ...register('phone', {
                    required: "phone is required"
                  })
                  }
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  placeholder="Your Phone Number"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
              <div className="sm:col-span-2">
              {
                errors.price ?
                  <label
                    htmlFor="price"
                    className="block text-sm font-semibold leading-6 text-red-900"
                  >
                    {errors.price.message}
                  </label> :
                  <label
                    htmlFor="price"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Price
                  </label>
              }
              <div className="mt-2.5">
                <input
                  type="string"
                  {
                  ...register('price', {
                    required: "Price is required"
                  })
                  }
                  name="price"
                  id="price"
                  autoComplete="price"
                  placeholder="price"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              {
                errors.message ?
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-red-900"
                  >
                    {errors.message.message}
                  </label> :
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message
                  </label>
              }
              <div className="mt-2.5">
                <input
                  type="text"
                  {
                  ...register('message', {
                    required: "message is required"
                  })
                  }
                  name="message"
                  id="message"
                  autoComplete="given-message"
                  placeholder="Write message"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
              <div className="sm:col-span-2">
                {
                  errors.image ?
                  <label
                  htmlFor="image"
                  className=" text-red-900 block text-sm font-semibold leading-6"
                >
                  {errors.image.message}
                </label>:
                 <label
                 htmlFor="image"
                 className="block text-sm font-semibold leading-6 text-gray-900"
               >
                 Upload image
               </label>

                }
               
                <div className="mt-2.5">
                  <label className="block  text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
                  <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:placeholder-gray-400 p-2 "
                   id="image"
                    type="file"
                    name="image"
                    {...register('image' , {required:"Upload image is required"})}
                   />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-sm py-2 w-full block"
              >
                Submit 
              </button>
            </div>
          </form>
        </div>
  
      </>
    )
  }
  
  export default AddServices