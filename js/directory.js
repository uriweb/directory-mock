/**
 * File directory.js
 *
 * Here for demonstration purposes only
 */
 
(function(){

	"use strict";
	
	document.addEventListener("DOMContentLoaded", function(){
		initPermalinks();
		initUpdateProfileLink();
	});
	
	
	function initPermalinks() {
		var names = document.querySelectorAll(".person h2 a");

		names.forEach(function(n) {
			n.addEventListener("click", function(){
				alert("Go to a permalink.");
				event.preventDefault();
			});
		});

	}
	
	
	function initUpdateProfileLink() {
		var u = document.querySelector(".auth a.update");
		if(u) {
			u.addEventListener("click", function(){
				alert("Documentation for updating profile.");
				event.preventDefault();
			});
		}
	}
	
})();
