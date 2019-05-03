import React, { Component } from 'react'
import logo from 'assets/images/logo.svg'
import styles from './Header.module.scss'
import { Button } from 'views/components'

export class Header extends Component<any, any> {
  private linkRef: React.RefObject<HTMLAnchorElement>

  constructor(props: any) {
    super(props)
    this.linkRef = React.createRef()
    this.state = {
      done: props.done
    }
  }

  componentDidMount() {
    window.analytics.trackLink(this.linkRef.current, 'Contact Us Clicked', {
      label: 'Contact Us',
    })
  }

  render() {
    return (
      <div className={styles.navbar}>
        <div className="container">
          <header className={styles.header}>
            <h1>
              <img src={logo} alt="A+D" />
            </h1>
            <Button>Contact Us</Button>
          </header>
        </div>
      </div>
    )
  }
}
