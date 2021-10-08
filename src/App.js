import React, {Component} from 'react';
import {Routes} from './routes/routes';
import './App.css';
// import "../src/App.css";
// import {API} from './helper/api';
// import {Pokemon} from './pokemon'

// const response = async () => await API.get(`/pokemon/bulbasaur`)
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


class App extends Component {
    render() {
      return <Routes></Routes>
    }
  }

export default App;