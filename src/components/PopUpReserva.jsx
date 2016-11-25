import React from 'react';
import Reflux from 'reflux';
import FranchiseStore from '../stores/FranchiseStore.js';
import franchiseAction from '../actions/FranchiseAction.js';
import Modal from 'react-modal';

var PopUpReserva = React.createClass({
  
  mixins: [Reflux.connect(FranchiseStore, 'franchisestore')],

  getInitialState: function () {
    return {
      periodicidad: '',
      mesa: '',
      multiplicador: '',
      horaini: '',
      horafin: '',
      cantidaper: '',
    };
  },
 
  render: function() {
    if(this.state.franchisestore){
      return (
        <div>
          <Modal
            isOpen={this.state.franchisestore.click}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal} > 

            <div className="modal-header">
                Realizar reserva periodica<a href="javascript: void 0;"
                style={{float: "right", textDecoration: "none"}}
                onClick={this.closeModal}>
                &#215;
              </a>
            </div>

            <hr/>

            <div className="modal-body">

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
                  <input type="datetime" value={this.state.horaini} onChange={this.changeHoraIni}/>
                </label>
                <label>
                  Hora de finalización:
                  <input type="datetime" value={this.state.horafin} onChange={this.changeHoraFin}/>
                </label>
               <label>
                  Cantidad de personas:
                  <input type="number" value={this.state.cantidaper} onChange={this.changeCantidadPer} />
                </label>
                <input type="submit" value="Reservar"/>
              </form>   
            </div>

          </Modal>
        </div>
      );
    }
    else{
      return (
        <div>No se encontro la información de la franquicia</div>
        );
    }
  },

  getInitialState: function() {
    return { 
    	modalIsOpen: true 
    };
  },
 
  openModal: function() {
    this.setState({
      modalIsOpen: this.state.franchisestore.click
    });
  },
 
  afterOpenModal: function() {
    // references are now sync'd and can be accessed. 
    this.refs.subtitle.style.color = '#f00';
  },
 
  closeModal: function() {
    this.setState({
      modalIsOpen: false
    });
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

  /*guardarReserva: function(){
    Object reserva = {user_restaurant: "", table_restaurant: "", date_init: "",date_end: "", amount_people: "",state: 0};
    franchiseAction.guardarReserva(reserva);
  },

  ValidarReserva: function(){
    Object reserva = {user_restaurant: , table_restaurant: , date_init: ,date_end: , amount_people: state: 0};
    franchiseAction.ValidarReserva(reserva);
  },*/

});

export default PopUpReserva;
