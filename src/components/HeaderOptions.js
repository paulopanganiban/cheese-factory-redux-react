import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'

function HeaderOptions({ title, Icon, avatar }) {
    return (
        <HeaderOptionsContainer>
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && (
                <Avatar className="headerOption__icon"
                    src={avatar} />
            )}
            <h3 className="headerOption__title">
                {title}
            </h3>
        </HeaderOptionsContainer>
    )
}

export default HeaderOptions

const HeaderOptionsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-right: 20px;
color: gray;
cursor: pointer;
:hover { color: black;}
 > .headerOption__icon {
     object-fit: contain;
     height: 45px !important;
     width: 45px !important;
 }
`
