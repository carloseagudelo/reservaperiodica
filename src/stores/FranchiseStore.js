import Reflux from 'reflux';
import $ from 'jquery';
import FranchiseAction from '../actions/FranchiseAction';

var FranchiseStore = Reflux.createStore({

  listenables: [FranchiseAction],
  franquice: Object,
  click: Boolean,

  init: function()
  { 
    this.handleClick();
  },

  obtenerFranquicia: function(){
  	$.ajax({
        url: 'http://localhost:3000/franchises',
        dataType: "jsonp",
        method: 'GET',
      	cache: false,
      	context: this,    	
  		  success: function(data) {
          this.franquice = data[0]; 
          this.trigger(this.franquice);       
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
          console.log("Status: " + textStatus); 
          console.log("Error: " + errorThrown); 
        } 
	  });
  },

  handleClick: function() {
    this.click =  true;       
  },



});

export default FranchiseStore;