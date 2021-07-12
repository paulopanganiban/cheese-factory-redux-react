import React from 'react'
import styled from 'styled-components'
const Admin = () => {
    return (
        <AdminContainer>
            <AdminTopBar>
                <h4>My admin</h4>
            </AdminTopBar>
            <h1>MUNCH BOB ADMIN 😎</h1>
        </AdminContainer>
    )
}

export default Admin
const AdminTopBar = styled.div`
background-color: black;
height: 20px;

display: flex;
justify-content: end;
align-items: center;

> h4 {
    margin-left: 10px;
    color: white;
}
`
const AdminContainer = styled.div`
width: 100%;
`