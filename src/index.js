import React from 'react';
import ReactDOM from 'react-dom';
import Detalle from './components/DetalleFranquisia.jsx';
import PopUp from './components/PopUpReserva.jsx';
import './assets/css/index.css';

ReactDOM.render(
  <Detalle />, document.getElementById('root')
);

ReactDOM.render(
  <PopUp />, document.getElementById('pop')
);

