import { useState } from 'react'

import './App.css'
import Student from './Student'
import image from "./download.jpeg"
import UseOfState from './UseOfState'
import Imagemanipulation from './imagemanipulation'


function App() {
  // const [count, setCount] = useState(0)

  // const data={
  //   name: 'Dev Kumar',
  //   dob: '20/07/2003',
  //   roll_no: '2200320100053',
  //   course: 'Computer science and Engineering',
  //   image: image,

  // }

  return (
    <div>
      <Imagemanipulation/>
    </div>
  )
}


// Student.defaultProps = {
//   college: 'ABES Engineering University'
// }

export default App