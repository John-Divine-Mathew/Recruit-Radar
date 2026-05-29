import React from "react";

import "./Auth.css";

const Login = () => {

return (

<div className="auth-container">

<div className="auth-box">

<h1>Recruit Radar</h1>

<h2>HR Login</h2>

<input
type="email"
placeholder="Email"
/>

<input
type="password"
placeholder="Password"
/>

<button>
Login
</button>

</div>

</div>

);

};

export default Login;