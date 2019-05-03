import React, { Component } from 'react'
import styles from './Footer.module.scss'

export class Footer extends Component<any, any> {
  render() {
    return (
      <footer className={styles.footer}>
        <div className="container">
          &copy; A Plus D, LLC. All rights reserved.
        </div>
      </footer>
    )
  }
}
