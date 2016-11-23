import React from 'react';
import Reflux from 'reflux';

var DetalleFranquisia = React.createClass({

  render: function() {
    return (

      React.createElement('form', {className: 'form-group'},

        React.createElement("label", {className: "label"}, 'Nombre franquicia'),
        React.createElement('input', {
          type: 'text',
          className: 'form-control', 
          value:'',    
          //onChange: this.nameChange,
        }),

        React.createElement("label", {className: "label"}, 'Direccion'),
        React.createElement('input', {
          type: 'text',
          value:'',
          className: 'form-control',       
          //onChange: this.RestauranteChange,
        }),


        React.createElement("label", {className: "label"}, 'Telefono'),
        React.createElement('input', {
          type: 'text',
          value:'',
          className: 'form-control',      
          //onChange: this.resChange,
        }),

        React.createElement("label", {className: "label"}, 'Horario en semana'),
        React.createElement('input', {
          type: 'text',
          value:'',
          className: 'form-control',      
          //onChange: this.resChange,
        }),

        React.createElement("label", {className: "label"}, 'Horario Fin de semana'),
        React.createElement('input', {
          type: 'text',
          value:'',
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
  },

});

export default DetalleFranquisia;