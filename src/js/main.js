"use strict";

var g_sRouteTemplate = 'src/template/';

$(function(){
});

/*
*/
function loadTemplate(sRouteTemplate, sTag, oData){
	let sRoute = g_sRouteTemplate+sRouteTemplate+'.hbs';
	let sTemplate = Hbs[sRoute](oData);
	let isTemplate = $(sTag).attr('data-template');
	if(isTemplate){
		$(sTag).html(sTemplate);
	}
}

// Start MyDesign

/*
*/
function myd_openFloatHeaderSearch(){
    $('.my-floatheader-search').addClass('is-active');
    $('.my-floatheader-search #search input').focus();
}

/*
*/
function myd_closeFloatHeaderSearch(){
    $('.my-floatheader-search').removeClass('is-active');
}

/*
*/
function myd_floatHeaderMenu1(){
    let oMenu = $(".my-floatheader-menu-1");
    let iTime = 400;

    if(oMenu.css('display') != 'none'){
        oMenu.removeClass('is-active');
    }else{
        oMenu.addClass('is-active');
    }
}


/*
*/
var autocompletedData = [
"ActionScript",
"AppleScript",
"Asp",
"BASIC",
"C",
"C++",
"Clojure",
"COBOL",
"ColdFusion",
"Erlang",
"Fortran",
"Groovy",
"Haskell",
"Java",
"JavaScript",
"Lisp",
"Perl",
"PHP",
"Python",
"Ruby",
"Scala",
"Scheme"
];
$(function(){
	$( "#myinput" ).autocomplete({
	source: autocompletedData
	});
	$( "#myinputm" ).autocomplete({
	source: autocompletedData
	});
});

// End MyDesign