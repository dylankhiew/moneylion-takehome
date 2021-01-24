import React, { useContext, useEffect } from 'react';
import Input from './../components/Input';
import Button from '../components/Button';
import BackButton from './../components/BackButton';
import ScreenHeader from './../components/ScreenHeader';
import Spacing from './../components/Spacing';
import UserContext from './../components/user-context';
import StatusContext from './../components/status-context';
import {useLocation } from 'react-router-dom'
import Container from './../components/Container';

export default function Personal(props) {

  const { user } = useContext(UserContext);
  const { status, setStatus } = useContext(StatusContext);
  let location = useLocation();

  useEffect(() => {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    if (user.lastName !== "" && user.firstName !== "" && pattern.test(user.Email)){
      setStatus(prevStatus => ({
        ...prevStatus,
        disPersonal: false
      }))
    } else {
      setStatus(prevStatus => ({
        ...prevStatus,
        disPersonal: true
      }))
    }
  }, [user.lastName, user.firstName, user.Email])

  useEffect(() => {
    setStatus(prevStatus => ({
        ...prevStatus,
        currentPath: location.pathname
      }))
  }, [])

  return (
    <Container>
      <ScreenHeader>
        Create your account
      </ScreenHeader>

      <Input 
        type="text" 
        title="First Name" 
        name="firstName" 
        value={user.firstName} 
        handleChange={props.handleChange} 
      />

      <Input 
        type="text" 
        title="Last Name" 
        name="lastName" 
        value={user.lastName} 
        handleChange={props.handleChange} 
      />

      <Input 
        type="text" 
        title="Email" 
        name="Email" 
        value={user.Email} 
        handleChange={props.handleChange} 
      />

      <Spacing />

      <Button
        to="/dob" 
        title="Continue"
        name="personalButton"
        disabled={status.disPersonal}
      />

      <BackButton
        to="/welcome" 
        title="Back"
        name="backButton"
      />
    </Container>
  )
}