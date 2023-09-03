//import logo from './logo.svg';
import './App.css';
import { Select, Input, Products, Count, Calc } from './components';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Select />
      <Input />
      <Products /> */}
      <Count />
      <Calc data={[
        {value: 1},
        {value: 2},
        {value: 3},
        {value: 4},
        {value: 5}]}/>
    </div>
  );
}

export default App;
