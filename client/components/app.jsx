import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Loading'
    };
  }
  componentDidMount() {
    fetch('/api/endpoint.php')
      .then(res => res.json())
      .then(result => {
        this.setState({
          message: result.success ? 'Yay!' : 'Boo!'
        });
      })
      .catch(err => {
        this.setState({ message: err.message });
      });
  }
  render() {
    return <h1>{ this.state.message }</h1>;
  }
}
