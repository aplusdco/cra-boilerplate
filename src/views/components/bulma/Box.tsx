import * as React from 'react'
import { withColumn } from './helpers/withColumns'

interface Props {
  children: any
  className?: string
}

const BULMA_OPTIONS = []

class BaseBox extends React.Component<Props, any> {
  get className() {
    const bulmaClasses = BULMA_OPTIONS
      .filter(option => this.props[option])
      .map(option => `is-${option}`)
    return `box ${this.props.className || ''} ${bulmaClasses.join(' ')}`
  }

  render() {
    const { children } = this.props
    return (
      <div className={this.className}>{children}</div>
    )
  }
}

export const Box = withColumn(BaseBox)
