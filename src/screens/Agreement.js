import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function Agreement(props) {
  return (
    <div>
      <h1>Agreement</h1>
      <input 
        type="checkbox"
        name="agreement1"
        checked={props.user.agreement1}
        value={props.user.agreement1}
        onChange={props.handleChange}
      />
      <label>Agree</label>
      <br />
      <input 
        type="checkbox"
        name="agreement2"
        checked={props.user.agreement2}
        value={props.user.agreement2}
        onChange={props.handleChange}
      />
      <label>Agree</label>
      <br />
      <Link to="/dob">
        <Button variant="contained" color="primary">Back</Button>
      </Link>
      <Button variant="contained" color="primary" onClick={props.handleSubmit}>Complete Sign Up</Button>
    </div>
  )
}
