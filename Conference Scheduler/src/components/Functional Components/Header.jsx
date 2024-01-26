import { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const usenavigate = useNavigate()
 

  useEffect(() => {
    let id = sessionStorage.getItem('username');
    if(id === '' || id === null){
        usenavigate('/');
    }
    
}, [])


const handleLogOut = () => {
  sessionStorage.clear()
  usenavigate('/');
}

  return (
    <>
      <nav className="navbar bg-body-tertiary card">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
          <img
            className="d-inline-block align-top ml-5 "
            src="/src/event.svg"
            width="50"
            height="30"
            alt=""
          />
          </a>
          
          <div className="navbar-nav flex-row" >
          
          <Link className="nav-link active mr-8" aria-current="page" to="events">Events</Link>
          <Link className="nav-link active mr-8" aria-current="page" to="yourEvent">Your Event</Link>
          <Link className="nav-link active mr-8" aria-current="page" to="createEvent">Create Event</Link>
          <Link className="nav-link active mr-8" aria-current="page" onClick={handleLogOut}>Log Out</Link>
          
          </div>
          </div>
      </nav>
    </>
  );
}

export default Header;
