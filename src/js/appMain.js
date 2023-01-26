"use strict";

var g_sRouteTemplate = 'src/template/';
var oAppMain = {};

/*
*/
oAppMain.loadTemplate = (sRouteTemplate, sTag, oData) => {
    let oElement = document.querySelector(sTag);

    if(oElement !== null){
        let sRoute = `${g_sRouteTemplate}${sRouteTemplate}.hbs`
        let sTemplate = Hbs[sRoute](oData);
        let isTemplate = (oElement.getAttribute('data-template') === 'true');
        let sClassCss = oElement.getAttribute('data-styles');

        sClassCss = (sClassCss !== null) ? sClassCss : '';

        if(isTemplate){
            oElement.setAttribute('class', '');
            oElement.setAttribute('class', sClassCss);
            oElement.innerHTML = sTemplate;
        }
    }
}