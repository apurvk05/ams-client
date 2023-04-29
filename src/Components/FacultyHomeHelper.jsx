import React, {useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import {facultyLogout} from '../redux/action/facultyAction'
import '../Style/Home.css';

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


// imported by apurv

const drawerWidth = 240;


const Home = (props) => {
    const store = useSelector((store)=>store)
    const history = useNavigate()
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    useEffect(() => {

        if (store.faculty.faculty.faculty.name) {
            setName(store.faculty.faculty.faculty.name)
        }
    }, [store.faculty.faculty.faculty.name])
    const logoutHandler = () => {
        dispatch(facultyLogout())
        history('/')
    }


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
                <pre>  <i class="bi bi-person-bounding-box"> <Link className='link_text' to="/faculty">Profile</Link></i></pre>
                <pre>  <i class="bi bi-person-lines-fill"> <Link className='link_text' to="/faculty/updateProfile">Update Profile</Link></i></pre>
                <pre>  <i class="bi bi-check-circle-fill"> <Link className='link_text' to="/attendenceFaculty">Mark Attendance</Link></i></pre>
                <pre>  <i class="bi bi-upload"> <Link className='link_text' to="/faculty/uploadMarks">Upload Marks</Link></i></pre>
                <pre>  <i class="bi bi-box-arrow-in-down"> <Link className='link_text' to="/faculty/updatePassword">Update Password</Link></i></pre>
                <pre>  <i class="bi bi-amd"> <a className='link_text' href="mailto:ak65469@gmail.com">Contact Us</a></i></pre>


                
                <br /><br />
                <pre>         <button onClick={logoutHandler} type="button" className="btn btn-danger"><li>LOGOUT</li></button></pre>

            </List>


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;




    return (
       

              

        <>
        

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
                            AMS Teacher Dashboard
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


                                        {/* react carousel should appear */}





                </Box>
            </Box>











        </>



    )
}

export default Home
