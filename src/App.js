import React, {Component} from 'react';
import {Routes} from './routes/routes';
// import "../src/App.css";
// import {API} from './helper/api';
// import {Pokemon} from './pokemon'

// const response = async () => await API.get(`/pokemon`)
// console.log(response());

// // function App() {
// //   return (
// //     <div className="App">
// //       <Pokemon />
// //     </div>
// //   );
// // }

// class App extends Component {
//   render() {
//     return <Routes></Routes>
//   }
// }

// export default App;


// import Halaman from './pages/halaman1';
import './App.css';

class App extends Component {
    render() {
      return <Routes></Routes>
    }
  }

export default App;