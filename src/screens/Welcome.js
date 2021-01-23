import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import Spacing from './../components/Spacing';
import ScreenHeader from './../components/ScreenHeader';

export default function Welcome(props) {

  return (
    <div className="container">
      <div className="screen-box">
        <ScreenHeader title="Say Hello to Savety" />
        <div className="screen-small-header">
            Finance tracking has never been easier, join our community of zero users and start saving now.
            Don't worry, your data is safe with us (you wish!)
        </div>

        <Spacing />
        
      </div>
      <div className="screen-next-button">
          <Link to="/personal" style={{ textDecoration: 'none' }}>
            <button name="welcomeButton" className="screen-button" onClick={props.handleClick}>Apply Now</button>
          </Link>
        </div>
    </div>
  )
}
