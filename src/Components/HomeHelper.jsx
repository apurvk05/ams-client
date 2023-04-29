import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { studentLogout, newerChats, previousChats} from '../redux/action/studentAction'


//update are imported here
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
import ProgressCircle from './ProgressCircle2';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

import '../Style/Home.css'
import ProgressCircle2 from './ProgressCircle2';

//updated declartion here
const drawerWidth = 270;



const Home = (props) => {
    const history = useNavigate()
    const store = useSelector((store) => store)
    const [name, setName] = useState("")
    useEffect(() => {
        if (store.student.student.student.name) {
            setName(store.student.student.student.name)
        }
    }, [store.student.student.student.name])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(newerChats(store.student.student.student.name))
        dispatch(previousChats(store.student.student.student.name))
    }, [store.student.newerChats.length])
    const logoutHandler = () => {
        dispatch(studentLogout())
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
                <pre>  <i class="bi bi-person-vcard-fill" ><Link className='link_text' to="/home"> Profile</Link></i></pre>
                <pre>  <i class="bi bi-person-add"><Link className='link_text' to="/student/updateProfile"> Update profile</Link></i></pre>
                <pre>  <i class="bi bi-person-workspace"><Link className='link_text' to="/student/testPerformance"> Test Performance</Link></i></pre>
                <pre>  <i class="bi bi-journal-check"><Link className='link_text' to="/student/attendence"> Attendance</Link></i></pre>
                <pre>  <i class="bi bi-person-plus-fill"><Link className='link_text' to="/student/getAllSubjects"> Student Subject List</Link></i></pre>
                <pre>  <i class="bi bi-clipboard-data"><Link className='link_text' to="/studentDetails"> Students</Link></i></pre>
                <pre>  <i class="bi bi-graph-up"><Link className='link_text' to="/studentDetails"> New Conversation ({store.student.newerChats.length})</Link></i></pre>
                <pre>  <i class="bi bi-database-fill-lock"><Link className='link_text' to="/student/updatePassword"> Update Password</Link></i></pre>
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
                            AMS Student Dashboard
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
                            display: { xs: 'block', sm: 'none', md: 'block' },
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

                        {/* CODE TO BE WRITTEN HERE */}

<br/>
                    
                </Box>
            </Box>


        </>
    )
}

export default Home
