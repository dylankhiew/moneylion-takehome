import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Button from '@material-ui/core/Button';


export default function Personal(props) {
  return (
    <div>
      <h1>Personal Page</h1>

      <label>First Name</label>
      <input
        type="text"
        name="firstName"
        value={props.user.firstName}
        onChange={props.handleChange}
      />

      <label>Last Name</label>
      <input
        type="text"
        name="lastName"
        value={props.user.lastName}
        onChange={props.handleChange}
      />
      <label>E-mail</label>
      <input
        type="text"
        name="Email"
        value={props.user.Email}
        onChange={props.handleChange}
      />
      <Link to="/welcome">
        <Button variant="contained" color="primary">Back</Button>
      </Link>
      <Link to="/dob">
        <Button variant="contained" color="primary">Proceed</Button>
      </Link>
    </div>
  )
}