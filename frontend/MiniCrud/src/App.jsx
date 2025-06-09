import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import StudentsRegister from "./StudentsRegister";
import UpdateStudent from "./UpdateStudent";
import DeleteStudent from "./DeleteStudent";
import AddStudents from "./AddStudents";
function App() {
  

  return (
    <div className="w-full h-screen flex justify-center items-center ">
        <Router>
          <Routes>
            <Route path='/' element={<StudentsRegister />}></Route>
            <Route path='/update' element={<UpdateStudent />}></Route>
            <Route path='/add' element={<AddStudents />}></Route>
            <Route path='/delete' element={<DeleteStudent />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;






