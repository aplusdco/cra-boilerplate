import React, { Component } from 'react'
import logo from 'assets/images/logo.svg'
import styles from './Header.module.scss'

export class Header extends Component<any, any> {
  render() {
    return (
      <div className={styles.navbar}>
        <div className="container">
          <header className={styles.header}>
            <h1>
              <img src={logo} />
            </h1>
          </header>
        </div>
      </div>
    )
  }
}
