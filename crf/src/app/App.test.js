import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import store from '../redux/store'
import { Provider } from 'react-redux'

test('renders app without crashing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
})
