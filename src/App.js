import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import {useState} from 'react';
import Welcome from './screens/Welcome';
import Personal from './screens/Personal';
import DateOfBirth from './screens/DateOfBirth';
import Agreement from './screens/Agreement';

const axios = require('axios');

const App = () => {
  const [userInfo, setUserInfo] = useState({
    firstName:'',
    lastName:'',
    Email:'',
    agreement1: false,
    agreement2: false
  })
  const [started, setStarted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('https://5f79819fe402340016f93139.mockapi.io/api/user', {
    userInfo
    })
    .then(function (response) {
      console.log(response);
    })
  }

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    type === "checkbox" ? 
    setUserInfo(prevUserInfo => ({
      ...prevUserInfo,
      [name]: checked
    }))
    :
    setUserInfo(prevUserInfo => ({
      ...prevUserInfo,
      [name]: value
    }));

    console.log(userInfo);
  }

  const getStarted = () => {
    setStarted(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/welcome" />
            </Route>

            <Route exact path="/welcome">
              <Welcome handleClick={getStarted}/>
            </Route>

            <Route exact path="/personal">
              {started ? <Personal user={userInfo} handleChange={handleChange}/> : <Redirect to="/welcome" />}
            </Route>

            <Route exact path="/dob">
              {started ? <DateOfBirth /> : <Redirect to="/welcome" />}
            </Route>

            <Route exact path="/agreement">
              {started ? <Agreement user={userInfo} handleChange={handleChange} handleSubmit={handleSubmit} /> : <Redirect to="/welcome" />}
            </Route>
          </Switch>
        </Router>
      </form>
    </div>
  );
}

export default App;
