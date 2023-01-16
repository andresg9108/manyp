"use strict";

var oUsersWidget = {};

document.addEventListener('DOMContentLoaded', (e) => {
});

/*
*/
oUsersWidget.load = () => {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then((oResponse) => { return oResponse.json(); })
	.then((oResponse) => {
		let oData = {
			'users': oResponse
		};
		oAppMain.loadTemplate('widget/users/users', '#users', oData);
	});
}