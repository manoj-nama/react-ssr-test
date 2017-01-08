import React, {Component} from 'react';
import Header from './components/Header';

export default class App extends Component {
  constructor() {
    super();
  }

  onButtonClick() {
    alert("yo man!!!");
  }

  render() {
    return (
      <div>
        <Header />
        <button onClick={this.onButtonClick}>Click me</button>
        {
          this.props.children
        }
      </div>
    );
  }
}