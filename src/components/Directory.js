import React from 'react'
import styled from 'styled-components'
import shopWine from '../images/shopWine.jpg'
import shopCheese from '../images/shopCheese.jpg'
import { Button } from '@material-ui/core'
function Directory() {
    return (
        <DirectoryContainer>
            <LeftDirectory>
                <DirectoryImage src={shopWine} alt="" />
                <Button variant="contained" color="black" size="large" disableElevation>Shop Wine</Button>
            </LeftDirectory>
            <RightDirectory>
                <DirectoryImage src={shopCheese} alt="" />
                <Button variant="contained" color="black" size="large" disableElevation>Shop Cheese</Button>
            </RightDirectory>
        </DirectoryContainer>
    )
}

export default Directory
const DirectoryContainer = styled.div`
display: flex;
justify-content: center;
`
const LeftDirectory = styled.div`
padding: 10px;
display: flex;
align-items: center;
flex-direction: column;
 > button {
     margin-top: -70px;
 }
`
const RightDirectory = styled.div`
padding: 10px;
display: flex;
align-items: center;
flex-direction: column;
> button {
     margin-top: -70px;
 }
`
const DirectoryImage = styled.img`
object-fit: contain;
height: 80vh;
cursor: pointer;
`