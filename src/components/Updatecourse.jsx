import React,{useEffect, useState}from 'react'
import { useNavigate, useParams } from 'react-router-dom/dist'
import axiosInstance from '../helpers/axiosinstance'

function Updatecourse() {
    let [CourseName , setCourseName] = useState("")
    let [TrainerName , setTrainerName] = useState("")

    const {id} = useParams()
    let navigate = useNavigate()

    useEffect(()=>{
        let fetchData = async ()=>{
            let {data} = await axiosInstance.get(`/posts/${id}`)
            console.log(data)
            setCourseName(data.CourseName)
            setTrainerName(data.TrainerName)
            
        }
        fetchData()
    },[])

    let handleSubmit = (e)=>{
        e.preventDefault()
        console.log({CourseName , TrainerName});
        const payload={
            CourseName ,
            TrainerName
        }
        axiosInstance.put(`/posts/${id}` , payload)
        navigate('/viewcourse')
    }
  return (
    <div id='product'>
        <form action="">
            <fieldset>
                <legend>Course Details</legend>
                <label htmlFor="CourseName">Course Name: </label>
                <input value={CourseName} type="text" placeholder='Enter Course Name' id='CourseName'onChange={(e)=>{
                    setCourseName(e.target.value)
                }} /><br /><br />
                <label htmlFor="TrainerName">Trainer Name: </label>
                <input value={TrainerName} type="text" placeholder='Enter Trainer Name' id="TrainerName" onChange={(e)=>{
                    setTrainerName(e.target.value)
                }} /><br /><br />
                <button onClick={handleSubmit}>Updates</button>
            </fieldset>
        </form>
    </div>
  )
}

export default Updatecourse