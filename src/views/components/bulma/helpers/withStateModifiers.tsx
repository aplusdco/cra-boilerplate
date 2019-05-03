import * as React from 'react'

interface ColorState {
  'is-primary'?: boolean
  'is-info'?: boolean
  'is-warning'?: boolean
  'is-success'?: boolean
  'is-danger'?: boolean
}

interface WrappedComponent {
  className?: string
}

type ColorModifiers = ColorState & WrappedComponent

export const withStateModifiers = <P extends WrappedComponent>(Component: React.ComponentType<P>) =>
  class WithColorModifiers extends React.Component<P & ColorModifiers> {
    render() {
      const colorClasses = this.props.className ? [this.props.className] : []
      const cmpProps = { className: '' }
      Object.entries(this.props).forEach(([key, value]) => {
        if (key.startsWith('is-')) {
          if (value) {
            colorClasses.push(key)
          }
        } else {
          cmpProps[key] = value
        }
      })
      cmpProps.className = colorClasses.join(' ')

      return (
        <React.Fragment>
          <Component {...this.props as P} className={colorClasses.join(' ')} {...cmpProps} />
        </React.Fragment>
      )
    }
  }
