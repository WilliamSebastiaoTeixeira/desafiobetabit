import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Lista Telefonica</h1>
      
      <div className="form">
        <label>Telefone</label> 
        <input type="text" name="telefone"/>
        <button>Enviar</button> 
      </div>
    </div>
  );
}

export default App;
