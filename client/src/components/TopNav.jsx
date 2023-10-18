import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (

    <header className="navBar">
    <nav>
      <ul className="navList">
        <li><a href="/TheEvent">The Event</a></li>
        <li><a href="/GettingThere">Getting There</a></li>
        <li><a href="/WhereToStay">Where To Stay</a></li>
        <li><a href="/RSVP">RSVP</a></li>
        {/* <li><a href="/Story">Story</a></li> */}

      </ul>
    </nav>
  </header>

//     <header>
//     <Navbar bg="light">
//       <Nav className="ml-auto">
//         <Nav.Link as={Link} to="/Dashboard">Dashboard</Nav.Link>
//         <Nav.Link as={Link} to="/RSVP">RSVP</Nav.Link>
//         <Nav.Link as={Link} to="/Story">Story</Nav.Link>
//         <Nav.Link as={Link} to="/Location">Location</Nav.Link>
//       </Nav>
//     </Navbar>
//   </header>
  );
};

export default TopNav;