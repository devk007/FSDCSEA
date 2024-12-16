import React, { createContext } from 'react'
import Child1 from './contextcomponent/Child1';
import Child3 from './contextcomponent/Child3';
import Child2 from './contextcomponent/Child2';
const mycontext=createContext();
function AppContext() {
   
    const data={
        name:'Dev',
        branch:'CSE',
        section:"A"
    }
  return (
    <div>AppContext
  <mycontext.Provider value={data}>
    <Child3 />
    <Child2 />
    </mycontext.Provider>

    
    </div>
  )
}
export {
    mycontext
}


export default AppContext