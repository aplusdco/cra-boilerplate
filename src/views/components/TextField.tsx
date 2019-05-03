import React from 'react'

interface Props {
  onChange?: any
  onSubmit?: any
  label: string
}

interface State {
  value: string
}

export class TextField extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    const value = e.target.value
    this.setState({ value })
    if (this.props.onChange) {
      this.props.onChange(value)
    }
  }

  onSubmit(e) {
    e.preventDefault()
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.value)
      this.setState({ value: '' })
    }
  }

  render() {
    const { label } = this.props
    const { value } = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <label>{label}</label>
        <input type="text" onChange={this.onChange} value={value}/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
