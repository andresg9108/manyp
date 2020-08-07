"use strict";

var g_sRouteTemplate = 'src/template/';
var oAppMain = {};

$(function(){
	var oData = {};
	oAppMain.loadTemplate('section1', '#section1', oData);
	oAppMain.loadTemplate('section2', '#section2', oData);
	oAppMain.loadTemplate('section3', '#section3', oData);
});

/*
*/
oAppMain.loadTemplate = function(sRouteTemplate, sTag, oData){
  var sRoute = g_sRouteTemplate+sRouteTemplate+'.hbs';
  var sTemplate = Hbs[sRoute](oData);
  var isTemplate = $(sTag).attr('data-template');
  isTemplate = (isTemplate == 'true');
  var sClassCss = $(sTag).attr('data-styles');
  if(isTemplate){
    $(sTag).removeClass();
    $(sTag).addClass(sClassCss);
    $(sTag).html(sTemplate);
  }
}