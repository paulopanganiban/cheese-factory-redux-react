import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUserToDatabase, auth, handleUserProfile } from './firebase';
import Header from './components/Header'
import styled from 'styled-components'
import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Homepage from './pages/Homepage';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import MakeAdmin from './components/MakeAdmin';
import { login, logout, selectUser } from './features/authSlice';
function App() {
  const history = useHistory()
  const dispatch = useDispatch()
  const userState = useSelector(selectUser)
  useEffect(() => {
    // activate listener
    auth.onAuthStateChanged(user => {
      if (user) {
        // user is logged in
        // get role
        user.getIdTokenResult().then(idTokenResult => {
          dispatch(login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,
            role: idTokenResult.claims.userRole,
          }))
          addUserToDatabase(user, {
            userRole: idTokenResult.claims.userRole,
            address: 'Test address',
          })
        })
        history.push('/')
      } else {
        // user is logged out
        dispatch(logout())
      }
    })
  }, [])
  return (
    <AppContainer>
      <Header currentUser={userState} />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>

        {/* Shorter code for a single component */}
        <Route path="/signout" component={SignOut} />
        <Route path="/makeadmin" component={MakeAdmin} />
        {
          
        <Route path="/makeadmin" component={MakeAdmin} />
        }

        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
      <Footer />
    </AppContainer>
  );
}

export default App;
const AppContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`