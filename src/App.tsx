import React from 'react';
import './App.css';
import './styles/css/style.css';
import CafePage from "./components/CafePage";
import CafeOrder from "./components/CafeOrder";

function App() {
  return (
    <div className="App">
      <CafePage/>
      <CafeOrder/>
    </div>
  );
}

export default App;