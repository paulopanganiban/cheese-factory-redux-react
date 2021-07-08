import React from 'react'
import styled from 'styled-components'
import Directory from '../components/Directory'
import { motion } from 'framer-motion'
function Homepage() {
    // https://www.youtube.com/watch?v=Y0-qdp-XBJg
    // react router dom
    
    return (
        <HomepageContainer>
            <Directory />
            <motion.h1
                initial={{ scale: 2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >PARA SA PANG KABUHAYAN SHOWCASE, BOK!!!</motion.h1>
        </HomepageContainer>
    )
}

export default Homepage
const HomepageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center; // vertical 
 > h1 {
    margin-top: 20px;
 }
`