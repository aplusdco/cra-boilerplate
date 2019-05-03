import * as React from 'react'

type ColumnSize = 'three-quarters' | 'two-thirds' | 'half' | 'one-third' | 'one-quarter'
  | 'full' | 'four-fifths' | 'three-fifths' | 'two-fifths' | 'one-fifth'

interface WithColumnProps {
  column?: boolean
  textCentered?: boolean
  size?: ColumnSize
  offset?: ColumnSize
}

export const withColumn = <P extends object>(Component: React.ComponentType<any>) =>
  class WithColumn extends React.Component<P & WithColumnProps> {
    render() {
      const { column, size, offset, textCentered, ...props } = this.props as WithColumnProps
      if (column || size) {
        const bulmaClasses: string[] = []
        if (size) bulmaClasses.push(`is-${size}`)
        if (offset) bulmaClasses.push(`is-offset-${offset}`)
        if (textCentered) bulmaClasses.push(`has-text-centered`)
        return (
          <div className={`column ${bulmaClasses.join(' ')}`}>
            <Component {...props} />
          </div>
        )
      }

      return <Component {...props} />
    }
  }
