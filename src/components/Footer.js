import React from 'react'
import styled from 'styled-components'
function Footer() {
    return (
        <FooterContainer>
            <p>
                paulopanganiban.dev ©
            </p>
        </FooterContainer>
    )
}

export default Footer
const FooterContainer = styled.div`
height: 100px;
width: 100%;
display: flex;
align-items: flex-end;
justify-content: center;
font-weight: 300;
color: gray;

`