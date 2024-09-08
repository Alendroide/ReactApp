import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import DataFetch from './services/DataFetch';
import Login from './components/Login';
import Formulario from './services/Formulario'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DataFetch/>} />
          <Route path='login' element={<Login/>} />
          <Route path='new' element={<Formulario/>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>

  );
}

export default App;
