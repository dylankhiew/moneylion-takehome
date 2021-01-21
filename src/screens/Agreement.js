import React from 'react';
import ButtonArea from './../components/ButtonArea';
import Input from './../components/Input';

export default function Agreement(props) {
  return (
      <div className="container">
        <div className="screen-box">
          <div className="screen-main-header">
            Agreement
          </div>

          <Input 
            type="checkbox"
            title="Agreement 1"
            name="agreement1"
            value={props.user.agreement1}
            handleChange={props.handleChange}
            checked={props.user.agreement1}
          />

          <Input 
            type="checkbox"
            title="Agreement 2"
            name="agreement2"
            value={props.user.agreement2}
            handleChange={props.handleChange}
            checked={props.user.agreement2}
          />

          <ButtonArea
            to="#"
            title="Submit"
            handleClick={props.handleSubmit}
          />

        </div>
      </div>
  )
}
