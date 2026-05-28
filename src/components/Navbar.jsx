function Navbar() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (

    <div className="navbar">

      <div className="nav-title">
        ATS Recruitment Dashboard
      </div>

      <div className="user-box">
        {user?.name}
      </div>

    </div>
  );
}

export default Navbar;