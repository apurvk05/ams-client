import React from 'react';
import {useSelector} from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './redux/utils/setAuthToken'
import store from './redux/store'

import { setFacultyUser, facultyLogout } from './redux/action/facultyAction'

import { setAdminUser, adminLogout, adminGetAllStudent } from './redux/action/adminAction'

import { setStudentUser, studentLogout } from './redux/action/studentAction'
import LoginPage from './Pages/LoginPage'
import Home from './Pages/StudentHome'

import StudentDetails from './Pages/StudentDetails'
import FacultyInterface from './Pages/FacultyInterface'
import AttendenceFaculty from './Pages/AttendenceFaculty'

import AdminAddStudent from './Pages/AdminAddStudent'
import AdminAddFaculty from './Pages/AdminAddFaculty'
import AdminAddSubject from './Pages/AdminAddSubject'
import StudentAttendencePage from './Pages/StudentAttendencePage'
import FacultyStudentLoginPags from './Pages/FacultyStudentLoginPags'
import StudentUpdatePassword from './Pages/StudentUpdatePassword'
import FacultyUpdatePassword from './Pages/FacultyUpdatePassword'
import ForgotPassword from './Pages/ForgotPassword'
import Chat from './Pages/Chat'
import RecieverUserDetails from './Pages/RecieverUserDetails'
import StudentUpdateProfile from './Pages/StudentUpdateProfile'
 
import StudentSubjectList from './Pages/Student/StudentSubjectList'

import FacultyUploadMarks from './Pages/Faculty/FacultyUploadMarks'

import FacultyUpdateProfile from './Pages/Faculty/FacultyUpdateProfile'

import StudentTestPerformace from './Pages/Student/StudentTestPerformance'

import AdminAddAdmin from './Pages/Admin/AdminAddAdmin'

import AdminGetAllFaculty from './Pages/Admin/AdminGetAllFaculty'

import AdminGetAllStudent from './Pages/Admin/AdminGetAllStudents'

import AdminGetAllSubject from './Pages/Admin/AdminGetAllSubjects'

import AdminHome from './Pages/Admin/AdminHome'
import Errorpage from './Components/error';
import AboutUs from './Components/about';
 
if (window.localStorage.facultyJwtToken) {
  setAuthToken(localStorage.facultyJwtToken);
  const decoded = jwt_decode(localStorage.facultyJwtToken);
 
  store.dispatch(setFacultyUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(facultyLogout());
    window.location.href = '/';
  }
}
else if (window.localStorage.studentJwtToken) {
  setAuthToken(localStorage.studentJwtToken);
  const decoded = jwt_decode(localStorage.studentJwtToken);

  store.dispatch(setStudentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(studentLogout());
    window.location.href = '/';
  } 
}
else if (window.localStorage.adminJwtToken) {
  setAuthToken(localStorage.adminJwtToken);
  const decoded = jwt_decode(localStorage.adminJwtToken);

  store.dispatch(setAdminUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(adminLogout());
    window.location.href = '/adminLogin';
  } 
}

function App() {
  const store = useSelector((store)=>store)
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<FacultyStudentLoginPags/>} />
          <Route exact path='/adminLogin' element={<LoginPage/>} />
          <Route exact path='/home' element={<Home/>} />
          {/* <Route exact path='/home' element={<facultyHome />} /> */}
          <Route exact path='/student/updateProfile' element={<StudentUpdateProfile/>} />
          <Route exact path="/studentDetails" element={<StudentDetails/>} />
          <Route exact path='/faculty' element={<FacultyInterface/>} />
          <Route exact path='/attendenceFaculty' element={<AttendenceFaculty/>} />
          <Route exact path='/admin' element={<AdminHome/>} />
          <Route exact path="/admin/addStudent" element={<AdminAddStudent/>} />
          <Route exact path="/admin/addFaculty" element={<AdminAddFaculty/>} />
          <Route exact path="/admin/addSubject" element={<AdminAddSubject/>} />
          <Route exact path="/admin/addAdmin" element={<AdminAddAdmin/>} />
          <Route exact path="/admin/allFaculties" element={<AdminGetAllFaculty/>} />
          <Route exact path="/admin/allStudents" element={<AdminGetAllStudent/>} />
          <Route exact path="/admin/allSubject" element={<AdminGetAllSubject/>} />
          <Route exact path="/student/attendence" element={<StudentAttendencePage/>} />
          <Route exact path="/student/updatePassword" element={<StudentUpdatePassword/>} />
          <Route exact path="/student/testPerformance" element={<StudentTestPerformace/>} />
          <Route exact path="/faculty/updatePassword" element={<FacultyUpdatePassword/>} />
          <Route exact path="/faculty/uploadMarks" element={<FacultyUploadMarks/>} />
          <Route exact path="/faculty/updateProfile" element={<FacultyUpdateProfile/>} />
          <Route exact path="/student/getAllSubjects" element={<StudentSubjectList/>} />
          <Route exact path="/forgotPassword/:user" element={<ForgotPassword/>} />
          <Route exact path="/chat/:room" element={<Chat/>} />
          <Route exact path="/student/:registrationNumber" element={<RecieverUserDetails/>} />
          <Route exact path="/error" element={<Errorpage/>} />
          <Route exact path="/about" element={<AboutUs/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
