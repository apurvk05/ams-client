import React from 'react'
import { useSelector } from 'react-redux'

import { Box, Button, Typography } from '@mui/material';

import '../Style/facultyStudentLogin.css'
import FacultyLogin from './FacultyLoginForm'
import StudentLogin from './StudentLoginForm'


// imported for modal 

import Modal from '@mui/material/Modal';


// Imported till here



const FacultyStudentLoginPags = () => {
    const store = useSelector((state) => state)


    const [studentOpen, setStudentOpen] = React.useState(false);
    const handleStudentOpen = () => setStudentOpen(true);
    const handleStudentClose = () => setStudentOpen(false);

    const [facultyOpen, setFacultyOpen] = React.useState(false);
    const handleFacultyOpen = () => setFacultyOpen(true);
    const handleFacultyClose = () => setFacultyOpen(false);


    return (



        <div>
            <div>
                <div className="site-wrapper start">
                    <div className="site-wrapper-inner">
                        <div className="container">
                      
                            <div className="inner_cover">
                                <h1 className="cover-heading">Attendance Managment System</h1>
                                <br />
                                <p className="lead">

                                    <h3 className="cover-sub-heading">Login As</h3>
                                </p>
                                
                                <Button
                                    className="btn_role"
                                    variant="contained"
                                    color="warning"
                                    onClick={handleFacultyOpen}
                                    size='large'
                                >
                                    Teacher
                                </Button>&nbsp;&nbsp;

                                <Button
                                    className="btn_role"
                                    variant="contained"
                                    color="success"
                                    onClick={handleStudentOpen}
                                    size='large'
                                >
                                   Student
                                </Button>
                                


                                <Modal
                                    open={facultyOpen}
                                    onClose={handleFacultyClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    {/* <Box sx={style}> */}
                                    <FacultyLogin />
                                    {/* </Box> */}
                                </Modal>


                                <Modal
                                    open={studentOpen}
                                    onClose={handleStudentClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    {/* <Box sx={style}> */}
                                    <StudentLogin />
                                    {/* </Box> */}
                                </Modal>





                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

















        
     
        // <Box
        //     sx={{
        //         width: '100%', height: '100%',

        //     }}
        //     className="trail"
        //     textAlign={'center'}
            
        // >
        //     <Box  style={{
        //         position: 'absolute',
        //         top: '50%',
        //         left: '50%',
        //         transform: 'translate(-50%, -50%)',
        //     }}>
        //         <Typography variant='h2'>Welcome To AMS</Typography>

        //         <Button variant='contained' onClick={handleStudentOpen}>Login as Student</Button>
        //          <Button variant='contained' onClick={handleFacultyOpen}>Login as Faculty</Button>

        //         {/* FACULTY LOGIN MODAL */}

             


        //         {/* STUDENT LOGIN MODAL */}

                
        //     </Box>
        // </Box>

              

















    )
}

export default FacultyStudentLoginPags
