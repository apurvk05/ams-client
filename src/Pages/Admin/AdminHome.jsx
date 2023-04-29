import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import AdminHomeHelper from '../../Components/AdminHomeHelper'
import '../../Style/profile.css'
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


const AdminHome = () => {
    const store = useSelector((store) => store)

    const history = useNavigate()
    return (
        <div>
           
            {store.admin.isAuthenticated ? <>
                <AdminHomeHelper />
                <div className="container">
                    <div className="main-body">

                        <div className="row gutters-sm">
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex flex-column align-items-center text-center">
                                            <img
                                                src=""
                                                alt="Admin"
                                                className="rounded-circle"
                                                width={150}
                                            />
                                            <div className="mt-3">
                                                <h4>{store.admin.admin.name}</h4>
                                                <p className="text-secondary mb-1">
                                                    {store.admin.admin.registrationNumber}
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
                                                {store.admin.admin.name}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Email</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">{store.admin.admin.email}</div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Phone</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {store.admin.admin.contactNumber ? store.admin.admin.contactNumber : "NA"}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Registration-Number</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {store.admin.admin.registrationNumber}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Joining year</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {store.admin.admin.joiningYear}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Department</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {store.admin.admin.department}
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
                
        </div>
    )
}

export default AdminHome
