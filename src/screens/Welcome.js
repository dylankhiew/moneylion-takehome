import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function Welcome(props) {
  return (
    <div>
      <h1>Welcome Page</h1>
      <Link to="/personal">
        <Button variant="contained" color="primary" onClick={props.handleClick}>Get Started</Button>
      </Link>
    </div>
  )
}
