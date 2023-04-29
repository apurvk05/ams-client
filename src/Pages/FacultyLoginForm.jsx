import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { facultyLogin } from '../redux/action/facultyAction'
import classnames from 'classnames'

import '../Style/facultyStudentLogin.css'

export default function FacultyLogin() {


    const store = useSelector((state) => state)
    const dispatch = useDispatch()
    const [facultyRegNum, setFacultyRegNum] = useState('')
    const [facultyPassword, setFacultyPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [isFacultyLoading, setIsFacultyLoading] = useState(false)


    const history = useNavigate()

    useEffect(() => {
        if (store.faculty.isAuthenticated) {
            history('/faculty')
        }
    }, [store.faculty.isAuthenticated])

    useEffect(() => {
        if (store.error) {
            setErrors(store.error)
        }
    }, [store.error])


    const facultyFormHandler = (e) => {
        e.preventDefault()
        let registrationNumber;
        let password;
        setIsFacultyLoading(true)
        dispatch(facultyLogin({ registrationNumber: facultyRegNum, password: facultyPassword }))
    }

    useEffect(() => {
        if (store.error || store.faculty.isAuthenticated) {
            setIsFacultyLoading(false)
        }
        else {
            setIsFacultyLoading(true)
        }
    }, [store.error, store.faculty.isAuthenticated])

    return (
        < div className="row m-5" >
            <div className="col-md-8 m-auto border" style={{ backgroundColor: "white", borderRadius: "1.2rem", padding: "1rem 1rem 0rem 1rem" }}>
                <div>
                    <h3 className="text-center ">TEACHER</h3>


                    <form noValidate onSubmit={facultyFormHandler}>
                        <div className="form-group">
                            <label htmlFor="facRegId">Registration Number</label>
                            <input onChange={(e) => setFacultyRegNum(e.target.value)} type="text" value={facultyRegNum} className={classnames('form-control', {
                                'is-invalid': errors.registrationNumber
                            })}
                                id="facRegId" />
                            {errors.registrationNumber && (
                                <div className="invalid-feedback">{errors.registrationNumber}</div>
                            )}
                        </div>

                        {/* Student login form */}

                        <div className="form-group">
                            <label htmlFor="passwordFacId">Password</label>
                            <input onChange={(e) => setFacultyPassword(e.target.value)} value={facultyPassword} className={classnames("form-control", {
                                'is-invalid': errors.password
                            })}
                                type="password" id="passwordFacId" />
                            {errors.password && (
                                <div className="invalid-feedback">{errors.password}</div>
                            )}
                        </div>

                        <div class="row justify-content-center">
                            <div class="col-md-1">
                                {
                                    isFacultyLoading && <div class="spinner-border text-primary" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                }
                            </div>
                        </div>

                        {!isFacultyLoading && <button type="submit" className="btn btn-info btn-block">Login</button>}
                    </form>


                    <p className="text-center mt-2 "><Link className="text-center" to="/forgotPassword/faculty">Forgot Password</Link></p>
                </div>
            </div>
        </div >
    );
}