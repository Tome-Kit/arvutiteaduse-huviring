/**
 * This file contains the functionality of guessing a number.
 */
class GuessingNumber{
	constructor(){
		this.numberOfComputer = Math.floor(Math.random() * Math.floor(10));
	}
	play(){
		if (document.getElementById('number').value > this.numberOfComputer){
			document.getElementById('feedback').value= 'Arvuti arv on väiksem.';
		} else if (document.getElementById('number').value < this.numberOfComputer){
			document.getElementById('feedback').value = 'Arvuti arv on suurem.';
		}else{
			document.getElementById('feedback').value = 'Arvasid ära!';
		}
	}
}
let guessingNumber = new GuessingNumber();
document.getElementById('buttonForPlaying').onclick = function(){
	guessingNumber.play();
}