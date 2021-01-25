import React, { useContext, useEffect } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import ScreenHeader from '../components/ScreenHeader';
import Spacing from '../components/Spacing';
import SignupContext from '../components/signup-context';
import Container from '../components/Container';
import ls from 'local-storage';

export default function Personal(props) {

  const { signup, setSignup } = useContext(SignupContext);

  //Check value of input
  useEffect(() => {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    if (signup.user.lastName !== "" && signup.user.firstName !== "" && pattern.test(signup.user.Email)){
      setSignup(prevSignup => ({
        ...prevSignup,
        status: {
          ...prevSignup.status,
            disPersonal:false
          }
      }))
    } else {
      setSignup(prevSignup => ({
        ...prevSignup,
        status: {
          ...prevSignup.status,
            disPersonal:true
          }
      }))
    }

    ls.set('signupObject', JSON.stringify(signup))
  }, [signup.user.lastName, signup.user.firstName, signup.user.Email])

  return (
    <Container>
      <ScreenHeader>
        Create your account
      </ScreenHeader>

      <Input 
        type="text" 
        title="First Name" 
        name="firstName" 
        value={signup.user.firstName} 
        handleChange={props.handleChange} 
      />

      <Input 
        type="text" 
        title="Last Name" 
        name="lastName" 
        value={signup.user.lastName} 
        handleChange={props.handleChange} 
      />

      <Input 
        type="text" 
        title="Email" 
        name="Email" 
        value={signup.user.Email} 
        handleChange={props.handleChange} 
      />

      <Spacing />

      <Button
        to="/dob" 
        title="Continue"
        name="personalButton"
        disabled={signup.status.disPersonal}
      />

      <BackButton
        to="/welcome" 
        title="Back"
        name="backButton"
      />
    </Container>
  )
}