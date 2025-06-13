/* import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const UpdateStudent = () => {
  //const {studentID} = useParams()
  const location = useLocation()
  const studentID = location.pathname.split("/")[2]
  console.log(studentID)
  console.log(location)
  const navigate = useNavigate()

  const [updateStudent, setupdateStudent] = useState({
    StudentID:"",
    StudentName:"",
    StudentEmail:"",
    StudentCourse:"",
  })
  console.log(updateStudent.StudentID)
//tracking changes in the input using name and value
  const handleChange =  (e) => {
    console.log(`${e.target.name}: ${e.target.value}`)
    setupdateStudent(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  
const handleSubmit = async (e) => {
  e.preventDefault() 
  try{
    await axios.put("http://localhost:8000/api/student/"+ studentID, updateStudent)   
  }
  catch(err) {
    console.log("I cannot make this post reques because",(err))
  }

  //navigate to the home page after updating
  navigate('/')
}
  return (
    <div>
      <p className='pb-6 text-xl font-semibold'>Update student details</p>
      <form  className='flex flex-col space-y-3' >
        <input type="number" name='StudentID' placeholder='StudentID'  className='border  w-full' onChange={handleChange}/>
        <input type="text" name='StudentName' placeholder='StudentName'  className='border w-full' onChange={handleChange}/>
        <input type="text" name='StudentEmail' placeholder='StudentEmail'  className='border w-full' onChange={handleChange}/>
        <input type="text" name='StudentCourse' placeholder='StudentCourse' className='border w-full' onChange={handleChange}/>
        <button onClick={handleSubmit} className='w-full bg-green-400 text-gray-800'>Update</button>
      </form>
    
    </div>
  )
}

export default UpdateStudent */
import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const UpdateStudent = () => {
  const location = useLocation()
  const StudentID = location.pathname.split("/")[2]
  console.log(StudentID)
  const navigate = useNavigate()
  
  const [updateStudent, setupdateStudent] = useState({
    StudentID: "",
    StudentName: "",
    StudentEmail: "",
    StudentCourse: "",
  })

  const handleChange = (e) => {
    setupdateStudent(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault() 
    try {
      await axios.put(`http://localhost:8000/api/student/${StudentID}`, updateStudent)
      navigate('/')
    } catch(err) {
      console.error("Update failed: because of this", err)
      // You might want to add user feedback here
    }
  }

  return (
    <div>
      <p className='pb-6 text-xl font-semibold'>Update student details</p>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-3'>
        <input 
          type="number" 
          name='StudentID' 
          placeholder='StudentID'  
          className='border w-full' 
          onChange={handleChange}
          value={updateStudent.StudentID}
        />
        <input 
          type="text" 
          name='StudentName' 
          placeholder='StudentName'  
          className='border w-full' 
          onChange={handleChange}
          value={updateStudent.StudentName}
        />
        <input 
          type="text" 
          name='StudentEmail' 
          placeholder='StudentEmail'  
          className='border w-full' 
          onChange={handleChange}
          value={updateStudent.StudentEmail}
        />
        <input 
          type="text" 
          name='StudentCourse' 
          placeholder='StudentCourse' 
          className='border w-full' 
          onChange={handleChange}
          value={updateStudent.StudentCourse}
        />
        <button type="submit" className='w-full bg-green-400 text-gray-800'>
          Update
        </button>
      </form>  
    </div>
  )
}

export default UpdateStudent