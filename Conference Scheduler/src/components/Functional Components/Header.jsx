function Header() {
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
          <a className="nav-link active mr-8" aria-current="page" href="events">Events</a>
          <a className="nav-link active mr-8" aria-current="page" href="createEvent">Create Event</a>
          <a className="nav-link active mr-8" aria-current="page" href="/">Log Out</a>
          </div>
          </div>
      </nav>
    </>
  );
}

export default Header;
