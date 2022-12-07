import React from 'react'
import "./datebox.css"

const DateBox = () => {

    let date = new Date()
    let year = date.getFullYear();
    let month = date.getMonth() + 1 ;
    let day = date.getDate();
    let wDay = date.getDay();

    switch(wDay){
      case 0: 
      wDay = "Sun"
      break;

      case 1: 
      wDay = "Mon"
      break;

      case 2:
      wDay = "Tue"
      break;

      case 3: 
      wDay = "Wed"
      break;

      case 4:
      wDay = "Thu"
      break;

      case 5 : 
      wDay = "Fri"
      break;
      
      default :
      wDay = "Sat"
    }

    
    // if(wDay === ""){
    //    setColor = "green"
    // }else setColor = "red"
    let setColor = wDay === "Sat" ? "red" : "#0c0d38"
    let collegeStatus = wDay === "Sat" ? "CLOSE" : "OPEN"


  return (
  
    <div className='date-box' style={{backgroundColor:setColor}} >
        <h4>{wDay}</h4>
        <h2>{day}</h2>
        <p>{collegeStatus}</p>
    </div>
  )
}

export default DateBox