"use strict";

var g_sRouteTemplate = 'src/template/';

$(function(){
	let oData = {};
	loadTemplate('header', 'header', oData)
	loadTemplate('body', 'section', oData)
	loadTemplate('footer', 'footer', oData)
});

/*
*/
function loadTemplate(sRouteTemplate, sTag, oData){
  let sRoute = g_sRouteTemplate+sRouteTemplate+'.hbs';
  let sTemplate = Hbs[sRoute](oData);
  let isTemplate = $(sTag).attr('data-template');
  isTemplate = (isTemplate == 'true');
  let sClassCss = $(sTag).attr('data-styles');
  if(isTemplate){
    $(sTag).removeClass();
    $(sTag).addClass(sClassCss);
    $(sTag).html(sTemplate);
  }
}