import * as React from 'react'

type TextSize = 1 | 2 | 3 | 4 | 5 | 6

interface SizeProps {
  textSize?: TextSize
}

interface WrappedComponent {
  className?: string
}

type WithTextSizeProps = SizeProps & WrappedComponent

export const withTextSize = <P extends WrappedComponent>(Component: React.ComponentType<P>) =>
  class WithTextSize extends React.Component<P & SizeProps> {
    render() {
      const { textSize, className, ...rest } = this.props as WithTextSizeProps
      const updatedClassNames = [className || '']
      if (textSize) {
        updatedClassNames.push(`is-size-${textSize}`)
      }

      return (
        <Component {...this.props as P} className={updatedClassNames.join(' ').trim()} {...rest} />
      )
    }
  }
