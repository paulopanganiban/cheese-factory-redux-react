import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import { functions } from '../firebase';
import firebase from 'firebase'
function MakeAdmin() {
    const [email, setEmail] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        console.log(email)
        // call here
        // making a reference
        const addAdminRole = functions.httpsCallable('addAdminRole');
        // call and pass the email data
        addAdminRole({ email: email })
        .then(result => {
            console.log(result)
        }).catch(err => console.log(err))
    } 
    return (
        <MakeAdminContainer>
            <form autoComplete="off" type="form" onSubmit={handleSubmit}>
                <TextField id="standard-basic" label="Email address" type="email" 
                onChange={(e) => setEmail(e.target.value)}
                />
                <Button variant="contained" color="primary" style={{ marginTop: 10 }}
                    type="submit"
                >
                    Make Admin
                </Button>
            </form>
        </MakeAdminContainer>
    )
}

export default MakeAdmin

const MakeAdminContainer = styled.div`
> form {
    margin-top: 10px;
    display: flex;
flex-direction: column;
}
`