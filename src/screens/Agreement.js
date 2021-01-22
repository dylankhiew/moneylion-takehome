import React from 'react';
import Button from '../components/Button';
import InputCheckBox from './../components/InputCheckBox';
import BackButton from './../components/BackButton';
import ScreenHeader from './../components/ScreenHeader';

export default function Agreement(props) {

  const agreement1 = [
    {
      name: "Electronic Transaction Esign Consent",
      link: "https://www.moneylion.com/terms-and-conditions/#esign"
    }
  ];

  const agreement2 = [
    {
      name: "Privacy Policy",
      link: "https://savety.co/privacy.php"
    },
    {
      name: "Terms of Use",
      link: "https://savety.co/tos.php"
    }
  ];

  return (
      <div className="container">
        <div className="screen-box">
          <ScreenHeader title="One last step!" />

          <InputCheckBox 
            title="I agree to the"
            agreement={agreement1}
            name="agreement1"
            value={props.user.agreement1}
            handleChange={props.handleChange}
            checked={props.user.agreement1}
          />

          <InputCheckBox
            title="I agree to the following agreements:"
            agreement={agreement2}
            name="agreement2"
            value={props.user.agreement2}
            handleChange={props.handleChange}
            checked={props.user.agreement2}
          />

          <Button
            to="#"
            title="Agree &amp; Create Account"
            handleClick={props.handleSubmit}
            disabled={props.status.disAgreement}
          />

          <BackButton
            to="/dob" 
            title="Back"
            name="backButton"
            handleClick={props.handleClick}
          />

        </div>
      </div>
  )
}
