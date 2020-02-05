"use strict";
class Dog {
    constructor() {
	console.info("Auh");
	document.getElementById("buttonForAnswering").onclick =
	    function() {
		Dog.answer();
	    };
    }
    static answer() {
	document.getElementById("answer").innerHTML = "Kas su nimi on tõesti " + document.getElementById("name").value "?";
    }
}
}
let dog = new Dog();


