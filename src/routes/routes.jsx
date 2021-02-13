import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard/Dashboard'

function Routing() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Dashboard />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routing
