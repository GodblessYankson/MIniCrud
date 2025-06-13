import express from "express"
import mysql from "mysql"
import cors from "cors"

//using express
const app = express()
app.use(express.json())

// using cors so that the frontend ccan fetch data from the backend
app.use(cors())

// using mysql data connection 
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
})

//Incase there is any error
db.connect((err) => {
    if(err) {
        console.error("Eroor connecting to the backend:", err);
        return;
    }
    console.log("Connected to the database")
});

app.get("/", (req,res) => {
    res.json("Hello this is the backend server")
})

//Getting all students
app.get("/api/student", (req,res) => {
    const q = "SELECT * FROM student"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
            return res.json(data)
    })
})

// making a post request from te API
app.post("/api/student", (req,res) => {
    const q = "INSERT INTO student (`StudentID`, `StudentName`, `StudentEmail`, `StudentCourse`) VALUES (?)";
    const values = [
       req.body.StudentID,
       req.body.StudentName,
       req.body.StudentEmail,
       req.body.StudentCourse,
    ]
    db.query(q, [values], (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

//Deleting the post using id
app.delete("/api/student/:StudentID", (req, res) => {
    const studentID = req.params.StudentID;
    const q = "DELETE FROM student WHERE StudentID = ?;"

    db.query(q, [studentID], (err, data) => {
        if(err) return res.json(err);
        return res.json("Student has been deleted successfully")
    })

})

// making a update/put request
/* app.put("/api/students/:StudentID", (req,res) => {
    const studentID = req.params.StudentID;
    const q = "UPDATE student SET `StudentID` = ?, `StudentName` = ?, `StudentEmail` = ?, `StudentCourse` = ? WHERE StudentID = ?"

    const values = [
        req.body.StudentID,
        req.body.StudentName,
        req.body.StudentEmail,
        req.body.StudentCourse,
    ]

    db.query(q, [...values, studentID], (err,data) => {
        if(err) return res.json(err);
        return res.json("Book has been updated successfulls")
    })
}) */
  
    app.put("/api/student/:StudentID", (req,res) => {
        const StudentID = req.params.StudentID;
        const q = "UPDATE student SET `StudentID` = ?, `StudentName` = ?, `StudentEmail` = ?, `StudentCourse` = ? WHERE StudentID = ?"
        const values = [
            req.body.StudentID,
            req.body.StudentName,
            req.body.StudentEmail,
            req.body.StudentCourse,
        ]
        db.query(q, [...values, StudentID], (err,data) => {
            if(err) return res.json(err);
            return res.json("Student has been updated successfully"); // Fixed typo in message
        })
    })
    
//connecting with the port number
app.listen(8000, () => {
   console.log("Server is running on port 800")
       
})




