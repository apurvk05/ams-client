import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { facultyLogin } from '../redux/action/facultyAction'
import { studentLogin } from '../redux/action/studentAction'
import classnames from 'classnames'

import '../Style/facultyStudentLogin.css'


export default function StudentLogin() {

    const store = useSelector((state) => state)
    const dispatch = useDispatch()
    const [studentRegNum, setStudentRegNum] = useState('')
    const [studentPassword, setStudentPassword] = useState('')
    const [errorsHelper, setErrorsHelper] = useState({})
    const [isStudentLoading, setIsStudentLoading] = useState(false)


    const history = useNavigate()

    useEffect(() => {
        if (store.student.isAuthenticated) {
            history('/home')
        }
    }, [store.student.isAuthenticated])

    useEffect(() => {
        if (store.errorHelper) {
            setErrorsHelper(store.errorHelper)
        }
    }, [store.errorHelper])

    const studentFormHandler = (e) => {
        e.preventDefault()
        let registrationNumber;
        let password;
        setIsStudentLoading(true)
        dispatch(studentLogin({ registrationNumber: studentRegNum, password: studentPassword }))
    }

    useEffect(() => {
        if (store.errorHelper ||
            store.student.isAuthenticated) {
            setIsStudentLoading(false)
        }
        else {
            setIsStudentLoading(false)
        }

    }, [store.errorHelper, store.student.isAuthenticated])

    return(

        
        <div className="row m-5">
            <div className="col-md-8 m-auto border" style={{ backgroundColor: "white", borderRadius: "1.2rem", padding: "1rem 1rem 0rem 1rem" }}>
                <div>
                    <h3 className="text-center">STUDENT</h3>
                    <form noValidate onSubmit={studentFormHandler}>
                        <div className="form-group">
                            <label htmlFor="studentId">Registration Number</label>
                            <input onChange={(e) => setStudentRegNum(e.target.value)} type="text" value={studentRegNum} className={classnames('form-control', {
                                'is-invalid': errorsHelper.registrationNumber
                            })}
                                id="studentId" />
                            {errorsHelper.registrationNumber && (
                                <div className="invalid-feedback">{errorsHelper.registrationNumber}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordId">Password</label>
                            <input onChange={(e) => setStudentPassword(e.target.value)} value={studentPassword} className={classnames("form-control", {
                                'is-invalid': errorsHelper.password
                            })}
                                type="password" id="passwordId" />
                            {errorsHelper.password && (
                                <div className="invalid-feedback">{errorsHelper.password}</div>
                            )}
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-1">
                                {
                                    isStudentLoading && <div class="spinner-border text-primary" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                }
                            </div>
                        </div>
                        {!isStudentLoading && <button type="submit" className="btn btn-info btn-block ">Login</button>}

                    </form>
                    <p className="text-center"><Link className="text-center" to="/forgotPassword/student">Forgot Password</Link></p>
                </div>
            </div>
        </div>
    )
}