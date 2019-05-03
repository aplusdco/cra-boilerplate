import * as React from 'react'
import { withStateModifiers } from './helpers/withStateModifiers'

interface Props {
  children: any
  className?: string
  multiple?: boolean
}

const BULMA_OPTIONS = ['multiple']

class BaseSelect extends React.Component<Props, any> {
  get className() {
    const bulmaClasses = BULMA_OPTIONS
      .filter(option => this.props[option])
      .map(option => `is-${option}`)
    return `select ${this.props.className || ''} ${bulmaClasses.join(' ')}`
  }

  render() {
    const { children } = this.props
    return (
      <div className={this.className}>{children}</div>
    )
  }
}

export const Select = withStateModifiers(BaseSelect)
