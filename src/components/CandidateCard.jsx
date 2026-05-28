function CandidateCard({ candidate }) {

  return (

    <div className="candidate-card">

      <h2 className="candidate-name">
        {candidate.name}
      </h2>

      <p>
        {candidate.role}
      </p>

      <p>
        {candidate.experience} Years Experience
      </p>

      <p>
        {candidate.location}
      </p>

      <div className="skill-box">

        {candidate.skills.map((skill, index) => (

          <div
            key={index}
            className="skill"
          >
            {skill}
          </div>

        ))}

      </div>

      <div className="match-score">
        Match Score:
        {" "}
        {candidate.matchScore}%
      </div>

    </div>
  );
}

export default CandidateCard;