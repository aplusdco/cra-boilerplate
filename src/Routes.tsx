/* tslint:disable:jsx-no-lambda */

import * as React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router'
import { createBrowserHistory } from 'history'
import Home from './views/layout/Home/Home'

/* Routes JSX */

export class AppRoutes extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    )
  }
}

export const history = createBrowserHistory()
