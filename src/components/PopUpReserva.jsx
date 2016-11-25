import React from 'react';
import Reflux from 'reflux';
import FranchiseStore from '../stores/FranchiseStore.js';
import Modal from 'react-modal';

var PopUpReserva = React.createClass({
  
  mixins: [Reflux.connect(FranchiseStore, 'franchisestore')],
 
  render: function() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
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
  },

  getInitialState: function() {
    return { 
    	modalIsOpen: false 
    };
  },
 
  openModal: function() {
    this.setState({modalIsOpen: true});
  },
 
  afterOpenModal: function() {
    // references are now sync'd and can be accessed. 
    this.refs.subtitle.style.color = '#f00';
  },
 
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

});

export default PopUpReserva;