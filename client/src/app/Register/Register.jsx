import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./Register.sass";

const Register = () => {
  return (
    <div className="register">
      <h1>Register</h1>
      <Link to="/">
        <Button variant="contained" color="primary">
          To Dashboard
        </Button>
      </Link>
      <Link to="/login">
        <Button variant="contained" color="secondary">
          To Login
        </Button>
      </Link>
    </div>
  );
};

export default Register;
