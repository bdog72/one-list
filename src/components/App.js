import React, { Component } from 'react'
import styles from '../styles/screen.scss'
class App extends Component {

  constructor () {
    super()
    this.state = {
      items: ['apple', 'bananas', 'potato'],
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      items: this.state.items.concat(this.state.value),
      value: ''
    })
  }

  render () {
    const items = this.state.items.map((item, i) => {
      return <li key={i}> {item} </li>
    })
    return <div className={styles.roots}>
      <header>
        <h1>ONE LIST!</h1>
      </header>
      <ul>
        {items}
      </ul>
      <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.value}
          onChange={this.handleChange}
          placeholder='what to do?' />
      </form>
    </div>
  }
}

export default App
