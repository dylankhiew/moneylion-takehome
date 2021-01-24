import React, { useContext, useEffect } from 'react';
import Input from './../components/Input';
import Button from '../components/Button';
import BackButton from './../components/BackButton';
import ScreenHeader from './../components/ScreenHeader';
import Spacing from './../components/Spacing';
import UserContext from './../components/user-context';
import StatusContext from './../components/status-context';
import {useLocation} from 'react-router-dom';
import Container from './../components/Container';


export default function DateOfBirth(props) {

  const { user } = useContext(UserContext);
  const { status, setStatus } = useContext(StatusContext);
  let location = useLocation();

  useEffect(() => {
    if (user.dob !== ""){
      setStatus(prevStatus => ({
      ...prevStatus,
        disDob: false
      }))
    } else {
      setStatus(prevStatus => ({
      ...prevStatus,
        disDob: true
      }))
    }
  }, [user.dob])

  useEffect(() => {
    setStatus(prevStatus => ({
        ...prevStatus,
        currentPath: location.pathname
      }))
  }, [])

  return (
    <Container>
        <ScreenHeader>
          What's your date of birth?
        </ScreenHeader>

        <Input 
          type="date" 
          title="Date of Birth" 
          name="dob" 
          value={user.dob} 
          handleChange={props.handleChange}
          placeholder="MM/DD/YYYY"
        />

        <Spacing />

        <Button
          to="/agreement" 
          title="Continue"
          name="dobButton"
          disabled={status.disDob}
        />

        <BackButton
          to="/personal" 
          title="Back"
          name="backButton"
        />
    </Container>
  )
}
