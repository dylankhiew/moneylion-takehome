import React from 'react';
import Input from './../components/Input';
import Button from '../components/Button';
import BackButton from './../components/BackButton';
import ScreenHeader from './../components/ScreenHeader';
import Spacing from './../components/Spacing';

export default function Personal(props) {

  return (
    <div className="container">
      <div className="screen-box">

        <ScreenHeader title="Create your account" />

        <Input 
          type="text" 
          title="First Name" 
          name="firstName" 
          value={props.user.firstName} 
          handleChange={props.handleChange} 
        />

        <Input 
          type="text" 
          title="Last Name" 
          name="lastName" 
          value={props.user.lastName} 
          handleChange={props.handleChange} 
        />

        <Input 
          type="text" 
          title="Email" 
          name="Email" 
          value={props.user.Email} 
          handleChange={props.handleChange} 
        />

        <Spacing />

        
      </div>

      <Button
          to="/dob" 
          title="Continue"
          name="personalButton"
          disabled={props.status.disPersonal}
          handleClick={props.handleClick}
        />

        <BackButton
          to="/welcome" 
          title="Back"
          name="backButton"
          handleClick={props.handleClick}
        />

    </div>
    
  )
}