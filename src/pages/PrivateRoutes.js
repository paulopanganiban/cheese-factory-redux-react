import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/authSlice'
import { Route, Redirect } from 'react-router-dom'
const PrivateRoutes = ({ component: Component, ...rest }) => {
    const userState = useSelector(selectUser)
    return (
      <Route
      {...rest}
      render={userState?.role === 'admin' ? (
          <Component/>
      ) : (
          <Redirect to={{
              pathname: '/signin',
          }} />
      )}
      />
    )
}

export default PrivateRoutes
