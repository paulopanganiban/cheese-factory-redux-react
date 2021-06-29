import React from 'react'
import styled from 'styled-components'
import Directory from '../components/Directory'
function Homepage() {
    return (
        <HomepageContainer>
            <Directory/>
            <h1>Homepage</h1>
        </HomepageContainer>
    )
}

export default Homepage
const HomepageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center; // vertical 
`