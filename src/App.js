import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import Header from './components/Header'
import styled from 'styled-components'
import {
  Switch,
  Route
} from "react-router-dom";
import Homepage from './pages/Homepage';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
function App() {
  useEffect(() => {
    // activate listener
    auth.onAuthStateChanged(user => {
      if (user) {
        // user is logged in
        // dispatch(login({}))
      } else {
        // user is logged out
        // dispatch(logout())
      }
    })
  }, [])
  return (
    <AppContainer>
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>

        {/* Shorter code for a single component */}
        <Route path="/signout" component={SignOut}/>
        
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
      <Footer/>
    </AppContainer>
  );
}

export default App;
const AppContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`