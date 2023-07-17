import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../helpers/axiosinstance'
import './style.css'

function Createcourse() {

    let [CourseName, setCourseName]= useState("")
    let [TrainerName, setTrainerName]= useState("")
    let navigate = useNavigate()

    let handlesubmit=(e)=>{
        e.preventDefault()
        console.log({CourseName, TrainerName});
        const payload={
            CourseName, TrainerName
        }
        axiosInstance.post("/posts", payload)
        navigate("/viewcourse")
    }
  return (
    <div id='product'>
        <form action="">
            <fieldset>
                <legend>Course Details</legend>
                <label htmlFor="CourseName">Course Name: </label>
                <input type="text" placeholder='Enter Course Name' id='CourseName'onChange={(e)=>{
                    setCourseName(e.target.value)
                }} /><br /><br />
                <label htmlFor="TrainerName">Trainer Name: </label>
                <input type="text" placeholder='Enter Trainer Name' id="TrainerName" onChange={(e)=>{
                    setTrainerName(e.target.value)
                }} /><br /><br />
                <button onClick={handlesubmit}>Submit</button>
            </fieldset>
        </form>
    </div>
  )
}

export default Createcourse