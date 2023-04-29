import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { adminLogout } from '../redux/action/adminAction'
import "../Style/Home.css"

//updated imports are here

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';


//updated declartion here
const drawerWidth = 240;

const Home = (props) => {
    const store = useSelector(store => store)
    const [name, setName] = useState("")
    useEffect(() => {

        if (store.admin.admin.name) {
            setName(store.admin.admin.name)
        }

     
    }, [store.admin.admin.name])
    const history = useNavigate()
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(adminLogout())
        history('/adminLogin')
    }

    //updated code here
    const students = useSelector((state) => state.admin.allStudent);
    const faculties = useSelector((state) => state.admin.allFaculty);
    const subject = useSelector((state) => state.admin.allSubject);
    const departments = useSelector((state) => state.admin.allDepartment);
    const admins = useSelector((state) => state.admin.allAdmins);


    // dashbaord important imports here


    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
           
            <List>
                <pre>  <i class="bi bi-person-vcard-fill" ><Link className='link_text' to="/admin"> Profile</Link></i></pre>
                <pre>  <i class="bi bi-person-add"><Link className='link_text' to="/admin/addFaculty"> Add Teachers</Link></i></pre>
                <pre>  <i class="bi bi-person-workspace"><Link className='link_text' to="/admin/addStudent"> Add Students</Link></i></pre>
                <pre>  <i class="bi bi-journal-check"><Link className='link_text' to="/admin/addSubject"> Add Subjects</Link></i></pre>
                <pre>  <i class="bi bi-person-plus-fill"><Link className='link_text' to="/admin/addAdmin"> Add Admin</Link></i></pre>
                <pre>  <i class="bi bi-clipboard-data"><Link className='link_text' to="/admin/allFaculties"> Teachers Data</Link></i></pre>
                <pre>  <i class="bi bi-graph-up"><Link className='link_text' to="/admin/allStudents"> Students Data</Link></i></pre>
                <pre>  <i class="bi bi-database-fill-lock"><Link className='link_text' to="/admin/allSubject"> Subjects Data</Link></i></pre>
                <pre>  <i class="bi bi-person-plus-fill"><Link className='link_text' to="/error"> Update Admin</Link></i></pre>
                <pre>  <i class="bi bi-person-plus-fill"><Link className='link_text' to="/error"> Update Teachers</Link></i></pre>
                <pre>  <i class="bi bi-person-plus-fill"><Link className='link_text' to="/error"> Update Students</Link></i></pre>
                <pre>  <i class="bi bi-person-plus-fill"><Link className='link_text' to="/error"> Update Subjects</Link></i></pre>
                <pre>  <i class="bi bi-person-plus-fill"><Link className='link_text' to="/about"> About Us</Link></i></pre>

                <br/>
                <pre>         <button onClick={logoutHandler} type="button" className="btn btn-danger"><li>LOGOUT</li></button></pre>

            </List>
           

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;


    return (

        <>
            {/* <>
                <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3 topbar">
                    <div className="flex-row d-flex">
                        <button
                            type="button"
                            className="navbar-toggler mr-2 "
                            data-toggle="offcanvas"
                            title="Toggle responsive left sidebar"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <a
                            className="navbar-brand"
                            href="#"
                            title="Free Bootstrap 4 Admin Template"
                        >
                            AMS - Admin Dashboard
                        </a>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsingNavbar"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-collapse collapse" id="collapsingNavbar">
                        <ul className="navbar-nav">
                          
                        </ul>
                        <ul className="navbar-nav ml-auto">
                       
                            <li className="nav-item">
                                
                                <button onClick={logoutHandler} type="button" className="btn btn-primary"><li>LOGOUT</li></button>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container-fluid" id="main">
                    <div className="row row-offcanvas row-offcanvas-left">
                        <div
                            className="col-md-3 col-lg-2 sidebar-offcanvas bg-dark pl-0 side-nav "
                            id="sidebar"
                            role="navigation"
                        >
                            <ul className="nav flex-column sticky-top pl-0 pt-5 mt-3">
                                <li className="nav-item">
                                  
                                </li>
                                <li className="nav-item">
                                    <pre>   <i class="bi bi-person-vcard-fill" ><Link to="/admin"> Profile</Link></i></pre>
                                    
                                </li>
                                
                                <li className="nav-item">
                                    <pre>   <i class="bi bi-person-add"><Link to="/admin/addFaculty">  Add Teachers</Link></i></pre>
                                    
                                </li>
                              
                                <li className="nav-item">
                                    <pre>   <i class="bi bi-person-workspace"><Link to="/admin/addStudent"> Add Students</Link></i></pre>
                                    
                                </li>
                                
                                <li className="nav-item">
                                    <pre>   <i class="bi bi-journal-check"><Link to="/admin/addSubject"> Add Subjects</Link></i></pre>
                                </li>
                                
                                <li className="nav-item">
                                    <pre>   <i class="bi bi-person-plus-fill"><Link to="/admin/addAdmin"> Add Admin</Link></i></pre>
                                </li>
                                
                                <li className="nav-item">
                                    <pre>   <i class="bi bi-clipboard-data"><Link to="/admin/allFaculties"> Teachers Data</Link></i></pre>
                                </li>
                                
                                <li className="nav-item">
                                    <pre>   <i class="bi bi-graph-up"><Link to="/admin/allStudents"> Students Data</Link></i></pre>
                                </li>
                                
                                <li className="nav-item">
                                    <pre>   <i class="bi bi-database-fill-lock"><Link to="/admin/allSubject"> Subjects Data</Link></i></pre>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="col main pt-5 mt-3 dash">
                            <h2 className="display-4 d-none d-sm-block"></h2>
                            <p className="lead d-none d-sm-block">
                                <h2>Welcome Back  {name.toUpperCase()}</h2>
                            </p>
                            <br />

                            <div className="row mb-3">
                                <div className="col-xl-3 col-sm-6 py-2" >
                                    <div className="card bg-success text-white h-100">
                                        <div className="card-body bg-success">
                                            <div className="rotate">
                                                <i className="fa fa-user fa-4x" />
                                            </div>
                                            <h6 className="text-uppercase">Teachers</h6>
                                            <h1 className="display-4">{faculties.length}</h1>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-xl-3 col-sm-6 py-2">
                                    <div className="card text-white bg-danger h-100">
                                        <div className="card-body bg-danger">
                                            <div className="rotate">
                                                <i className="fa fa-list fa-4x" />
                                            </div>
                                            <h6 className="text-uppercase">Students</h6>
                                            <h1 className="display-4">{students?.length}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 py-2">
                                    <div className="card text-white bg-info h-100">
                                        <div className="card-body bg-info">
                                            <div className="rotate">
                                                <i className="fa fa-twitter fa-4x" />
                                            </div>
                                            <h6 className="text-uppercase">Subjects</h6>
                                            <h1 className="display-4">{subject?.length}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6 py-2">
                                    <div className="card text-white bg-warning h-100">
                                        <div className="card-body">
                                            <div className="rotate">
                                                <i className="fa fa-share fa-4x" />
                                            </div>
                                            <h6 className="text-uppercase">Admin-Name</h6>
                                            <h1 className="display-4">{name.toUpperCase()}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr />

                        </div>

                    </div>
                </div>

               


            </> */}




            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` }, backgroundColor: '#2E3840', color: '#fff'
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                            
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            AMS ADMIN
                        </Typography>
                        
                        
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#0B2447', color: '#fff' }
                            
                        }}
                        
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#0B2447', color: '#fff' }
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <h2>Welcome :  {name.toUpperCase()}</h2>
                    <Divider />


                    <div className="row mb-3">
                        <div className="col-xl-3 col-sm-6 py-2" >
                            <div className="card bg-success text-white h-100">
                                <div className="card-body bg-success">
                                    <div className="rotate">
                                        <i className="fa fa-user fa-4x" />
                                    </div>
                                    <h6 className="text-uppercase">Teachers</h6>
                                    <h1 className="display-4">{faculties.length}</h1>
                                </div>
                            </div>

                        </div>
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card text-white bg-danger h-100">
                                <div className="card-body bg-danger">
                                    <div className="rotate">
                                        <i className="fa fa-list fa-4x" />
                                    </div>
                                    <h6 className="text-uppercase">Students</h6>
                                    <h1 className="display-4">{students?.length}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card text-white bg-info h-100">
                                <div className="card-body bg-info">
                                    <div className="rotate">
                                        <i className="fa fa-twitter fa-4x" />
                                    </div>
                                    <h6 className="text-uppercase">Subjects</h6>
                                    <h1 className="display-4">{subject?.length}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card text-white bg-warning h-100">
                                <div className="card-body">
                                    <div className="rotate">
                                        <i className="fa fa-share fa-4x" />
                                    </div>
                                    <h6 className="text-uppercase">Admin-Name</h6>
                                    <h1 className="display-4">{name.toUpperCase()}</h1>
                                </div>
                            </div>
                        </div>
                    </div>


                    

                    
                </Box>
            </Box>















                        
        </>
    )
}

export default Home
