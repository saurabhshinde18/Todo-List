import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Create = ({task,settask}) => {

    const [title,settitle] = useState("");
    function handlesubmit(e){
    e.preventDefault();
     const data =
    {
        id:uuidv4(),
        name:title
    }; 
    settask([...task,data]);
    settitle("");
    console.log("task changed")
    }

  return (
    <>
        <div className="w-[40%] h-[80%] flex justify-center bg-amber-500">  
           <div className="h-[70%] mt-17.5  text-center flex-col">
            <form onSubmit={handlesubmit} className='border h-[90%] p-8'>
      <h3 className='text-red-600 text-4xl font-thin '>Add Task</h3>
            <input type='text' className='mt-4 tex-center text-2xl border' onChange={(e)=>settitle(e.target.value)} value={title} placeholder='Enter Your Task'/><br/>
            <button className='mt-[10%] border m-5 p-3 hover:scale-110 bg-orange-500'>Add Task</button>
            </form>
           </div>
             </div>
    
    </>
  )
}

export default Create;