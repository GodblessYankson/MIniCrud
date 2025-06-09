import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const StudentsRegister = () => {
    const [students,setStudents] = useState([])

    const {StudentID} = useParams()
    console.log(StudentID)

    useEffect(() => {
        const fetchAllBooks = async () => {
            try{
                const res = await axios.get("http://localhost:8000/api/student")
                console.log(res.data)
                // Makes the data an array even if it is not  an array

                //const StudentArray = Array.isArray(res.data) ? res.data : res.dataStudents || [];
                  const StudentArray = Array.isArray(res.data) ? res.data : [res.data]
                setStudents(StudentArray);
                
            } catch(err) {
                console.log(err)
            }
        }
        fetchAllBooks()
    }, [])

    const handleDelete = async (StudentID) => {
        try{
            await axios.delete(`http://localhost:8000/api/student/${StudentID}`)
            window.location.reload()
        }
        catch(err){
            console.log("The reason why  this book cannot be deleted is:", err)
        }
    }
  return (
    <div>
        <h1>JHS 3 BECE CANDIDATES </h1>
        <div>
            {students.map(item => (
                <div key={item.StudentID}>
                    <p>{item.StudentName}</p>
                      <p>{item.StudentCourse}</p>
                    <p>{item.StudentEmail}</p> 
                    <button onClick={() => handleDelete(item.StudentID)}>Delete</button>
                </div>
            ))}
        </div>
        <button><Link to={"/add"}>Add Students</Link></button>
    </div>
  )
}
export default StudentsRegister