import React from 'react';
import Reflux from 'reflux';
import FranchiseStore from '../stores/FranchiseStore.js';
import Modal from 'react-modal';

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
             	Realizar reserva periodica                    
              <a href="javascript: void 0;"
                style={{float: "right", textDecoration: "none"}}
                onClick={this.closeModal}>
                &#215;
              </a>
            </div>

            <div className="modal-body">              
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
    	modalIsOpen: false 
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

});

export default PopUpReserva;