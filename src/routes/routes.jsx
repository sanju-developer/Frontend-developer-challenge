import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard/Dashboard'
import PageNotFound from '../components/PageNotFound/PageNotFound'

function Routing() {
  return (
    // Handling of navigation
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/frontend-developer-challenge">
          <Dashboard />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routing
