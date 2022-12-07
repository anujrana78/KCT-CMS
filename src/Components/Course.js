import React from 'react'
import './course.css'

const Course = () => {
  return (
    <div className='course-box-container'>
    <div className='course-container'>
        <div className='course-code'>
            <h2>CACS200</h2>
        </div>
        <div className='course-details'>
            <h4>Cyber Law and Professional Ethics</h4>
            <div className='course-mesc'>
                <h6>Credit Hours : 3</h6>
                <h6>Lecture Hours : 3</h6>
                <h6>TEacher : Sagar Dhakal</h6>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Course