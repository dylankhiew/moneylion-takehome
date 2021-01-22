import React from 'react';
import Input from './../components/Input';
import Button from '../components/Button';
import BackButton from './../components/BackButton';
import ScreenHeader from './../components/ScreenHeader';

export default function DateOfBirth(props) {
  return (
    <div className="container">
      <div className="screen-box">
        <ScreenHeader title="What's your date of birth?" />

        <Input 
          type="date" 
          title="Date of Birth" 
          name="dob" 
          value={props.user.dob} 
          handleChange={props.handleChange} 
        />

        <Button
          to="/agreement" 
          title="Continue"
          name="dobButton"
          handleClick={props.handleClick}
          disabled={props.status.disDob}
        />

        <BackButton
          to="/personal" 
          title="Back"
          name="backButton"
          handleClick={props.handleClick}
        />

      </div>
    </div>
  )
}
