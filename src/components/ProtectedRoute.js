import React from 'react'
import { useSelector } from 'react-redux'
// import styled from 'styled-components'
import { selectUser } from '../features/authSlice'
import { Redirect, Route } from 'react-router-dom'
const ProtectedRoute = ({component: Component, ...rest}) => {
    const userState = useSelector(selectUser)
    return (
        <Route {...rest} render={props => {
            if (userState?.role === 'admin') {
                return <Component  {...props}/>
            }
            else {
                // return <Redirect to={{
                //     pathname: '/',
                //      // rest --> props --> props.location
                //      from: props.location
                // }}/>
            }
        }}/>
    )
}

export default ProtectedRoute