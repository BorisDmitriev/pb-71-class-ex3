class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    describe() {
        return `${this.name}, ${this.age} years old.`
    }
}

class Cylinder{
    constructor(height, radius){
        this.height = height
        this.radius = radius
    }

    getVolume() {
        return (Math.PI*this.radius*this.radius*this.height).toFixed(4)
    }
}

class Clock{
    constructor({ template }){
        this.template = template

    }

    start() {
        this.render();
      };

    render() {
        let date = new Date();
    
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        let output = this.template
          .replace('h', hours)
          .replace('m', mins)
          .replace('s', secs);
    
        console.log(output);
    }
}

let clock = new Clock({ template: 'h:m:s' })
clock.start()


class TV{
    constructor( brand, channel = 1, volume = 50){
        this.brand = brand
        this.channel = channel
        this.volume = volume
    }

    increaseVolume(){
        if( this.volume <= 100 ) this.volume+=10;
    }

    decreaseVolume(){
        if( this.volume >= 0 ) this.volume-=10;
    }

    getNewChannel(){
        this.channel = Math.floor( Math.random()*50 + 1) 
    }

    resetTV(){
        this.channel = 1
        this.volume = 50 
    }

    getTVstatus(){
        return `${this.brand} at channel ${this.channel}, volume ${this.volume}`
    }
}