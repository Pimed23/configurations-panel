import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Panel de Configuración</h1>
      <h3>Panel de control para administrar configuraciones</h3>
      <form>
        <div>
          <label>Nombre de la empresa</label>
          <input></input>
        </div>
        <div>
          <label>Tipo de la empresa</label>
          <select>
            <option value='dlv'>Delivery</option>
            <option value='sl'>Social Listening</option>
            <option value='msj'>Mensajería</option>
          </select>
        </div>
        <div>
          <label>Flujo</label>
          <select>
            <option value=''></option>
          </select>
        </div>
        <div>
          <label>Auto Respuesta</label>
          <select>
            <option value=''></option>
          </select>
        </div>
        <div>
          <button type='submit'>Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default App;
