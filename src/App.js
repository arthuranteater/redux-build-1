import React from 'react';
import "./styles.css";
import Regular from './Regular'
import Redux from './Redux'
import { Context } from './Context'

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log('App constructor called')
  }
  state = {
    mgmt: 'redux'
  }

  handleClick = e => {
    this.setState({
      mgmt: e.target.name
    })
  }


  render() {
    const { mgmt } = this.state
    console.log('state management', mgmt)

    return (
      <div id="top">
        <nav onClick={this.handleClick}>
          <a href='#top' name='regular'>Regular</a> |
          <a href='#top' name='redux'>Redux</a> |
          <a href='#top' name='context'>Context</a>
        </nav>
        {mgmt === 'regular' ? (<div><h2>Regular</h2> <Regular /></div>) : <div></div>}
        {mgmt === 'redux' ? (<div><h2>Redux</h2><Redux /></div>) : <div></div>}
        {mgmt === 'context' ? (<div><h2>Context</h2> <Context /></div>) : <div></div>}
      </div>)
  }
}


export default App;
