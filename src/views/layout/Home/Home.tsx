import React, { Component } from 'react'
import styles from './Home.module.scss'

export default class Home extends Component<any, any> {
  render() {
    return (
      <div className={styles.home}>
        <div className="container">
        Hello
        </div>
      </div>
    )
  }
}
