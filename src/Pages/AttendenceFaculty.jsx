import React, { useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classnames from 'classnames'
import {fetchStudents,markAttendence, markDatewise } from '../redux/action/facultyAction'
import FacultyHomeHelper from '../Components/FacultyHomeHelper'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


const AttendenceFaculty = () => {
    const store = useSelector((store) => store)
    const history = useNavigate()
    const dispatch = useDispatch()
    const [department, setDepartment] = useState("")
    const [year, setYear] = useState("")
    const [section, setSection] = useState("")
    const [subjectCode, setSubjectCode] = useState("")
    const [checkedValue, setCheckedValue] = useState([])
    const [error, setError] = useState({})
    const [flag, setFlag] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [isLoading2, setIsLoading2] = useState(false)
    const [attdate, setDate] = useState("") 


    const handleInputChange = (e) => {
        const tempCheck = checkedValue
        let index
        if (e.target.checked)
        {
            tempCheck.push(e.target.value)
        }
        else {
            index = tempCheck.indexOf(e.target.value)
            tempCheck.splice(index,1)
        }
        setCheckedValue(tempCheck)
    }

    
    
    useEffect(() => {
        if (store.error) {
            setError(store.error)
        }
    }, [store.error])

    const formHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        dispatch(fetchStudents(department, year, section))
       
    }

    useEffect(() => {
        if (store.error || !store.faculty.fetchedStudentsHelper) {
            setIsLoading(false)
        }
        
    }, [store.error, store.faculty.fetchedStudentsHelper])
 

    const secondFormHandler = (e) => {
        e.preventDefault()
        setIsLoading2(true)
        dispatch(markAttendence(checkedValue, subjectCode, department, year, section))
        dispatch(markDatewise(checkedValue, subjectCode, department, year, section, attdate))
        setCheckedValue([])
        
    }

    useEffect(() => {
        if (store.faculty.fetchedStudentsHelper) {
            setIsLoading2(false)
        }
        
    },[store.faculty.fetchedStudentsHelper])
    
    return (
        <div>
            {store.faculty.isAuthenticated ? <>
                <FacultyHomeHelper />
                <br/>
                {store.faculty.fetchedStudentsHelper && <div className="row justify-content-center mt-4 ">
                    <div className="col-md-4">
                        <form noValidate onSubmit={formHandler}>
                            <div className="form-group">
                                <label htmlFor="branchId">Department</label>
                                <select onChange={(e) => setDepartment(e.target.value)} className={classnames("form-control",
                                    {
                                        'is-invalid': error.department

                                    })} id="branchId">
                                    <option>Select</option>
                                    <option value={store.faculty.faculty.faculty.department}>{store.faculty.faculty.faculty.department}</option>
                                </select>
                                {error.department && (<div classNameName="invalid-feedback">{error.department}</div>)}
                            </div>
                            <div className="form-group">
                                <label htmlFor="yearId">Year</label>
                                <select onChange={(e) => setYear(e.target.value)} className={classnames("form-control",
                                    {
                                        'is-invalid': error.year

                                    })} id="yearId">
                                    <option>Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>

                                {error.year && (<div classNameName="invalid-feedback">{error.year}</div>)}
                            </div>
                           
                            <div className="form-group">
                                <label htmlFor="sectionId">Section</label>
                                <select onChange={(e) => setSection(e.target.value)} className={classnames("form-control",
                                    {
                                        'is-invalid': error.section

                                    })} id="sectionId">
                                    <option>Select</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                </select>
                                {error.section && (<div classNameName="invalid-feedback">{error.section}</div>)}
                            </div>
                            
                            <div class="row justify-content-center">
                                <div class="col-md-1">
                                    {
                                        isLoading && <div class="spinner" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    }
                                </div>
                            </div>
                            {!isLoading && <button type="submit" className="btn btn-info  ">Search</button>}
                        </form>
                    </div>
                </div>}


                {!store.faculty.fetchedStudentsHelper && <div className="row  justify-content-center mt-4">
                    <div className=" container col-md-8 col-lg-8 Department_List">
                        <form onSubmit={secondFormHandler}>
                            <div className="form-group">
                                <label htmlFor="subjectId">Subject Code</label>
                                <select required onChange={(e) => setSubjectCode(e.target.value)} className="form-control" id="subjectId">
                                    <option>Select</option>
                                    {
                                        store.faculty.allSubjectCodeList.map(subjectCodeName =>
                                            <option>{subjectCodeName}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subjectId">Subject Code</label>
                                <input type='date' placeholder='Date' id='attdate' onChange={(e) => setDate(e.target.value)} />
                            </div>

                            <div className="col-md-8 col-lg-9">
                                <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <td><div className="form-check">
                                            {/* <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" /> */}
                                        </div></td>
                                        <th scope="col">Status</th>
                                        <th scope="col">Roll Number</th>
                                        <th scope="col">Student Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        store.faculty.fetchedStudents.map((obj, index) =>
                                            <tr>
                                                <td><div className="form-check">
                                                    
                                                    {/* <input type="button" value={obj._id} onChange={handleInputChange} id="defaultCheck1" className='btn btn-success'>Present</input> */}
                                                    {/* <input type="button" className='btn btn-danger'>Absent</input> */}
                                                </div></td>
                                                <pre>      <input className="form-check-input col-span-1 border-2 w-16 h-4 mt-3 px-2  " type="checkbox"  value={obj._id} onChange={handleInputChange} id="defaultCheck1" /></pre>
                                                <td key={index}>{obj.collegeRoll}</td>
                                                <td>{obj.name}</td>
                                                <br />
                                                {/* <pre>     <input className="form-check-input  " type="checkbox"  value={obj._id} onChange={handleInputChange} id="defaultCheck1" /></pre> */}
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-md-1">
                                    {
                                        isLoading2 && <div class="spinner" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    }
                                </div>
                            </div>
                            {!isLoading2 && <button type="submit" className="btn btn-info ml-1  ">Submit</button>}&nbsp;
                            <button type='reset' onClick={()=> window.location.reload()} className="btn btn-info  ">Back</button>
                        </form>
                    </div>
                </div>
                }</> : (history('/'))}
            
        </div>
    )
}

export default AttendenceFaculty
