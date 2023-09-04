import './App.css';
import { useLocalStorage } from './utils';

function App() {
  const [name, setName] = useLocalStorage("username", "Henrique Jofre");

  return (
    <div className="App">
      <div>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <p>Hello, {name}!</p>
      </div>
    </div>
  );
}

export default App;
