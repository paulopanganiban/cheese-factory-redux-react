import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button, TextField } from '@material-ui/core';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion'
import { auth, handleUserProfile, provider, } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthStatus, signInWithGoogleAsync } from '../features/authSlice';
const SignIn = () => {
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const signInWithGoogle = (e) => {
        e.preventDefault()
        setIsLoading(true)
        auth.signInWithPopup(provider)
        .then(result => {
            setIsLoading(false)
            console.log(result)
            history.push('/')
        })
    }
    const dispatch = useDispatch()
    const authStatus = useSelector(selectAuthStatus)
    return (
        <SignInContainer
            initial={{
                marginTop: -999,
            }}
            animate={{
                marginTop: 0,
                opacity: 1,
            }}
        >
            <h1>Sign in</h1>
            <p>Sign in on the internal platform</p>
            <ButtonsContainer>
                <StyledButton variant="contained">
                    <FacebookIcon />LOGIN WITH FACEBOOK
                </StyledButton>
                {
                    '         '
                }
                <StyledButton variant="contained"
                disabled={isLoading}
                // pano po kaya okay na logic for disable and isdirty?
                onClick={signInWithGoogle}
                >
                    <TagFacesIcon />LOGIN WITH GOOGLE
                </StyledButton>
            </ButtonsContainer>
            <FormContainer>
                <p>or login with email address</p>
                <form>
                    <TextField
                        type="email"
                        required
                        id="outlined-required"
                        label="Email Address"
                        variant="outlined"
                    />
                    <TextField
                        className="form__textField"
                        required
                        id="filled-password-input"
                        label="Password"
                        variant="outlined"
                    />
                    <StyledButton className="form__button" variant="contained"
                        type="submit"
                    >
                        SIGN IN NOW
                    </StyledButton>
                </form>
            </FormContainer>
            <div className="wrapper">
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </div>
        </SignInContainer >
    )
}

export default SignIn
const FormContainer = styled.div`
margin-top: 10px;
 > p {
     display: flex;
     justify-content: center;
     color: gray;
 }
 > form {
     margin-top: 10px;
     display: flex;
     flex-direction: column;
 }
 > form > .form__textField {
     margin-top: 10px;
 }
 > form > .form__button {
     margin-top: 10px;
 }
 `
const StyledButton = styled(Button)`
`
const ButtonsContainer = styled.div`
margin-top: 20px;
`
const SignInContainer = styled(motion.div)`
display: flex;
flex-wrap: wrap;
flex-direction: column;
 > p {
     color: gray;
     font-size: 15px;
 }
 > .wrapper {
     margin-top: 10px;
 }
 > .wrapper > p {
     color: gray;
 }
`