import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddStudents = () => {
    const [addStudent, setaddStudents] = useState({
        StudentID: "",
        StudentName: "",
        StudentEmail: "",
        StudentCourse: "",
})

const handleChange = (e) => {
    setaddStudents(prev => ({...prev, [e.target.name]: e.target.value}))
}

const navigate = useNavigate();

const handleClick = async (e) => {
    e.preventDefault()

    try{
        await axios.post("http://localhost:8000/api/student", addStudent)
        navigate("/")
    }
    catch(err){
        console.log("Cannot post because of:", err)
    }
}
console.log(addStudent)
  return (
    <div>
        <p>Add Students</p>

        <form onSubmit={handleClick}>
            <input type="number" placeholder='Student ID' name='StudentID' autoFocus onChange={handleChange}/>
            <input type="text" placeholder='Student Name' name='StudentName' onChange={handleChange} />
            <input type="text" placeholder='Student Email' name='StudentEmail' onChange={handleChange}/>
            <input type="text" placeholder='Student Course' name='StudentCourse' onChange={handleChange}/>
            <button type='submit'>Add</button>

        </form>
    </div>
  )
}

export default AddStudents