import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Welcome from './screens/Welcome';
import Personal from './screens/Personal';
import DateOfBirth from './screens/DateOfBirth';
import Agreement from './screens/Agreement';
import Header from './components/Header';
import Loader from './components/Loader';
import UserContext from './components/user-context';
import StatusContext from './components/status-context';
import './App.css';

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
    currentPath:'',
    isStarted: false,
    disPersonal: true,
    disDob: true,
    disAgreement: true
  })

  const userContext = { user, setUser };
  const statusContext = { status, setStatus};

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    type === "checkbox" ? setUser({...user, [name]: checked }) : setUser({...user, [name]: value})
  }

  return (
    <div>
      <Header />

      <Loader path={status.currentPath} />

      <UserContext.Provider value={userContext}>
        <StatusContext.Provider value={statusContext}>
          <form>
            <Router>
              <Switch>

                <Route exact path="/">
                  <Redirect to="/welcome" />
                </Route>

                <Route exact path="/welcome">
                  <Welcome/>
                </Route>

                <Route exact path="/personal">
                  {status.isStarted ? 
                  <Personal handleChange={handleChange}/> : <Redirect to="/welcome" />}
                </Route>

                <Route exact path="/dob">
                  {status.isStarted ? 
                  <DateOfBirth handleChange={handleChange}/> : <Redirect to="/welcome" />}
                </Route>

                <Route exact path="/agreement">
                  {status.isStarted ? 
                  <Agreement handleChange={handleChange}/> : <Redirect to="/welcome" />}
                </Route>

              </Switch>
            </Router>
          </form>
        </StatusContext.Provider>    
    </UserContext.Provider>
  </div>
  );
}

export default App;
