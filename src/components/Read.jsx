import React from 'react'


const Read = ({task,settask}) => {
    
    function deletetask(id){
       const deleted = task.filter((item)=>item.id !==id);
       settask(deleted);
    }
    function addstrike(e){
      e.target.classList.toggle("line-through");
    }
    const rendertask =task.map((item)=>{
     return (
      <div className="flex p-4 items-center border mt-3 h-[60%]" key={item.id}>
         <h3 className='text-2xl' onClick={addstrike}>{item.name}</h3>
        <button className='border  p-3  absolute hover:scale-110 bg-orange-500 right-[14%]' onClick={()=>{
          deletetask(item.id);
        }}>Delete Task</button>     
     </div>
     )
    })
    
  return (
    <>

         <div className="w-[40%] h-[80%] flex justify-center bg-amber-700">  
           <div className="h-[20%] mt-17.5 w-120">
            <h3 className='text-blue-1000 text-4xl font-thin text-center'>All Tasks</h3> 
            {rendertask}
           </div>
           </div>
    </>
  )
}

export default Read;