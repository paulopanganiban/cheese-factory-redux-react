import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { auth, provider } from '../firebase'
import { logInWithGoogleProviderAsync, logOutAsync, login, logout } from '../features/auth/authSlice'
const Header = () => {
    const authState = useSelector(state => state.auth)
    const dispatch = useDispatch()
    auth.onAuthStateChanged(function (user) {
        if (user) {
            dispatch(login(user))
            console.log('from authstate changed')
        } else {
            dispatch(logout(false))
        }
    })

    function handleSignIn(e) {
        e.preventDefault()
        auth.signInWithPopup(provider)
    }
    function handleSignOut(e) {
        e.preventDefault()
        auth.signOut()
    }
    return (
        <>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </a>

                    <a role="button"
                        class="navbar-burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item">
                            Home
      </a>
                    </div>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            {!authState.isLoggedIn ? (

                                <a class="button is-primary" onClick={handleSignIn}>
                                    <strong>Log in</strong>
                                </a>

                            ) : (
                                <>
                                    <a class="navbar-item">
                                    <img src={authState.profilePicUrl}/>
                                    </a>
                                    <a class="navbar-item">
                                    {authState.userName}
                                    </a>
                                    <a class="button is-light" onClick={handleSignOut}>
                                        Log out
                                </a>
                                </>

                            )}



                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header

const HeaderContainer = styled.div`
/* display: flex;
position: fixed;
height: 125px;
width: 100%;
background-color: #313131; */
`