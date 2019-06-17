import React, { Component } from 'react'
import { Router, withRouter } from 'react-router-dom'
import { AppRoutes, history } from './Routes'
import { Header, Footer } from './views/layout'
import styles from './App.module.scss'

class App extends Component<any, any> {
  constructor(props) {
    super(props)

    history.listen((location, action) => {
      // window.analytics.page()
    })
  }

  render() {
    return (
      <Router history={history}>
        <div className={styles.app}>
          <Header />
          <div className={styles.content}>
            <AppRoutes />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
