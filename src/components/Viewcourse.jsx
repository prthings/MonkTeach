import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom/'
import axiosInstance from '../helpers/axiosinstance'
import './style.css'

function Viewcourse() {

    let [courseData , setCourseData] = useState([])

    let navigate = useNavigate()

    useEffect(()=>{
            let fetchData = async()=>{
            let {data} = await axiosInstance.get('/posts')
           setCourseData(data)
        }
        fetchData()
    },[])

    let handleDelete = (id)=>{
          axiosInstance.delete(`/posts/${id}`)
          window.location.assign(`/viewcourse`)
    }
  
    return (
    <div className='main' id='product'>
        <h1>View Course</h1>
        <div className='coursedetails'>
        {
            courseData.map(
                (x)=>{
                    return(
                        <div className='divblock'>
                            <img src={`https://avatars.dicebear.com/v2/avataaars/${x.TrainerName}.svg?options%5bmood%5d%5b%5d=happy`} alt="Trainer Images" />
                        <h2>Course Name: {x.CourseName}</h2>
                        <h2>Trainer Name: {x.TrainerName}</h2>
                        <button onClick={()=>{
                            navigate(`/updatecourse/${x.id}`)
                        }}>Update</button>
                        <button onClick={()=>{handleDelete(x.id)}}>Delete</button>
                        </div>
                    )
                }
            )
        }
        </div>
    </div>
  )
}

export default Viewcourse