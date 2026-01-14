import React, { createContext, useContext } from 'react'
import { useState } from 'react';
 
export const todocontext = createContext(null);
const Wrapper = (props) => {
    const [task,settask] = useState([
               {"id":'1',
               "title":'saurabh'}
           ]);
     return (
   <todocontext.Provider value={[task,settask]}>
    {props.children}
   </todocontext.Provider>
  )
}

export default Wrapper