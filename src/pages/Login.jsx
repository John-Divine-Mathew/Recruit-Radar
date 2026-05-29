import React from "react";

import {
Link,
useNavigate
}
from "react-router-dom";

import "./Auth.css";

const Login = () => {

const navigate =
useNavigate();

const handleLogin = () => {

navigate("/dashboard");

};

return (

<div className="auth-container">

<div className="auth-box">

<h1>
Recruit Radar
</h1>

<p>
AI Recruitment Platform
</p>

<input
type="email"
placeholder="Email"
/>

<input
type="password"
placeholder="Password"
/>

<button
onClick={handleLogin}
>
Login
</button>

<div className="auth-link">

Don't have account?

<Link to="/register">
Register
</Link>

</div>

</div>

</div>

);

};

export default Login;