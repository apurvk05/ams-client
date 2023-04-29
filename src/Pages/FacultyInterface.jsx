import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'


import FacultyHomeHelper from '../Components/FacultyHomeHelper'


const FacultyInterface = () => {
    const history = useNavigate()
    const store = useSelector((store) => store)
    return (
        <>
            {store.faculty.isAuthenticated ? <>
                <FacultyHomeHelper />

                <div className="container profile">
                    <div className="main-body">

                        <div className="row gutters-sm">
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex flex-column align-items-center text-center">
                                            <img
                                                src={store.faculty.faculty.faculty.avatar}
                                                alt="Admin"
                                                className="rounded-circle"
                                                width={150}
                                            />
                                            <div className="mt-3">
                                                <h4>{store.faculty.faculty.faculty.name}</h4>
                                                <p className="text-secondary mb-1">
                                                    {store.faculty.faculty.faculty.registrationNumber}
                                                </p>


                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-8">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Full Name</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {store.faculty.faculty.faculty.name}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Email</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">{store.faculty.faculty.faculty.email}</div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Phone</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {store.faculty.faculty.faculty.contactNumber ? store.faculty.faculty.faculty.contactNumber : "NA"}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Registration-Number</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {store.faculty.faculty.faculty.registrationNumber}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Joining year</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {store.faculty.faculty.faculty.joiningYear}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Department</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {store.faculty.faculty.faculty.department}
                                            </div>
                                        </div>
                                        <hr />

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



            </> : (history('/'))}
           
        </>


    )
}

export default FacultyInterface
