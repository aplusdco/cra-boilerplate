import * as React from 'react'
import { RouterLinkButton } from './RouterLinkButton'

import styles from './Button.module.scss'

interface Props {
  onClick?: (_: void) => any
  href?: string
  className?: string
  children?: any
  linkRef?: React.RefObject<HTMLAnchorElement>

  primary?: boolean
  light?: boolean
  secondary?: boolean
  loading?: boolean
  disabled?: boolean
}

const CONTAINER_OPTIONS = ['primary', 'secondary', 'loading', 'light']

export class Button extends React.Component<Props, any> {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  get className() {
    const bulmaClasses = CONTAINER_OPTIONS
      .filter(option => this.props[option])
      .map(option => `is-${option}`)

    return [
      'button',
      this.props.className || '',
      ...bulmaClasses,
    ].join(' ')
  }

  onClick() {
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  render() {
    const { children, href, disabled } = this.props

    const buttonProps: any = {
      className: this.className,
      onClick: this.onClick,
      ref: this.props.linkRef,
      disabled,
    }

    let ButtonTag
    if (href) {
      if (href.startsWith('/')) {
        ButtonTag = RouterLinkButton
        buttonProps.to = href
      } else {
        ButtonTag = 'a'
        buttonProps.href = href
      }
    } else {
      ButtonTag = 'button'
    }

    return (
      <ButtonTag {...buttonProps}>
        {children}
      </ButtonTag>
    )
  }
}
