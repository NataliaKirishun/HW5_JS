(function () {
    'use strict';

    function Car(weight, fuelTankCapacity, capacity) {
        this.weight = weight;
        this.fuelTankCapacity = fuelTankCapacity;
        this.capacity = capacity;
    };

    Object.defineProperties(Car.prototype, {
        fuelConsumption: {
            get() {
                return (this.weight + this.fuelTankCapacity) / (this.capacity * 4.8) +' л/км';
            }
        },
        acceleration: {
            get() {
                return (this.weight + this.fuelTankCapacity + 80) / 1000 * this.capacity / 50 + ' с';
            }
        },
        maxSpeed: {
            get () {
                return parseFloat(this.acceleration) * this.capacity / 3.5 + ' км/ч';
            }
        }
    });

    Car.prototype.race = function (distance) {
        let time = distance / parseFloat(this.maxSpeed);
        let hh = Math.floor(time),
            mm = Math.floor((time - hh) * 60),
            ss = Math.floor(((time - hh) * 60 - mm) * 60),
            SSS = Math.floor((((time - hh) * 60 - mm) * 60 - ss) * 1000);
        if (hh < 10) hh = '0' + hh;
        if (mm < 10) mm = '0' + mm;
        if (ss < 10) ss = '0' + ss;
        if (SSS < 10) ss = '00' + ss;
        if (SSS < 100) ss = '0' + ss;
        return hh + ':' + mm + ':' + ss + '.' + SSS;
    };

    let car1 = new Car(3000, 200, 90);
    console.log('ES5');
    console.log(car1.fuelConsumption);
    console.log(car1.acceleration);
    console.log(car1.maxSpeed);
    console.log(car1);
    console.log(car1.race(1000));

}());

