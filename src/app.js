import React from 'react'
import ReactDOM from 'react-dom'

class TestComponent extends React.Component {
  render() {
    return (
      <div>Test</div>
    )
  }
}

const appRoot = document.getElementById('app')

ReactDOM.render(<TestComponent />, appRoot)