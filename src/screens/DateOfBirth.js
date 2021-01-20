import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function DateOfBirth() {
  return (
    <div>
      <h1>Date of Birth</h1>
      <input 
        type="datetime"
        name="dateOfBirth"
      />
      <Link to="/personal">
        <Button variant="contained" color="primary">Back</Button>
      </Link>
      <Link to="/agreement">
        <Button variant="contained" color="primary">Proceed</Button>
      </Link>
    </div>
  )
}
