import React, { useContext, useEffect } from 'react';
import Button from '../components/Button';
import InputCheckBox from './../components/InputCheckBox';
import BackButton from './../components/BackButton';
import ScreenHeader from './../components/ScreenHeader';
import Spacing from './../components/Spacing';
import UserContext from './../components/user-context';
import StatusContext from './../components/status-context';
import {useLocation, useHistory} from 'react-router-dom';
import Container from './../components/Container';

const axios = require('axios');

export default function Agreement(props) {

  const { user } = useContext(UserContext);
  const { status, setStatus } = useContext(StatusContext);
  let history = useHistory();
  let location = useLocation();


  const handleSubmit = (event) => {
    event.preventDefault();
    
    const url = "https://5f79819fe402340016f93139.mockapi.io/api/user";
    console.log(user);
    
    axios.post(url, {
      user
      })
      .then(function (response) {
        console.log(response);
        alert("User Created. Thank you for signing up!");
        history.push("/welcome");

      })
      .catch(function (error) {
        console.log(error);
        alert("Creation failed. Sorry " + user.firstName + ", but there seems to be an error creating the account. Please try again later.");
      })
  }

  useEffect(() => {
    if (user.agreement1 && user.agreement2){
      setStatus(prevStatus => ({
      ...prevStatus,
        disAgreement: false
      }))
    } else {
      setStatus(prevStatus => ({
      ...prevStatus,
        disAgreement: true
      }))
    }
  }, [user.agreement1, user.agreement2])

  useEffect(() => {
    setStatus(prevStatus => ({
        ...prevStatus,
        currentPath: location.pathname
      }))
  }, [])

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
          value={user.agreement1}
          handleChange={props.handleChange}
          checked={user.agreement1}
        />

        <InputCheckBox
          title="I agree to the following agreements:"
          agreement={agreement2}
          name="agreement2"
          value={user.agreement2}
          handleChange={props.handleChange}
          checked={user.agreement2}
        />

        <Spacing />

        <Button
          to="#"
          rel="noopener"
          title="Agree &amp; Create Account"
          handleClick={handleSubmit}
          disabled={status.disAgreement}
        />

        <BackButton
          to="/dob" 
          title="Back"
          name="backButton"
        />

      </Container>
  )
}
