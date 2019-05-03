import * as React from 'react'
import { withTextSize } from './bulma/helpers/withTextSize'

interface HeadlineTag {
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  h5?: boolean
  h6?: boolean
}

interface Props extends HeadlineTag {
  children?: React.ReactNode
  className?: string
  subtitle?: boolean
}

const BULMA_OPTIONS = []

// type HeadlineTag = 'h1' | 'h2'

class BaseTitle extends React.Component<Props, any> {
  get className() {
    if (this.props.subtitle) {
      return `subtitle ${this.props.className || ''}`.trim()
    }
    return `title ${this.props.className || ''}`.trim()
  }

  getTag(): keyof HeadlineTag {
    const matches = Object.keys(this.props).filter(prop => prop.match(/^h\d$/))
    if (matches.length > 0) {
      return matches[0] as keyof HeadlineTag
    }
    return 'h1'
  }

  render() {
    const { children } = this.props
    const Tag = this.getTag()
    return (
      <Tag className={this.className}>{children}</Tag>
    )
  }
}

export const Title = withTextSize(BaseTitle)
