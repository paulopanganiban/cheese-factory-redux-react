import React from 'react'
import styled from 'styled-components'
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
function SignUp() {
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
            <h1>Create new account</h1>
            <p>Use your email to create a new account</p>
            <FormContainer>
                <form>
                    <TextField
                        className="form__textField"
                        required
                        id="outlined-required"
                        label="First name"
                        variant="outlined"
                    />
                    <TextField
                        className="form__textField"
                        required
                        id="outlined-required"
                        label="Last name"
                        variant="outlined"
                    />
                    <TextField
                        className="form__textField"
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
                        SIGN UP NOW
                    </StyledButton>
                </form>
            </FormContainer>
            <div className="wrapper">
                <p>Have an account? <Link to="/signin">Sign in</Link></p>
            </div>
        </SignInContainer>
    )
}

export default SignUp
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