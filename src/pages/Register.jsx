import React from "react";

import {
Link,
useNavigate
}
from "react-router-dom";

import "./Auth.css";

const Register = () => {

const navigate =
useNavigate();

const handleRegister =
() => {

navigate("/dashboard");

};

return (

<div className="auth-container">

<div className="auth-box">

<h1>
Recruit Radar
</h1>

<p>
Create Recruiter Account
</p>

<input
type="text"
placeholder="Company Name"
/>

<input
type="email"
placeholder="Email"
/>

<input
type="password"
placeholder="Password"
/>

<button
onClick={handleRegister}
>
Register
</button>

<div className="auth-link">

Already have account?

<Link to="/login">
Login
</Link>

</div>

</div>

</div>

);

};

export default Register;