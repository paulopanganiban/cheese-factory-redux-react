import React from 'react'
import styled from 'styled-components'
import HeaderOptions from './HeaderOptions'
import HomeIcon from '@material-ui/icons/Home'


const Header = () => {
    const profilePictureUrl = 'https://www.heroesofnewerth.com/images/heroes/114/icon_128.jpg'
    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderImg src="https://i.pinimg.com/originals/0b/2e/93/0b2e9309f9fedf80f24bf650bae502a3.png" alt="" />
            </HeaderLeft>
            <HeaderRight>
                <HeaderOptions
                Icon={HomeIcon}
                title='Home' />
                <HeaderOptions
                avatar={profilePictureUrl}
                title='John Doe' />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header
const HeaderRight = styled.div`
display: flex;
align-items: center;
`
const HeaderImg = styled.img`
object-fit: contain;
height: 40px;
margin-right: 10px;
`
const HeaderLeft = styled.div`

`
const HeaderContainer = styled.div`
position: sticky;
top: 0;
z-index: 999;
display: flex;
align-items: center;
justify-content: space-evenly;
border-bottom: 0.1px solid lightgray;
padding-top: 10px;
padding-bottom: 10px;
width: 100%;
`