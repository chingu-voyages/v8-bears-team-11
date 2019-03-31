import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/muiThemeable';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class LoginForm extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <TextField>
          </TextField>
          <br/>
          <TextField>
          </TextField>
          <br/>
          <RaisedButton
            label="Login"
            primary={true}
          />
        </React.Fragment >      
      </MuiThemeProvider>
    )
  }
}

export default LoginForm
