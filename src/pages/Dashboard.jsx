function Dashboard() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (

    <div
      style={{
        padding: "40px",
        color: "white",
      }}
    >

      <h1>
        Welcome {user?.name}
      </h1>

      <p>
        Recruit Radar Dashboard
      </p>

    </div>

  );
}

export default Dashboard;