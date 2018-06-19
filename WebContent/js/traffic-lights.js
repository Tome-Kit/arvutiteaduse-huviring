/**
 * 
 */
class TrafficLights {
	turn(trafficLights){
		switch(trafficLights.color){
		case "red":{
			document.querySelector("div.Red").style.backgroundColor = "hsla(0, 100%, 50%, 1)";
			document.querySelector("div.Yellow").style.backgroundColor = "hsla(0, 100%, 0%, 1)";
			document.querySelector("div.Green").style.backgroundColor = "hsla(0, 100%, 0%, 1)";
			setTimeout(() => {
				this.turn({
					"color": "yellow",
					"toGreen": true
				})
			}, 3000);
			break;
		}
		case "yellow":
			{
			document.querySelector("div.Red").style.backgroundColor = "hsla(0, 100%, 0%, 1)";
			document.querySelector("div.Yellow").style.backgroundColor = "hsla(60, 100%, 50%, 1)";
			document.querySelector("div.Green").style.backgroundColor = "hsla(60, 100%, 0%, 1)";
			if(trafficLights.toGreen){
				setTimeout(() => {
					this.turn({
						"color": "green",
						"isBlinking": false
					})
				}, 3000);
			} else {
				setTimeout(() => {
					this.turn({
						"color": "red"
					})
				}, 3000);
			}
			break;
			}
		case "green":{
			document.querySelector("div.Red").style.backgroundColor = "hsla(0, 100%, 0%, 1)";
			document.querySelector("div.Yellow").style.backgroundColor = "hsla(60, 100%, 0%, 1)";
			document.querySelector("div.Green").style.backgroundColor = "hsla(120, 100%, 50%, 1)";
			let timeout = trafficLights.isBlinking ? 1000 : 3000;
			if (TrafficLights.counter > 2) {
				TrafficLights.counter = 0;
				setTimeout(() => {
					this.turn({
						"color": "yellow",
						"toGreen":false
					})
				}, timeout);
			} else {
				if (undefined === TrafficLights.counter) {
					TrafficLights.counter = 1;
				} else {
					TrafficLights.counter ++;
				}
				setTimeout(() => {
					this.turn({
						"color": "black",
						"toGreen":false
					})
				}, timeout);
			}
			break;
		}
		case "black":{
			document.querySelector("div.Red").style.backgroundColor = "hsla(0, 100%, 0%, 1)";
			document.querySelector("div.Yellow").style.backgroundColor = "hsla(60, 100%, 0%, 1)";
			document.querySelector("div.Green").style.backgroundColor = "hsla(120, 100%, 0%, 1)";
			setTimeout(() => {
				this.turn({
					"color": "green",
					"isBlinking": true,
					"toGreen":false
				})
			}, 1000);
			break;
		}
		default:{
			console.log("blinking yellow");
		}
		}
	}
}
trafficLights = new TrafficLights();
trafficLights.turn({
	"color": "red"
});
