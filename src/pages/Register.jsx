import React from "react";

import "./Auth.css";

const Register = () => {

return (

<div className="auth-container">

<div className="auth-box">

<h1>Recruit Radar</h1>

<h2>HR Register</h2>

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

<button>
Register
</button>

</div>

</div>

);

};

export default Register;