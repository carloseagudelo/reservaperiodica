import React from 'react';
import Reflux from 'reflux';
import FranchiseStore from '../stores/FranchiseStore.js';
import franchiseAction from '../actions/FranchiseAction.js';
import FormReserva from './ReservaFormulario.jsx'
import Modal from 'react-modal';
import DateTime from'react-datetime';


var PopUpReserva = React.createClass({
  
  mixins: [Reflux.connect(FranchiseStore, 'franchisestore')],
 
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
              <FormReserva />               
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
 
  closeModal: function() {
    this.setState({
      modalIsOpen: false
    });
  },
});

export default PopUpReserva;
