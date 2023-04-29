import React from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import Home from './StudentHome'

const StudentsearchStudent = () => {
    const store = useSelector((store) => store)
    const history = useNavigate()
    return (
        <div>
            {store.student.isAuthenticated ? <><Home /></> : (history('/'))}
        </div>
    )
}

export default StudentsearchStudent
