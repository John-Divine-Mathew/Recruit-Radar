import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import CandidateCard from "../components/CandidateCard";

import "../styles/dashboard.css";

function Dashboard() {

  const candidates = [

    {
      name: "Arun Kumar",
      role: "Frontend Developer",
      experience: 3,
      location: "Chennai",
      skills: [
        "React",
        "JavaScript",
        "CSS",
      ],
      matchScore: 92,
    },

    {
      name: "Priya Sharma",
      role: "Java Developer",
      experience: 4,
      location: "Bangalore",
      skills: [
        "Java",
        "Spring Boot",
        "MySQL",
      ],
      matchScore: 88,
    },

    {
      name: "Vignesh",
      role: "Mechanical Engineer",
      experience: 2,
      location: "Coimbatore",
      skills: [
        "AutoCAD",
        "SolidWorks",
      ],
      matchScore: 81,
    },

  ];

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-main">

        <Navbar />

        <div className="search-box">

          <input
            type="text"
            placeholder="Search candidates..."
            className="search-input"
          />

          <button className="search-button">
            Search
          </button>

        </div>

        <div className="candidate-grid">

          {candidates.map((candidate, index) => (

            <CandidateCard
              key={index}
              candidate={candidate}
            />

          ))}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;