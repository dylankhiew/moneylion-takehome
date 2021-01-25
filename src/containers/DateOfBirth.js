import React, { useContext, useEffect } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import ScreenHeader from './../components/ScreenHeader';
import Spacing from './../components/Spacing';
import SignupContext from '../components/signup-context';
import Container from '../components/Container';
import ls from 'local-storage';

export default function DateOfBirth(props) {

  const { signup, setSignup } = useContext(SignupContext);

  //Check value of date of birth 
  useEffect(() => {
    if (signup.user.dob !== ""){
      setSignup(prevSignup => ({
        ...prevSignup,
        status: {
          ...prevSignup.status,
          disDob: false
        }
      }))
    } else {
      setSignup(prevSignup => ({
        ...prevSignup,
        status: {
          ...prevSignup.status,
          disDob: true
        }
      }))
    }

    ls.set('signupObject', JSON.stringify(signup))
  }, [signup.user.dob])

  return (
    <Container>
        <ScreenHeader>
          What's your date of birth?
        </ScreenHeader>

        <Input 
          type="date" 
          title="Date of Birth" 
          name="dob" 
          value={signup.user.dob} 
          handleChange={props.handleChange}
          placeholder="MM/DD/YYYY"
        />

        <Spacing />

        <Button
          to="/agreement" 
          title="Continue"
          name="dobButton"
          disabled={signup.status.disDob}
        />

        <BackButton
          to="/personal" 
          title="Back"
          name="backButton"
        />
    </Container>
  )
}
