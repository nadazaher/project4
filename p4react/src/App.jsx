import React, { Component } from 'react';
import './App.css';

import getEventServices from './services/api.js';

class App extends Component {
//   // add pre render info and check if i can call it Service.

// getEventServices()
// .then(data => console.log(data));
// .catch(err => console.log(err));

componentDidMount () {
  getEventServices()
}

  render() {
    return (
    
      <div>
    <h1>Hello</h1>
    </div>
    )

  }
  // }

//       <div className="App">
//         Event Services
//         <form>
//           <label htmlFor="email">Email: </label>
//           <br />
//           <input
//             name="email"
//             onChange={this.handleChange}
//             value={this.state.email}
//             type="email"
//           />
//           <br /><br />
//           <label htmlFor="password">Password:
//           </label>
//           <br />
//           <input
//             name="password"
//             onChange={this.handleChange}
//             value={this.state.value}
//             type="password"
//           />
//           </form>
//           <br />

//           <button onClick={this.login}>
//           Login
//           </button>

//           <button onClick={this.logout}>
//           Logout
//           </button>

//           <button onClick={this.getServices}>
//           Get Services
//           </button>

//           <div> {display} </div>
//       </div>
//     )}
// }
}

export default App;
