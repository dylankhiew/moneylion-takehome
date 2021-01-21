import React from 'react';
import Input from './../components/Input';
import ButtonArea from './../components/ButtonArea';

export default function Personal(props) {

  return (
    <div className="container">
      <div className="screen-box">

        <div className="screen-main-header">
          Create your Account
        </div>

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

        <ButtonArea 
          to="/dob" 
          title="Proceed"
          handleClick={props.handleClick}
        />

      </div>
    </div>
    
  )
}