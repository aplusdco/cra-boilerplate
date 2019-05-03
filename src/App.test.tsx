import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import 'jasmine'

it('renders without crashing', () => {
  shallow(<App />)
})
