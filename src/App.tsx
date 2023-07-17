import React, {useState} from 'react';
import './App.css';
import './styles/css/style.css';
import CafePage from "./components/CafePage";
import CafeOrder from "./components/CafeOrder";

function App() {
  const [isOrdering, setIsOrdering] = useState(false)
  return (
    <div className="App">
      {isOrdering ? <CafeOrder/> : <CafePage/>}
    </div>
  );
}

export default App;