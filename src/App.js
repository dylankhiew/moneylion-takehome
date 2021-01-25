import { BrowserRouter as Router, Switch, Route, Redirect, useLocation, withRouter, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Welcome from './containers/Welcome';
import Personal from './containers/Personal';
import DateOfBirth from './containers/DateOfBirth';
import Agreement from './containers/Agreement';
import Header from './components/Header';
import Loader from './components/Loader';
import SignupContext from './components/signup-context';
import './App.css';
import ls from 'local-storage';

const axios = require('axios');

const App = () => {
  const initialSignUp = {
    user: {
      firstName: '',
      lastName:'',
      Email:'',
      dob: '',
      agreement1:false,
      agreement2:false
    },
    status: {
      currentPath:'',
      isStarted: false,
      disPersonal: true,
      disDob: true,
      disAgreement: true
    }
  }

  const [signup, setSignup] = useState(initialSignUp);

  const signupContext = { signup, setSignup };
  let history = useHistory();
  let location = useLocation();

  //Get values from local storage on mount, if empty create a new local storage
  useEffect(() => {

    if (ls.get('signupObject') === null){
      ls.set('signupObject', JSON.stringify(signup));
    } else {
      let lsSignup = JSON.parse(ls.get('signupObject'));

      setSignup({
        user: {
          firstName: lsSignup.user.firstName,
          lastName: lsSignup.user.lastName,
          Email: lsSignup.user.Email,
          dob: lsSignup.user.dob,
          agreement1: lsSignup.user.agreement1,
          agreement2: lsSignup.user.agreement2
        },
        status: {
          currentPath: lsSignup.status.currentPath,
          isStarted: lsSignup.status.isStarted,
          disPersonal: lsSignup.status.disPersonal,
          disDob: lsSignup.status.disDob,
          disAgreement: lsSignup.status.disAgreement
        }
      });

      history.push(lsSignup.status.currentPath);
    }
  }, [])

  //Instantly update to local storage
  useEffect(() => {
    ls.set('signupObject', JSON.stringify(signup));
  }, [signup])

  //Update current path
  useEffect(() => {
    setSignup(prevSignup => ({
        ...prevSignup,
        status:{
          ...prevSignup.status,
          currentPath: location.pathname
        }
    }))

    ls.set('signupObject', JSON.stringify(signup))
  }, [location.pathname])

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    if (type === "checkbox"){
      setSignup(prevSignup => ({
        ...prevSignup,
        user: {
          ...prevSignup.user,
          [name]:checked
        }
      }))
    } else {
      setSignup(prevSignup => ({
        ...prevSignup,
        user: {
          ...prevSignup.user,
          [name]:value
        }
      }))
    }

    ls.set('signupObject', JSON.stringify(signup));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const url = "https://5f79819fe402340016f93139.mockapi.io/api/user";
    console.log(signup.user);

    let postUser = signup.user
    
    axios.post(url, {
      postUser
      })
      .then(function (response) {
        console.log(response);
        alert("User Created. Thank you for signing up!");
        ls.remove('signupObject');
        ls.clear();
        setSignup({...initialSignUp});
        history.push("/welcome");
      })
      .catch(function (error) {
        console.log(error);
        alert("Creation failed. Sorry " + signup.user.firstName + ", but there seems to be an error creating the account. Please try again later.");
      })
  }

  return (
    <div>
      <Header />

      <Loader path={signup.status.currentPath} />

      <SignupContext.Provider value={signupContext}>
          <form>
              <Switch>

                <Route exact path="/">
                  <Redirect to={signup.status.currentPath !== "" ? signup.status.currentPath : "/welcome"} />
                </Route>

                <Route exact path="/welcome">
                  <Welcome/>
                </Route>

                <Route exact path="/personal">
                  { signup.status.isStarted ? 
                    <Personal handleChange={handleChange}/> 
                    : 
                    <Redirect to="/welcome" /> }
                </Route>

                <Route exact path="/dob">
                  { signup.status.isStarted ? 
                  <DateOfBirth handleChange={handleChange}/> 
                  : 
                  <Redirect to="/welcome" /> }
                </Route>

                <Route exact path="/agreement">
                  { signup.status.isStarted ? 
                  <Agreement handleChange={handleChange} handleSubmit={handleSubmit}/> 
                  : 
                  <Redirect to="/welcome" /> }
                </Route>

              </Switch>
          </form>
      </SignupContext.Provider>
  </div>
  );
}

export default withRouter(App);
