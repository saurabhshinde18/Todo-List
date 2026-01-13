import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const Create = ({task,settask}) => {

  const {
     register,
     handleSubmit,
      reset,
      formState: { errors },
  } = useForm();

  
  function handleform(data){
     data.id = uuidv4();
     console.log(data);
    settask([...task,data]);
    toast.success("Task Added Successfully!");
    reset();
    }
    console.log(errors);
  return (
    <>
        <div className="w-[40%] h-[80%] flex justify-center bg-amber-500">  
           <div className="h-[70%] mt-16  text-center flex-col ">
            <form onSubmit={handleSubmit(handleform)} className='border h-[90%] p-8'>
        <h3 className='text-red-600 text-4xl font-thin ' >Add Task</h3>
            <input  {...register('title',{required:"this field is required",})} type='text' className='mt-4 tex-center text-2xl border' placeholder='Enter Your Task'/><br/>
            {/* {errors && errors.title && errors.title.message && (<small className="font-thin text-red-900">{toast.warn("title is required")}</small>)}<br/> */}
            <small>{errors?.title?.message}</small><br/>
            <button className='mt-[5%] border m-5 p-3 hover:scale-110 bg-orange-500'>Add Task</button>
            </form>
           </div>
             </div>
    
    </>
  )
}

export default Create;