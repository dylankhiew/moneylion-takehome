import React, { useContext, useEffect } from 'react';
import Button from '../components/Button';
import InputCheckBox from '../components/InputCheckBox';
import BackButton from '../components/BackButton';
import ScreenHeader from './../components/ScreenHeader';
import Spacing from './../components/Spacing';
import SignupContext from '../components/signup-context';
import Container from '../components/Container';
import ls from 'local-storage';

export default function Agreement(props) {

  const { signup, setSignup } = useContext(SignupContext);

  //Check value of checkboxes
  useEffect(() => {
    if (signup.user.agreement1 && signup.user.agreement2){
      setSignup(prevSignup => ({
        ...prevSignup,
        status: {
          ...prevSignup.status,
          disAgreement: false
        }
      }))
    } else {
      setSignup(prevSignup => ({
        ...prevSignup,
        status: {
          ...prevSignup.status,
          disAgreement: true
        }
      }))
    }

    ls.set('signupObject', JSON.stringify(signup))
  }, [signup.user.agreement1, signup.user.agreement2])

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
      <Container>
        <ScreenHeader >
          One last step!
        </ScreenHeader>

        <InputCheckBox 
          title="I agree to the"
          agreement={agreement1}
          name="agreement1"
          value={signup.user.agreement1}
          handleChange={props.handleChange}
          checked={signup.user.agreement1}
        />

        <InputCheckBox
          title="I agree to the following agreements:"
          agreement={agreement2}
          name="agreement2"
          value={signup.user.agreement2}
          handleChange={props.handleChange}
          checked={signup.user.agreement2}
        />

        <Spacing />

        <Button
          to="#"
          rel="noopener"
          title="Agree &amp; Create Account"
          handleClick={props.handleSubmit}
          disabled={signup.status.disAgreement}
        />

        <BackButton
          to="/dob" 
          title="Back"
          name="backButton"
        />

      </Container>
  )
}
