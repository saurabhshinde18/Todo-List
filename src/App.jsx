import Create from "./components/create";
import Read from "./components/Read"
import { useState } from "react";
function App() {
   const [task,settask] = useState([
           {"id":'1',
           "name":'saurabh'}
       ]);
  return (
    <>
      <div className="w-full h-screen flex justify-center gap-[3%] items-center bg-gray-500">
        <Create task={task} settask={settask}/>
        <Read task={task} settask={settask}/>
      </div>
    </>
  )
}

export default App
