
import './App.css';
import Contador from './componentes/Contador';
import ToggleTexto from './componentes/Palavra';
import Lista from './componentes/Lista'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Contador />
        <ToggleTexto />
        <Lista />
      </header>
    </div>
  );
}

export default App;
