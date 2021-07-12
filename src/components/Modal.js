import { Button } from '@material-ui/core'
import styled from 'styled-components'
import { motion } from 'framer-motion'
const Modal = ({ showModal, setShowModal, modalOptions, name, Icon, Icon2, logoutFunction }) => {

  return <>
    {showModal ?
      <ModalContainer
        initial={{
          opacity: 0,
          transition: 0.5,
        }}
        animate={{
          opacity: 1,
        }}
      >

        <h4>{name}</h4>
        <hr />
        <p><Icon />Profile</p>
        <p><Icon2 />Settings</p>
        <Button onClick={logoutFunction}>Sign out</Button>
      </ModalContainer>
      : null}
  </>
}

export default Modal
const ModalContainer = styled(motion.div)`
margin-top: 200px;
position: absolute;
right: 0;
color:black;
background: white;
border: 1px solid #ccc;
width: 241px;
padding: 10px;
border-radius: 16px;
box-shadow: 0 5px 16px rgba(0,0,0,0.2);
background: #fff;
overflow: hidden auto;
outline: 0px;
box-shadow: rgb(0 0 0 / 31%) 0px 0px 1px 0px, rgb(0 0 0 / 25%) 0px 5px 8px -2px;
transform-origin: 216px 0px;
 > h4 {
   padding: 10px;
   color: gray;
 }
 > p {
   cursor: pointer;
   display: flex;
   align-items: center;
   padding: 10px;
 }
`