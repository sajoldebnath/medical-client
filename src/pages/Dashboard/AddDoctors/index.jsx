import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../context";
const AddDoctors = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigator = useNavigate();
  const { setSpecialists, specialists ,doctors , setDoctors} = useContext(GlobalContext)


  const onSubmit = async (data) => {
    const form = new FormData()
    form.append('image' , data.image[0])
    form.append('name' ,data.name)
    form.append('specialist', data.specialist);
    form.append('rating', data.rating);
    form.append('email', data.email);
    form.append('phone', data.phone);

    try{
      const res = await axios.post('/doctors',form)
      if(res.data.success)
       {
          const d = res.data.data
          setDoctors((prev)=>({d,...prev}))
          navigator('/dashboard/doctorlist')
          alert(res.data.message)
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
            Add Doctors
          </h1>
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
                errors.specialist ?
                  <label
                    htmlFor="specialist"
                    className="block text-sm font-semibold leading-6 text-red-900"
                  >
                    {errors.specialist.message}
                  </label> :
                  <label
                    htmlFor="specialist"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Specialist
                  </label>
              }
              <div className="mt-2.5">
                <select
                  id="specialist"
                  name="specialist"
                  defaultValue={""}
                  {
                    ...register('specialist', {
                      required: "Specialist required"
                    })
                    }
                  className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option disabled value={''} > enter Specialist</option>
                  {
                    specialists.map((data, index) =>(
                      <option  key={index} value={data._id}>{data.category}</option>

                    ))
                  }
                </select>

              </div>
            </div>
            <div className="sm:col-span-2">
              {
                errors.email ?
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-red-900"
                  >
                    {errors.email.message}
                  </label> :
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
              }
              <div className="mt-2.5">
                <input
                  type="text"
                  {
                  ...register('email', {
                    required: "Email is required"
                  })
                  }
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="Your Email Address"
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
                errors.rating ?
                  <label
                    htmlFor="rating"
                    className="block text-sm font-semibold leading-6 text-red-900"
                  >
                    {errors.rating.message}
                  </label> :
                  <label
                    htmlFor="rating"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Rating
                  </label>
              }
              <div className="mt-2.5">
                <input
                  type="number"
                  {
                  ...register('rating', {
                    required: "rating is required",
                    max:{
                      value: 5,
                      message:"lenght shoud be at max 5"
                    },
                    min:{
                      value: 1,
                      message:"lenght shoud be at min 1"
                    }
                  })
                  }
                  name="rating"
                  id="rating"
                  autoComplete="tel"
                  placeholder="Doctor rating"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="image"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Upload Doctor image
              </label>
              <div className="mt-2.5">
                <label className="block  text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
                <input 
                {
                  ...register('image')
                }
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:placeholder-gray-400 p-2 "
                 id="image" 
                 name="image"
                 type="file" />
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

export default AddDoctors