import React, { useState } from 'react'
import rat from './Mouse_AdobeStock_653820918-790x525.jpg'

function Imagemanipulation() {
    const[height,setHeight]=useState(150)
    const[width,setWidth]=useState(150)
    const[red,setRed]=useState()
    const[blue,setBlue]=useState()
    const[green,setGreen]=useState()
    const[imageRotate,setImgRotate]=useState()
    
    function IncreaseHeight(){
        setHeight(height+10)

    }
    function IncreaseWidth(){
        setWidth(width+10)
    }
    function ColorChange(){
        setRed(Math.random()*255)
        setGreen(Math.random()*255)
        setBlue(Math.random()*255)
    }
    function dorotate(){
        setImgRotate(imageRotate+30)
    }
  return (
    <div style={{height:"600px" , width:"700px",border:"2px solid red",marginLeft:"200px"}}>
        <div style={{paddingLeft:"100px",backgroundColor:`rgb(${red},${green},${blue})`}}>
            <img src={rat} height={height} width={width}/>
            <br />
        </div>
        <div>
            <button onClick={IncreaseHeight}>Inhance Height</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={IncreaseWidth}>Inhance Width</button>&nbsp;&nbsp;&nbsp;
            <button onClick={dorotate}>rotate</button>&nbsp;&nbsp;&nbsp;
            <button onClick={ColorChange}>background color change</button>&nbsp;&nbsp;
         </div>
    </div>
  )
}

export default Imagemanipulation