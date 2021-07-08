import React from 'react'
import { Avatar } from '@material-ui/core'
import styled from 'styled-components'
const HeaderOptions = ({ title, Icon, avatar, onClick }) => {
    return (
        <HeaderOptionsContainer>
            {Icon && <Icon className="headerOptions__icon" />}
            {avatar && (
                <Avatar className="headerOptions__icon" 
                src={avatar}/>
            )}
            <h3 className="headerOptions__title">
                {title}
            </h3>
        </HeaderOptionsContainer>
    )
}

export default HeaderOptions
const HeaderOptionsContainer = styled.div`
display: flex;
align-items: center;
margin-right: 20px;
cursor: pointer;
color: white;
transition: 0.2s ease-in-out;
 :hover {
     color: #b3b3b3;
     transition: all 0.2s ease-in-out;
 }
 > .headerOptions__icon {
     object-fit: contain;
     width: 45px !important;
     height: 45px !important;

 }

`