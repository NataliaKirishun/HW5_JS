(function () {
    'use strict';

    class Car {
        constructor(weight, fuelTankCapacity, capacity) {
            this.weight = weight;
            this.fuelTankCapacity = fuelTankCapacity;
            this.capacity = capacity;
        }

        get fuelConsumption() {
            return (this.weight + this.fuelTankCapacity) / (this.capacity * 4.8) + ' л/км';
        }

        get acceleration() {
            return (this.weight + this.fuelTankCapacity + 80) / 1000 * this.capacity / 50 + ' с';
        }

        get maxSpeed() {
            return parseFloat(this.acceleration) * this.capacity / 3.5 + ' км/ч';
        }
        race (distance) {
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
    };

    let car2 = new Car(3400, 200, 90);
    console.log('ES6');
    console.log(car2.fuelConsumption);
    console.log(car2.acceleration);
    console.log(car2.maxSpeed);
    console.log(car2);
    console.log(car2.race(1000));


}());

