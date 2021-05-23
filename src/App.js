import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Deck from './Components/Deck'

import Nav from './Components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
  <Deck/>
   
    </div>
  );
}

export default App;
