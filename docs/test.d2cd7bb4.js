parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"HdJB":[function(require,module,exports) {
var e,n=0,t=0,r=!1,c=!1,s=0,a=document.getElementById("user-score"),i=document.getElementById("computer-score"),o=document.querySelector(".scoreboard"),u=document.querySelector(".result > p"),l=document.getElementById("r"),d=document.getElementById("p"),m=document.getElementById("s"),p=document.querySelector("#language");if("esp"===p.value){var f=document.querySelector(".badge__user"),g=document.querySelector(".badge__comp");f.innerHTML="Tú",g.innerHTML="PC",u.innerHTML="Comienza el juego"}function v(e){return"eng"===p.value?"r"===e?"Rock":"p"===e?"Paper":"Scissors":"esp"===p.value?"r"===e?"Piedra":"p"===e?"Papel":"Tijeras":void 0}function L(e,o){n++,s++,r=!0,c=!1,a.innerHTML=n,i.innerHTML=t,"eng"===p.value?u.innerHTML="".concat(v(e)," beats ").concat(v(o)," You Win!"):"esp"===p.value&&(u.innerHTML="".concat(v(e)," le gana a ").concat(v(o)," tu ganas!"));var l=document.getElementById(e);l.classList.add("winningStyles"),setTimeout(function(){return l.classList.remove("winningStyles")},300)}function y(e,o){t++,s=0,r=!1,c=!1,a.innerHTML=n,i.innerHTML=t,"eng"===p.value?u.innerHTML="".concat(v(e)," beats ").concat(v(o)," You Lose!"):"esp"===p.value&&(u.innerHTML="".concat(v(e)," pierde contra ").concat(v(o)," tu pierdes"));var l=document.getElementById(e);l.classList.add("losingStyles"),setTimeout(function(){return l.classList.remove("losingStyles")},300)}function T(e,n){"eng"===p.value?u.innerHTML="".concat(v(e)," equals ").concat(v(n)," it's a draw!"):"esp"===p.value&&(u.innerHTML="".concat(v(e)," es igual que ").concat(v(n)," empate!"));var t=document.getElementById(e);t.classList.add("drawStyles"),r=!1,s=0,c=!0,setTimeout(function(){return t.classList.remove("drawStyles")},300)}function M(){return["r","p","s"][Math.floor(3*Math.random())]}function H(e,n){switch(e+n){case"rs":case"pr":case"sp":L(e,n);break;case"rp":case"ps":case"sr":y(e,n);break;case"rr":case"pp":case"ss":T(e,n)}}function S(a){if(s>3){var i=M();e=a,H(a,i)}else if(0===n&&0===t){e=a,H(a,"r")}else if(!0===c){var o=M();e=a,H(a,o)}else if(!1===r){if("r"===e){e=a,H(a,"r")}else if("p"===e){e=a,H(a,"p")}else if("s"===e){e=a,H(a,"s")}}else if(!0===r)if("r"===e){e=a,H(a,"p")}else if("p"===e){e=a,H(a,"s")}else if("s"===e){e=a,H(a,"r")}}function E(){l.addEventListener("click",function(){return S("r")}),d.addEventListener("click",function(){return S("p")}),m.addEventListener("click",function(){return S("s")})}E();
},{}]},{},["HdJB"], null)
//# sourceMappingURL=test.d2cd7bb4.map