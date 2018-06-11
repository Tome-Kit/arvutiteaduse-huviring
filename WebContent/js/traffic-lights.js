/**
 * 
 */
class TrafficLights {
	constructor(){
		this.light = "red";
	}
	turnRed(){
		document.querySelector("div.Red").style.backgroundColor = "hsla(0, 100%, 50%, 1)";
		document.querySelector("div.Yellow").style.backgroundColor = "hsla(0, 100%, 0%, 1)";
		document.querySelector("div.Green").style.backgroundColor = "hsla(0, 100%, 0%, 1)";
		setTimeout(() => {
			this.turnYellow()
		}, 3000);
	}
	turnYellow(){
		clearTimeout(this.timeout);
		document.querySelector("div.Red").style.backgroundColor = "hsla(0, 100%, 0%, 1)";
		document.querySelector("div.Yellow").style.backgroundColor = "hsla(60, 100%, 50%, 1)";
		document.querySelector("div.Green").style.backgroundColor = "hsla(60, 100%, 0%, 1)";
		setTimeout(() => {
			this.turnGreen()
		}, 3000);
	}
	turnGreen() {
		document.querySelector("div.Red").style.backgroundColor = "hsla(0, 100%, 0%, 1)";
		document.querySelector("div.Yellow").style.backgroundColor = "hsla(60, 100%, 0%, 1)";
		document.querySelector("div.Green").style.backgroundColor = "hsla(120, 100%, 50%, 1)";
		setTimeout(() => {
			this.turnYellow()
		}, 3000);
	}
}
trafficLights = new TrafficLights();
trafficLights.turnRed();
