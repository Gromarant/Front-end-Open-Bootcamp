import logo from './logo.svg';
import { ComponentA } from './components/container/ComponentA.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponentA />
      </header>
    </div>
  );
}

export default App;
