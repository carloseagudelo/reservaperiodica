import React from 'react';
import Reflux from 'reflux';
import FranchiseStore from '../stores/FranchiseStore.js';

var DetalleFranquisia = React.createClass({

  mixins: [Reflux.connect(FranchiseStore, 'franchisestore')],

  render: function() {
    if(this.state.franchisestore){
      return (
        React.createElement('form', {className: 'form-group'},

          React.createElement("label", {className: "label"}, 'Nombre franquicia'),
          React.createElement('input', {
            type: 'text',
            className: 'form-control', 
            value: this.state.franchisestore.name_franchise,
            onClick: this.validar,
            //onChange: this.nameChange,
          }),

          React.createElement("label", {className: "label"}, 'Direccion'),
          React.createElement('input', {
            type: 'text',
            value: this.state.franchisestore.address,
            className: 'form-control',       
            //onChange: this.RestauranteChange,
          }),


          React.createElement("label", {className: "label"}, 'Telefono'),
          React.createElement('input', {
            type: 'text',
            value: this.state.franchisestore.phone,
            className: 'form-control',      
            //onChange: this.resChange,
          }),

          React.createElement("label", {className: "label"}, 'Horario en semana'),
          React.createElement('input', {
            type: 'text',
            value: 'Desde: ' + this.state.franchisestore.open_time_week + '  Hasta: ' + this.state.franchisestore.close_time_week,
            className: 'form-control',      
            //onChange: this.resChange,
          }),

          React.createElement("label", {className: "label"}, 'Horario Fin de semana'),
          React.createElement('input', {
            type: 'text',
            value: 'Desde: ' + this.state.franchisestore.open_time_weekend + '  Hasta: ' + this.state.franchisestore.close_time_weekend,
            className: 'form-control',      
            //onChange: this.resChange,
          }),

          React.createElement('input', {
            type: 'submit',
            value: 'Reserva Periodica',
            //onClick: this.guardarClic,
            className: 'btn-primary',
          }) ,
        )
      )
    }
    else{
      return (
        <div>No se encontro la información de la frnaquicia</div>
      )
    }
  },

});

export default DetalleFranquisia;