import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchtext: "",
    }
  }
 
  onSearch= (sender) => {
this.setState({
 searchtext: sender.target.value
});
  }
  
  
  render(){
    return( 
      <div>
        <input type="text" onChange={this.onSearch} />
        <div>
            {this.state.searchtext}
        </div>
        <li>
          <ul>
            France
          </ul>
          <ul>
            Egypt
          </ul>
          <ul>
            Pakistan
          </ul>
          <ul>
            India
          </ul>
          <ul>
            Srilanka
          </ul>
          <ul>
            United Arab Emirates
          </ul>
          <ul>
            Malaysia
          </ul>
        </li>
      </div>
    );
  }

}

export default App;
