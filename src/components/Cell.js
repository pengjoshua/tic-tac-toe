import React, { Component } from 'react';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      marker: ''
    };
  }

  componentDidMount() {
    this.setState({
      marker: this.props.id
    });
  }

  handleClick() {
    this.setState({
      marker: this.props.marker
    })
  }

  render() {
    console.log(this.props);
    return (
      <div onClick={this.props.onClick}>
        {this.state.marker}
      </div>
    );
  }
}

export default Cell;
