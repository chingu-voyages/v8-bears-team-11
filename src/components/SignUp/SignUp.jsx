import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/app";

import {
  Card,
  FormControl,
  InputLabel,
  Input,
  Button,
  CardHeader
} from "@material-ui/core";

import "./SignUp.scss";
import { db } from "../../index";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [authError, setAuthError] = useState(null);

  const handleSubmit = ev => {
    ev.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(data => {
        setAuthError(null);
        console.log(data);
        data.user
          .updateProfile({
            displayName: firstName + " " + lastName,
            photoURL: null
          })
          .then(() => {
            const myNewUser = {
              uid: data.user.uid,
              email: data.user.email,
              displayName: data.user.displayName,
              photoURL: data.user.photoURL,
              password: password,
              lastlogin: data.user.metadata.lastSignInTime,
              created: data.user.metadata.creationTime
            };
            db.collection("users")
              .add(myNewUser)
              .then(docRef => console.log("Doc written with ID: ", docRef.id))
              .catch(err => console.log("Error addign doc: ", err));
          });
      })
      .catch(err => {
        setAuthError(err.message);
      });
  };

  return (
    <div className="signup">
      <h1>ChinguEMR</h1>
      <Card className="card">
        <CardHeader title="Sign Up" className="cardheader" />
        <form onSubmit={handleSubmit}>
          <FormControl
            className="emailinput"
            margin="normal"
            required
            fullWidth
          >
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl
            className="passwordInput"
            margin="normal"
            required
            fullWidth
          >
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
            />
          </FormControl>
          <FormControl
            className="firstNameInput"
            margin="normal"
            required
            fullWidth
          >
            <InputLabel htmlFor="firstName">First Name</InputLabel>
            <Input
              id="firstName"
              name="firstName"
              autoComplete="firstName"
              onChange={e => setFirstName(e.target.value)}
            />
          </FormControl>
          <FormControl
            className="lastNameInput"
            margin="normal"
            required
            fullWidth
          >
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <Input
              id="lastName"
              name="lastName"
              autoComplete="lastName"
              onChange={e => setLastName(e.target.value)}
            />
          </FormControl>
          {authError ? <p className="errormsg">{authError}</p> : null}
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign Up
          </Button>
          <Link className="linkto" to="/signin">
            Sign In
          </Link>
        </form>
      </Card>
      <p>
        <strong> v8-bears-team-11 v1.0.1</strong>
      </p>
    </div>
  );
};

export default SignIn;
