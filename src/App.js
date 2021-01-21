import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import {useState} from 'react';
import Welcome from './screens/Welcome';
import Personal from './screens/Personal';
import DateOfBirth from './screens/DateOfBirth';
import Agreement from './screens/Agreement';
import Header from './components/Header';

const axios = require('axios');

const App = () => {
  const [started, setStarted] = useState(false);
  const [user, setUser] = useState({
    firstName:'',
    lastName:'',
    Email:'',
    dob:'',
    agreement1: false,
    agreement2: false
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://5f79819fe402340016f93139.mockapi.io/api/user', {
    user
    })
    .then(function (response) {
      console.log(response);
      alert("User Created.")
    })
    .catch(function (error) {
      console.log(error);
      alert("Creation failed")
    })
  }

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    switch(type){
      case 'checkbox':
        setUser(prevUser => ({
          ...prevUser,
          [name]: checked
        }))
        break;
      case 'date':
        setUser(prevUser => ({
          ...prevUser,
          [name]: value
        }))
        break;
      default:
        setUser(prevUser => ({
          ...prevUser,
          [name]: value
        }));
        break;
    }
  }

  const getStarted = () => {
    setStarted(true);
  }

  return (
    <div>
      <Header />
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
              {started ? 
              <Personal user={user} handleChange={handleChange}/> 
              :
              <Redirect to="/welcome" />}
            </Route>

            <Route exact path="/dob">
              {started ? 
              <DateOfBirth user={user} handleChange={handleChange} /> 
              : 
              <Redirect to="/welcome" />}
            </Route>

            <Route exact path="/agreement">
              {started ? 
              <Agreement user={user} handleChange={handleChange} handleSubmit={handleSubmit} /> 
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
