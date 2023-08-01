// ==UserScript==
// @name     
// @updateURL https://noads.top/adblocker.user.js
// @downloadURL https://noads.top/adblocker.user.js
// @include  https://microsoft365.com/*
// @version  1.1
// @run-at   document-end
// @grant    none
// @require  http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// ==/UserScript==
/*
*/
$(".officeHome__container").hide()
setInterval(function () {
    document.getElementsByClassName("btn btn-success btn-lg get-link")[0].click();
}, 2000);
