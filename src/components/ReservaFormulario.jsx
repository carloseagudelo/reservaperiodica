import React from 'react';
import Reflux from 'reflux';
import FranchiseStore from '../stores/FranchiseStore.js';
import franchiseAction from '../actions/FranchiseAction.js'
import Modal from 'react-modal';
import DateTime from'react-datetime';


var ReservaFormulario = React.createClass({

  getInitialState: function () {
    return {
      periodicidad: '',
      mesa: '',
      multiplicador: '',
      horaini: Date,
      horafin: Date,
      cantidaper: '',
      reserva: {},
    };
  },

  render: function() {
  	return(
  	<form onSubmit={this.guardarReserva}>
	  <label>
	    Seleccione la periodicidad:
	    <select value={this.state.periodicidad} onChange={this.chandePeriodicidad}>
	      <option selected value="0">Seleccione una opción</option>
	      <option value="1">Diario</option>
	      <option value="2">Todos los lunes</option>                    
	      <option value="3">Todos los viernes</option>
	      <option value="4">Todos los quinces</option>
	      <option value="5">Todos los fines de mes</option>
	    </select>
	  </label>
	  <label>
	    Seleccione la mesa:
	    <select value={this.state.mesa} onChange={this.changeMesa}>
	      <option selected value="0">Seleccione una opción</option>
	      <option value="1">mesa 1</option>
	      <option value="2">mesa 2</option>                    
	      <option value="3">Mesa 3</option>
	      <option value="4">Mesa 4</option>
	      <option value="5">Mesa 5</option>
	    </select>
	  </label>
	  <label>
	    Multiplicador:
	    <input type="number" value={this.state.multiplicador} onChange={this.changeMultiplicador} />
	  </label>
	  <label>
	    Hora de llegada:
	    <DateTime  
	      selected={this.state.horaini}
	      onChange={this.changeHoraIni}/>
	  </label>
	  <label>
	    Hora de finalización:
	    <DateTime 
	      selected={this.state.horafin}
	      onChange={this.changeHoraFin}/>
	  </label>
	 <label>
	    Cantidad de personas:
	    <input type="number" value={this.state.cantidaper} onChange={this.changeCantidadPer} />
	  </label>
	  <input type="submit" value="Reservar"/>
	</form> 
	);
  },

chandePeriodicidad: function (e){  
    this.setState({
      periodicidad: e.target.value 
    })
  },

  changeMesa: function (e){  
    this.setState({
      mesa: e.target.value 
    })
  },

  changeMultiplicador: function (e){  
    this.setState({
      multiplicador: e.target.value 
    })
  },

 changeHoraIni: function (e){ 
    this.setState({
      horaini: e.target.value 
    })
  },

  changeHoraFin: function (e){  
    this.setState({
      horafin: e.target.value 
    })
  },

  changeCantidadPer: function (e){  
    this.setState({
      cantidaper: e.target.value 
    })
  },

  guardarReserva: function(){
    this.reserva = {user_restaurant: this.state.franchisestore.franchise_id, table_restaurant: this.state.mesa, 
                      date_init: this.state.horaini, date_end: this.state.horafin, amount_people: this.state.cantidaper, state: 0};
    console.log(this.reserva);
    alert(this.reserva);
    //franchiseAction.guardarReserva(this.reserva);
  },

});

export default ReservaFormulario;
