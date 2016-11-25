import React from 'react';
import Reflux from 'reflux';
import FranchiseStore from '../stores/FranchiseStore.js';
import franchiseAction from '../actions/FranchiseAction.js';


var DetalleFranquisia = React.createClass({

  mixins: [Reflux.connect(FranchiseStore, 'franchisestore')],

  render: function() {
    console.log(this.state.franchisestore);
    if(this.state.franchisestore){
      return (
        React.createElement('form', {className: 'form-group'},

          React.createElement("label", {className: "label"}, 'Nombre franquicia'),
          React.createElement('input', {
            type: 'text',
            className: 'form-control', 
            value: this.state.franchisestore.name_franchise,
            onClick: this.validar,
          }),

          React.createElement("label", {className: "label"}, 'Direccion'),
          React.createElement('input', {
            type: 'text',
            value: this.state.franchisestore.address,
            className: 'form-control',       
          }),


          React.createElement("label", {className: "label"}, 'Telefono'),
          React.createElement('input', {
            type: 'text',
            value: this.state.franchisestore.phone,
            className: 'form-control',      
          }),

          React.createElement("label", {className: "label"}, 'Horario en semana'),
          React.createElement('input', {
            type: 'text',
            value: 'Desde: ' + this.state.franchisestore.open_time_week +  'am' + '  Hasta: ' + this.state.franchisestore.close_time_week+ 'pm',
            className: 'form-control',      
          }),

          React.createElement("label", {className: "label"}, 'Horario Fin de semana'),
          React.createElement('input', {
            type: 'text',
            value: 'Desde: ' + this.state.franchisestore.open_time_weekend + 'am' +  '  Hasta: ' + this.state.franchisestore.close_time_weekend+ 'pm',
            className: 'form-control',      
          }),

          React.createElement('input', {
            type: 'button',
            value: 'Reserva Periodica',
            className: 'btn-primary',
            onClick: this.handleClick,
          }) ,
        )
      )
    }
    else{
      return (
        <div>No se encontro la información de la franquicia</div>
      )
    }
  },

  handleClick: function(){
      franchiseAction.handleClick(this.state.franchisestore.id_franchise);
  },

});

export default DetalleFranquisia;