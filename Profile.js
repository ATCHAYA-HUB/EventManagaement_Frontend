import * as React from 'react';
import './profileme.css';
import './Home.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FaceBookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import CalanderIcon from '@mui/icons-material/CalendarMonth'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ProfileIcon from '@mui/icons-material/Person';
import LogOutIcon from '@mui/icons-material/Logout';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import {useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUser } from './Redux/userSlice';
import { selectMail } from './Redux/userSlice';
import Cookies from "js-cookie";
const drawerWidth = 220;
export default function Profile() {
  const user=useSelector(selectUser);
  const mail=useSelector(selectMail);
  
  return (
    <>
    <div className='prohome'>
<div className='probg'>
<div className='imgpro'></div>
<div className='imgbcont'><p>No matter how short the communication, any message meant to greet, engag, or connect with a new user is a welcome message.</p></div>
<p className='protitle'>My Profile</p>
<p className='redux'>Name:&#160;{Cookies.get("user")}<br/>Mail ID: {Cookies.get("mail")}</p><br/>
<div className='probox'>
<p>Find or Create Best Events on iDoEventZ!</p><br/>
<p ><Link style={{textDecoration:"none"}} to='/ticket'>View Your Tickets &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link> <Link style={{textDecoration:"none"}} to='/Updateevent'>Update Your Event</Link></p>
<br/><Link style={{textDecoration:"none"}} to='/Deleteevent'>View Your Events</Link><Link style={{textDecoration:"none",marginLeft:"50px"}} to='/Deleteevent'>Delete Your Event</Link><br/>
<Link to="/"><Button variant='contained' style={{backgroundColor:"black",color:"#ffffff",marginTop:"40px",marginLeft:"-100px",height:"40px"}} className='probtn'>Log Out</Button></Link>
<Link to="/Deleteaccount"><Button variant='contained' style={{backgroundColor:"red",color:"#ffffff",marginTop:"40px",marginLeft:"40px",width:"200px",height:"40px"}} className='probtn'>Delete Account</Button></Link>
</div>
<div className='feed'></div>
</div>
    </div>
    <Box sx={{ flexGrow: 1 }} >
        <Box sx={{ display: 'flex'  }} >
      <CssBaseline />
      <Drawer 
        variant="permanent"
        sx={{
            width: 0,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
        >
        <Toolbar />
        <Box >
          <List >
            {['PROFILE'].map((text, index) => (
                <ListItem key={text} disablePadding>
                <ListItemButton  component={Link} to="/Profile">
                  <ListItemIcon>
                    {index % 2 === 0 ? <ProfileIcon style={{color:"#0f9597"}}/> : <CalanderIcon style={{color:"#0f9597"}}/>}
                  </ListItemIcon>
                  <ListItemText sx={{ color:"#0f9597" }}  primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
            {['CALENDAR'].map((text, index) => (
                <ListItem key={text} disablePadding>
                <ListItemButton component={Link} to="/Calendar" >
                  <ListItemIcon>
                    {index % 2 === 1 ? <ProfileIcon style={{color:"#0f9597"}}/> : <CalanderIcon style={{color:"#0f9597"}}/>}
                  </ListItemIcon>
                  <ListItemText sx={{ color:"#0f9597" }}  primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
            {['CHAT BOX'].map((text, index) => (
                <ListItem key={text} disablePadding>
                <ListItemButton component={Link} to="/Chat">
                  <ListItemIcon>
                    {index % 2 === 0 ? <HistoryEduIcon style={{color:"#0f9597"}} /> : <LogOutIcon style={{color:"#0f9597"}} />}
                  </ListItemIcon>
                  <ListItemText sx={{ color:"#0f9597" }}  primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
            {[ 'SIGN OUT'].map((text, index) => (
                <ListItem key={text} disablePadding>
                <ListItemButton component={Link} to="/">
                  <ListItemIcon>
                    {index % 2 === 1 ? <HistoryEduIcon style={{color:"#0f9597"}} /> : <LogOutIcon style={{color:"#0f9597"}} />}
                  </ListItemIcon>
                  <ListItemText sx={{ color:"#0f9597" }}  primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
            </Box>
      </Drawer>
      <AppBar  position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}style={{backgroundColor:"#0f9597"}}>
        <Toolbar>
          <Typography
            variant="h5"
            noWrapcomponent="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>iDo EventZ
          </Typography>
          <Button style={{position:"relative",right:"100px"}} color="inherit" component={Link} to="/Home"  sx={{
        "&.Mui-disabled": {background: "#eaeaea",color: "#0f9597" }}}>Home</Button>
          <Button style={{position:"relative",right:"71px"}}color="inherit" component={Link} to="/Myevent" sx={{
        "&.Mui-disabled": {background: "#eaeaea",color: "#0f9597" }}}>My Event</Button>
          <Button style={{position:"relative",right:"45px"}} color="inherit"  disabled component={Link} to="/Profile" sx={{
        "&.Mui-disabled": {background: "#eaeaea",color: "#0f9597" }}}>Profile</Button>
          <Button style={{position:"relative",right:"19px"}} color="inherit" component={Link} to="/" sx={{
        "&.Mui-disabled": {background: "#eaeaea",color: "#0f9597" }}}>Log Out</Button>
        </Toolbar>
      </AppBar>
      </Box>
    </Box>
    
    <Box position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} >
      <CssBaseline />
      
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation  style={{backgroundColor:"#0f9597"}}>
    <Link style={{textDecoration: 'none'}} to="/Terms"> <p className='term' >Teams and conditions</p></Link> 
    <Link style={{textDecoration: 'none'}}to="/Privacy"><p className='privacy'>Privacy Policy</p></Link>
    <Link style={{textDecoration: 'none'}} to="/Fag"> <p className='faq'>FAQ</p></Link>
    <Link style={{textDecoration: 'none'}} to="/Contact"> <p className='cont'>Contact Us</p></Link>
          <BottomNavigationAction sx={{ position: 'relative', bottom: 0, left: 540, right: 0 }}label="History" icon={<InstagramIcon style={{ color: "white" }} />} component={Link} to="https://www.instagram.com/" />
          <BottomNavigationAction label="History" sx={{ position: 'relative', bottom: 0, left: 400, right: 0 }}icon={<FaceBookIcon style={{ color: "white" }} />} component={Link} to="https://www.facebook.com/" />
          <BottomNavigationAction label="History" sx={{ position: 'relative', bottom: 0, left: 260, right: 0 }}icon={<TwitterIcon style={{ color: "white" }}/>} component={Link} to="https://www.twitter.com/" />
          <BottomNavigationAction label="History"sx={{ position: 'relative', bottom: 0, left: 120, right: 0 }} icon={<LinkedInIcon style={{ color: "white" }}/>} component={Link} to="https://www.linkedin.com/" />
          <BottomNavigationAction label="History"sx={{ position: 'relative', bottom: 0, right: 20 }} icon={<GitHubIcon style={{ color: "white" }}/>} component={Link} to="https://www.github.com/" />
        </BottomNavigation>
       
      </Paper>
    </Box>
    </>
  );
}
