import * as React from 'react'

interface BackgroundColor {
  'background-white'?: boolean
  'background-black'?: boolean
  'background-primary'?: boolean
  'background-info'?: boolean
  'background-link'?: boolean
  'background-warning'?: boolean
  'background-success'?: boolean
  'background-danger'?: boolean
}

interface TextColor {
  'text-white'?: boolean
  'text-black'?: boolean
  'text-primary'?: boolean
  'text-info'?: boolean
  'text-link'?: boolean
  'text-warning'?: boolean
  'text-success'?: boolean
  'text-danger'?: boolean
}

interface WrappedComponent {
  className?: string
}

type ColorModifiers = TextColor & BackgroundColor & WrappedComponent

export const withColorModifiers = <P extends WrappedComponent>(
  Component: React.ComponentType<WrappedComponent>) =>
  class WithColorModifiers extends React.Component<P & ColorModifiers> {
    render() {
      const colorClasses = this.props.className ? [this.props.className] : []
      const cmpProps = { className: '' }
      Object.entries(this.props).forEach(([key, value]) => {
        if (key.startsWith('text-') || key.startsWith('background-')) {
          if (value) {
            colorClasses.push(`has-${key}`)
          }
        } else {
          cmpProps[key] = value
        }
      })
      cmpProps.className = colorClasses.join(' ')

      return (
        <Component className={colorClasses.join(' ')} {...cmpProps} />
      )
    }
  }
