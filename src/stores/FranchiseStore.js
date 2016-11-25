import Reflux from 'reflux';
import $ from 'jquery';
import FranchiseAction from '../actions/FranchiseAction';

var FranchiseStore = Reflux.createStore({

  listenables: [FranchiseAction],
  franchise: Object,
  franchisePopUp: Object,
  response: String,

  init: function()
  { 
    this.obtenerFranquicia();
  },

  obtenerFranquicia: function(){
  	$.ajax({
        url: 'http://localhost:3000/franchises',
        dataType: "jsonp",
        method: 'GET',
      	cache: false,
      	context: this,    	
  		  success: function(data) {
          this.franchise = data[0]; 
          this.trigger(this.franchise);       
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
          console.log("Status: " + textStatus); 
          console.log("Error: " + errorThrown); 
        } 
	  });
  },

  handleClick: function(franchise_id) {
    this.franchisePopUp = { franchise_id: franchise_id, click: true };
    this.trigger(this.franchisePopUp);  
  },

  listarMesasFranquisia: function(){

  },

  guardarReserva: function(reserva){
    $.ajax({
        async: true,
        crossDomain: true,
        url: 'https://restaurants-udea-soft.herokuapp.com/reservations',
        method: 'GET',  
        data: JSON.stringify(reserva),     
        headers: {
          'content-type': 'application/json',
          cache: false,
        },     
        success: function(data) {
          this.response = data; 
          this.trigger(this.response);       
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
          console.log("Status: " + textStatus); 
          console.log("Error: " + errorThrown); 
        } 
    });
  },

  validarReserva: function(Reserva){

  },

});

export default FranchiseStore;