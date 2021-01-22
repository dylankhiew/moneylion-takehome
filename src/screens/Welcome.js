import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

export default function Welcome(props) {
  return (
    <div className="container">
      <div className="screen-box">
        <div className="screen-main-header">
          Ensure your Savety
        </div>
        <div className="screen-small-header">
            Not convinced? Wait till you listen to the feedbacks of none of our users!
          </div>
        <div className="screen-next-button">
          <Link to="/personal" style={{ textDecoration: 'none' }}>
            <button name="welcomeButton" className="screen-button" onClick={props.handleClick}>Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
