import * as React from 'react'

interface Props {
  children: any
  className?: string
  fluid?: boolean
  widescreen?: boolean
  fullhd?: boolean
}

const CONTAINER_OPTIONS = ['fluid', 'widescreen', 'fullhd']

export class Container extends React.Component<Props, any> {
  get className() {
    const bulmaClasses = CONTAINER_OPTIONS
      .filter(option => this.props[option])
      .map(option => `is-${option}`)
    return `container ${this.props.className || ''} ${bulmaClasses.join(' ')}`
  }

  render() {
    const { children } = this.props
    return (
      <div className={this.className}>{children}</div>
    )
  }
}
