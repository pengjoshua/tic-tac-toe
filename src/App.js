import React, { Component } from 'react';
import logo from './logo.svg';
import Cell from './components/Cell';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isX: true,
      marker: 'X'
    };
  }

  handleClick() {
    if (this.state.isX) {
      this.setState({
        isX: false,
        marker: 'X'
      });
    } else {
      this.setState({
        isX: true,
        marker: 'O'
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tic Tac Toe</h2>
        </div>
        <table className="board">
          <tbody>
            <tr>
              <td><Cell onClick={() => this.handleClick()} id={1} marker={this.state.marker} /></td>
              <td><Cell onClick={() => this.handleClick()} id={2} marker={this.state.marker} /></td>
              <td><Cell onClick={() => this.handleClick()} id={3} marker={this.state.marker} /></td>
            </tr>
            <tr>
              <td><Cell onClick={() => this.handleClick()} id={4} marker={this.state.marker} /></td>
              <td><Cell onClick={() => this.handleClick()} id={5} marker={this.state.marker} /></td>
              <td><Cell onClick={() => this.handleClick()} id={6} marker={this.state.marker} /></td>
            </tr>
            <tr>
              <td><Cell onClick={() => this.handleClick()} id={7} marker={this.state.marker} /></td>
              <td><Cell onClick={() => this.handleClick()} id={8} marker={this.state.marker} /></td>
              <td><Cell onClick={() => this.handleClick()} id={9} marker={this.state.marker} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
