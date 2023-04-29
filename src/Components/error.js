import React from "react";
import { Link } from 'react-router-dom';


const Errorpage=()=>{
    return(
        <>
               
            <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
                <h1 className="display-4 mb-4">404 Not Found</h1>
                <p className="lead text-center mb-5">Sorry, the page you are looking for does not exist.</p>
                <Link to="/admin" className="btn btn-primary btn-lg">Back to homepage</Link>
            </div>
        </>
    );
}

export default Errorpage;