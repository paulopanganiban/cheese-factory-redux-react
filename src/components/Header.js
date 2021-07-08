import React from 'react'
import styled from 'styled-components'
import HeaderOptions from './HeaderOptions'
import Avatar from '@material-ui/core/Avatar';
import logoHeader2 from '../images/logoHeader2.svg'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { auth } from '../firebase';
import { logout } from '../features/authSlice';
const Header = ({ currentUser }) => {
    const dispatch = useDispatch()
    function logoutOfApp() {
        dispatch(logout())
        auth.signOut();
    }
    return (
        <HeaderContainer>
            <HeaderLeft>
                <StyledLink to='/'>
                    <HeaderImg src={logoHeader2} />
                </StyledLink>
            </HeaderLeft>
            <HeaderRight>
                {currentUser ?
                
                <SignedInLinks>
                    <StyledAvatar src={currentUser?.photoUrl} />
                    <StyledLink onClick={logoutOfApp}>
                        <HeaderOptions
                            title='Sign out'
                        />
                    </StyledLink>
                </SignedInLinks> :

                    <SignedOutLinks>
                        <StyledLink to="/signin">
                            <HeaderOptions
                                title='Sign In'
                            />
                        </StyledLink>
                        <StyledLink to="/signup">
                            <HeaderOptions
                                title='Sign Up'

                            />
                        </StyledLink>
                    </SignedOutLinks>}
                    
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header
const StyledAvatar = styled(Avatar)`
cursor: pointer;
margin-right: 10px;
`
const SignedOutLinks = styled.div`
display: flex;
align-items: center;
`
const SignedInLinks = styled.div`
display: flex;
align-items: center;
`
const HeaderImg = styled.img`
object-fit: contain;
height: 70px;
margin-left: 20px;
cursor: pointer;
`
const StyledLink = styled(Link)`
text-decoration: none;
`
const HeaderLeft = styled.div`
display: flex;
align-items: center;
`
const HeaderRight = styled.div`
display: flex;
align-items: center;
`
const HeaderContainer = styled.div`
position: sticky;
top: 0;
z-index: 999;
display: flex;
justify-content: space-between;
border-bottom: 0.1px solid lightgray;
padding-top: 10px;
padding-bottom: 10px;
width: 100%;
height: 64px;
background-image: none;
background-color: black;
`