import classnames from 'classnames'
import * as React from 'react'
import styles from './Box.module.scss'

interface Props {
  children: any
  header?: string
  className?: string
}

export class Box extends React.Component<Props, any> {
  render() {
    const { children, header } = this.props
    return (
      <div className={classnames(this.props.className, styles.box)}>
        {header && <header className={styles.header}>{header}</header>}
        <div className={styles.content}>{children}</div>
      </div>
    )
  }
}
