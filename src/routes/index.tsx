import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Login2FA from '../pages/Login2FA'
import Register from '../pages/Register'
import Profile from '../pages/Profile'
import EnrollmentList from '../pages/EnrollmentList'

import { PublicRoute, ProtectedRoute, PrivateRoute } from '../components/Routes'

import useAuth from '../hooks/useAuth'
import { AuthState } from '../contexts/auth/types'
import Splash from '../components/Splash'

import ProcessesRoutes from './ProcessesRoutes'
import Subscribe from '../pages/Subscribe'

const Routes: React.FC = () => {
  const { state: authState, loadToken } = useAuth()

  useEffect(() => {
    loadToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return authState === AuthState.IDLE ? (
    <Splash />
  ) : (
    <Router>
      <Switch>
        <PublicRoute path="/" exact component={Home} />
        <PublicRoute path="/subscribe/:id" exact component={Subscribe} />
        <ProtectedRoute path="/login" component={Login} />
        <ProtectedRoute path="/login2fa" component={Login2FA} />
        <ProtectedRoute path="/register" component={Register} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/processes" component={ProcessesRoutes} />
        <PrivateRoute path="/enrollments/:id" component={EnrollmentList} />
      </Switch>
    </Router>
  )
}

export default Routes
