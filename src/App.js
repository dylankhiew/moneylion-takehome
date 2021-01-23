import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {useState, useEffect } from 'react';
import Welcome from './screens/Welcome';
import Personal from './screens/Personal';
import DateOfBirth from './screens/DateOfBirth';
import Agreement from './screens/Agreement';
import Header from './components/Header';
import Loader from './components/Loader';
import './App.css';

const axios = require('axios');

const App = () => {
  const [user, setUser] = useState({
    firstName:'',
    lastName:'',
    Email:'',
    dob:'',
    agreement1: false,
    agreement2: false
  })
  
  const [status, setStatus] = useState({
    isStarted: false,
    disPersonal: true,
    disDob: true,
    disAgreement: true
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const url = "https://5f79819fe402340016f93139.mockapi.io/api/user";
    console.log(user);
    
    axios.post(url, {
      user
      })
      .then(function (response) {
        console.log(response);
        alert("User Created.");
      })
      .catch(function (error) {
        console.log(error);
        alert("Creation failed. Sorry " + user.firstName + ", but there seems to be an error creating the account. Please try again later.");
      })
  }

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    //Update values in the state
    if (type === "checkbox"){
      setUser({
          ...user,
          [name]: checked
      })
    } else {
      setUser({
        ...user,
        [name]: value
      })
    }
  }

  const handleClick =(event) => {
    //For the loader at the top
    setStatus(prevStatus => ({
      ...prevStatus,
      isStarted: true
    }));
  }

  useEffect(() => {
    //Update for Personal Page, button enables when all fields valid
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
    //Update for Date of Birth, button enables upon selecting
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
    //Update for Agreement Page, button enables upon checking both boxes
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

  return (
    <div>
      <Header />

      <Loader path={window.location.pathname}/>

      <form onSubmit={handleSubmit}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/welcome" />
            </Route>

            <Route exact path="/welcome">
              <Welcome handleClick={handleClick}/>
            </Route>
            
            <Route exact path="/personal">
              {status.isStarted ? 
              <Personal user={user} status={status} handleChange={handleChange} handleClick={handleClick}/> 
              :
              <Redirect to="/welcome" />}
            </Route>

            <Route exact path="/dob">
              {status.isStarted ? 
              <DateOfBirth user={user} status={status} handleChange={handleChange} handleClick={handleClick}/> 
              : 
              <Redirect to="/welcome" />}
            </Route>

            <Route exact path="/agreement">
              {status.isStarted ? 
              <Agreement user={user} status={status} handleChange={handleChange} handleClick={handleClick} handleSubmit={handleSubmit} /> 
              : 
              <Redirect to="/welcome" />}
            </Route>
          </Switch>
        </Router>
      </form>
    </div>
  );
}

export default App;
