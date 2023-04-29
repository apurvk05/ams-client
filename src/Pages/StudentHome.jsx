import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import HomeHelper from '../Components/HomeHelper'
import { Box } from '@mui/material'
import ProfileUi from 'react-profile-card';

const Home = () => {
    const store = useSelector((store) => store)
    const history = useNavigate()

    return (
        <div>
            {store.student.isAuthenticated ? <>
                <HomeHelper />
                <div className="container" align="center">
                            <ProfileUi
                            imgUrl={store.student.student.student.avatar}
                            name= {store.student.student.student.name}
                            collegeRoll={store.student.student.student.collegeRoll}
                            gender={store.student.student.student.gender}
                            dob={store.student.student.student.dob} 
                            email={store.student.student.student.email}
                            fatherName={store.student.student.student.fatherName}
                            mobile={store.student.student.student.studentMobileNumber}
                            >
                            </ProfileUi>

                </div>

            </> : (history('/'))}
        </div>

    )
}

export default Home
