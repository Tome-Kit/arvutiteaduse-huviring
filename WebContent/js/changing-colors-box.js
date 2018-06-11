/**
 * 
 */
'use strict';
class Box{
	constructor(classOfBox){
		this.color = 0;
		this.saturation = 0;
		this.lightness = 0;
		this.alpha = 0;
		this.ascending = true;
		this.classOfBox = classOfBox;
	}
	change(){
		if(this.lightness > 99){
			this.ascending = false;
		} else if (this.lightness < 1){
			this.ascending = true;
		}
		if(this.ascending){
			this.color += 3.6;
			this.saturation +=1;
			this.lightness+=1;
			this.alpha += 0.01;
		}
		else{
			this.color -= 3.6;
			this.saturation -=1;
			this.lightness-=1;
			this.alpha -= 0.01;
		}
		switch(this.classOfBox){
		case "div.Color":{
			document.querySelector("div.Color").style.backgroundColor = `hsla(${this.color}, 100%, 50%, 1.0)`;
			break;
		}
		case "div.Saturation":{
			document.querySelector("div.Saturation").style.backgroundColor = `hsla(0, ${this.saturation}%, 50%, 1.0)`;
			break;
		}
		case "div.Lightness":{
			document.querySelector("div.Lightness").style.backgroundColor = `hsla(0, 100%, ${this.lightness}%, 1.0)`;
			break;
		}
		case "div.Alpha": {
			document.querySelector("div.Alpha").style.backgroundColor = `hsla(0, 100%, 50%, ${this.alpha})`;
			break;
		}
		default: {
			document.querySelector("div.Alpha").innerHTML = "Vale klass!";
		}
		}
	}
}
let boxColor = new Box("div.Color");
let boxSaturation = new Box("div.Saturation");
let boxLightness = new Box("div.Lightness");
let boxAlpha = new Box("div.Alpha");
setInterval(function() { 
	boxColor.change();
	boxSaturation.change();
	boxLightness.change();
	boxAlpha.change();
}, 100);