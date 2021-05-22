import React from 'react';
import ReactDom from 'react-dom';

import SeasonDsiplay from './components/SeasonDisplay/SeasonDisplay';

class App extends React.Component {
  
  state = {lat: null, errorMessage: ''};

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat: position.coords.latitude})
      },
      err => {
        this.setState({errorMessage: err.message})
      }
    )
  }

  componentDidUpdate() {
    console.log('State has been updated');
  }

  render() {
    if(this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if(this.state.lat && !this.state.errorMessage) {
      return <SeasonDsiplay lat = {this.state.lat}/>
    }

    return (
      <div>
        Loading...
      </div>
    )
  }
}

ReactDom.render(
  <App />, document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

