import React, { useContext, useEffect } from 'react';
import Button from '../components/Button';
import ScreenHeader from './../components/ScreenHeader';
import ScreenSmallHeader from './../components/ScreenSmallHeader';
import StatusContext from './../components/status-context';
import {useLocation} from 'react-router-dom';
import Container from './../components/Container';
import Spacing from './../components/Spacing';

export default function Welcome() {

  const { setStatus } = useContext(StatusContext);
  let location = useLocation();
  
  const handleClick = () => {
    setStatus(prevStatus => ({
      ...prevStatus,
      isStarted: true
    }));
  }

  useEffect(() => {
    setStatus(prevStatus => ({
        ...prevStatus,
        currentPath: location.pathname
      }))
  }, [])

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
