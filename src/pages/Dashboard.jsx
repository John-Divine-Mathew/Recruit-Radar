import React,
{
useEffect,
useState
}
from "react";

import API
from "../services/api";

import Navbar
from "../components/Navbar";

import Sidebar
from "../components/Sidebar";

import "./Dashboard.css";

const Dashboard = () => {

const [candidates,
setCandidates] =
useState([]);

const [search,
setSearch] =
useState("");

useEffect(() => {

fetchCandidates();

}, []);

const fetchCandidates =
async () => {

try {

const response =
await API.get(
"/candidates/all"
);

setCandidates(
response.data
);

} catch (error) {

console.log(error);

}

};

const handleSearch =
async () => {

try {

const response =
await API.get(

`/candidates/search?search=${search}`

);

setCandidates(
response.data
);

} catch (error) {

console.log(error);

}

};

return (

<>

<Navbar />

<Sidebar />

<div className="dashboard">

<div className="top-section">

<div className="dashboard-title">

<h1>
Recruit Radar
</h1>

<p>
AI Powered Recruitment Platform
</p>

</div>

<div className="stats-grid">

<div className="stat-card">
<h2>
{candidates.length}
</h2>
<p>Total Candidates</p>
</div>

<div className="stat-card">
<h2>92%</h2>
<p>Match Accuracy</p>
</div>

<div className="stat-card">
<h2>120+</h2>
<p>Searches Today</p>
</div>

</div>

</div>

<div className="search-bar">

<input
type="text"
placeholder=
"Search by role, skills, location..."
value={search}
onChange={(e)=>
setSearch(e.target.value)}
/>

<button
onClick={handleSearch}
>
Search
</button>

</div>

<div className="candidate-grid">

{candidates.map((candidate)=>(

<div
className="candidate-card"
key={candidate._id}
>

<div className="candidate-header">

<div>

<h2>
{candidate.name}
</h2>

<p className="role">
{candidate.role}
</p>

</div>

<div className="match-score">

{candidate.matchScore}%

</div>

</div>

<div className="candidate-info">

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

</div>

<div className="skills">

{candidate.skills.map(
(skill,index)=>(

<span key={index}>
{skill}
</span>

))}

</div>

<div className="card-actions">

<button className="save-btn">
Save
</button>

<button className="view-btn">
View Profile
</button>

</div>

<textarea
placeholder=
"Recruiter Notes..."
className="notes"
/>

</div>

))}

</div>

</div>

</>

);

};

export default Dashboard;