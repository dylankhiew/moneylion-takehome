import React from 'react';
import Button from '@material-ui/core/Button';
import Input from './../components/Input';
import ButtonArea from './../components/ButtonArea';

export default function DateOfBirth(props) {
  return (
    <div className="container">
      <div className="screen-box">
        <div className="screen-main-header">
          Date of Birth
        </div>

        <Input 
          type="date" 
          title="Date of Birth" 
          name="dob" 
          value={props.user.dob} 
          handleChange={props.handleChange} 
        />

        <ButtonArea 
          to="/agreement" 
          title="Proceed" 
          handleClick={props.handleClick}
        />
      </div>
    </div>
  )
}
