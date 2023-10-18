import { slide as Menu } from 'react-burger-menu'
import { Navbar, Nav } from 'react-bootstrap';

import { Link, useNavigate} from 'react-router-dom'
import React from 'react'

const SideNav = () => {
  const navigate = useNavigate();
  
//   const handleLogout = () => {
//     localStorage.removeItem("userId");
//     localStorage.removeItem("firstName");
//     navigate("/");
//   };

    return (

      <Menu  width={'150px'} className="sideNavBar">
        <Link to={'/Dashboard'} className={"sideNavLinks"}> Dashboard</Link>
        <Link to={'/RSVP'} className={"sideNavLinks"}> RSVP</Link>
        <Link to={'/Story'} className={"sideNavLinks"}> Story</Link>
        <Link to={"/Location"} className={"sideNavLinks"}> Location</Link>

        {/* <button className='signOutBtn' onClick={handleLogout}>Logout</button> */}
      </Menu>
    );
  
}
export default SideNav