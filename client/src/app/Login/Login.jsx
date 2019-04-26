import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./Login.sass";

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <Link to="/">
        <Button variant="contained" color="primary">
          To Dashboard
        </Button>
      </Link>
      <Link to="/register">
        <Button variant="contained" color="secondary">
          To Register
        </Button>
      </Link>
    </div>
  );
};

export default Login;
