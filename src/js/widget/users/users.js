"use strict";

var oUsersWidget = {};

$(function(){
});

/*
*/
oUsersWidget.load = function(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(function(oResponse){ return oResponse.json(); })
	.then(function(oResponse){
		var oData = {
			'users': oResponse
		};
		oAppMain.loadTemplate('widget/users/users', '#users', oData);
	});
}