import React, { useContext } from 'react';
import Button from '../components/Button';
import ScreenHeader from './../components/ScreenHeader';
import ScreenSmallHeader from './../components/ScreenSmallHeader';
import SignupContext from '../components/signup-context';
import Container from '../components/Container';
import Spacing from './../components/Spacing';
import ls from 'local-storage';

export default function Welcome() {

  const { signup, setSignup } = useContext(SignupContext);
  
  const handleClick = () => {

    setSignup(prevSignup => ({
      ...prevSignup,
      status: {
        ...prevSignup.status,
        isStarted:true
      }
    }))
    
    ls.set('signupObject', JSON.stringify(signup))
  }

  return (
    <Container>
      <ScreenHeader>
        Say Hello to Savety
      </ScreenHeader>

      <ScreenSmallHeader>
        Finance tracking has never been easier, join our community of zero users and start saving now.
        Don't worry, your data is safe with us (you wish!)
      </ScreenSmallHeader>

      <Spacing />

      <Button
        to="/personal"
        title="Apply Now"
        handleClick={handleClick}
      />
    </Container>
  )
}
