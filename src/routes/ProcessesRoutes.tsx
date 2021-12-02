import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import ProcessesList from '../pages/ProcessesList'
import CreateProcess from '../pages/CreateProcess'

const ProcessesRoutes: React.FC = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={path} component={ProcessesList} />
      <Route path={`${path}/create`} component={CreateProcess} />
    </Switch>
  )
}

export default ProcessesRoutes
