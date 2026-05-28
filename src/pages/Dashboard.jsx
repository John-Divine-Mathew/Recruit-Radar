import React, { useEffect, useState } from "react";

import API from "../services/api";

import "./Dashboard.css";

const Dashboard = () => {

  const [candidates, setCandidates] = useState([]);

  useEffect(() => {

    fetchCandidates();

  }, []);

  const fetchCandidates = async () => {

    try {

      const response = await API.get(
        "/candidates/all"
      );

      setCandidates(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="dashboard">

      <h1>
        Recruit Radar Dashboard
      </h1>

      <div className="candidate-grid">

        {candidates.map((candidate) => (

          <div
            className="candidate-card"
            key={candidate._id}
          >

            <h2>{candidate.name}</h2>

            <p>
              <strong>Role:</strong>
              {candidate.role}
            </p>

            <p>
              <strong>Experience:</strong>
              {candidate.experience} Years
            </p>

            <p>
              <strong>Location:</strong>
              {candidate.location}
            </p>

            <p>
              <strong>Education:</strong>
              {candidate.education}
            </p>

            <div className="skills">

              {candidate.skills.map(
                (skill, index) => (

                  <span key={index}>
                    {skill}
                  </span>

                )
              )}

            </div>

            <div className="score">

              Match Score:
              {candidate.matchScore}%

            </div>

          </div>

        ))}

      </div>

    </div>

  );

};

export default Dashboard;