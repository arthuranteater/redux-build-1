import React from 'react';
import "./styles.css";
import Regular from './Regular'
import Redux from './Redux'
import Context from './Context'



class App extends React.Component {
  constructor(props) {
    super(props)
    console.log('App constructor called')
  }
  state = {
  }

  handleClick = e => {
    this.setState({
      mgmt: e.target.name
    })
  }


  render() {
    const { mgmt } = this.state
    console.log('mgmt', mgmt)

    return (
      <div id="top">
        <nav onClick={this.handleClick}>
          <a href='#top' name='regular'>Regular</a> |
          <a href='#top' name='redux'>Redux</a> |
          <a href='#top' name='context'>Context</a>
        </nav>
        {mgmt === 'regular' ? <Regular /> : <div></div>}
        {mgmt !== 'regular' ? <Redux /> : <div></div>}
      </div>
    );
  }
}


export default App;
