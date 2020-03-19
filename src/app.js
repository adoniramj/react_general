import React from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'

class TestComponent extends React.Component {
  render() {
    return (
      <div>
        <p>Paragraph one</p>
        <p>Paragraph two</p>
      </div>
    )
  }
}

const appRoot = document.getElementById('app')

ReactDOM.render(<TestComponent />, appRoot)