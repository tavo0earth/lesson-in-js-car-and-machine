class carCharacteristic {
    constructor(engine, tank, fuel, fuelNow) {
        this.engine = engine;
        this.tank = tank;
        this.fuel = fuel;
        this.fuelNow = fuelNow;
    }

    motor () {
        if (this.engine === true) {
            return 'Включен'
        } else {
            return 'Выключен'
        }
    }

    go() {
        if (this.motor () === 'Включен') {
            alert("Двигатель: " + this.motor());
            alert("Бак заполнен на: " + this.fuelNow + "л.");
            alert("Машина проедет: " + this.fuelNow / 100 * 60 * 60 + "с.")
        } else {
            alert("Двигатель: " + this.motor());
        }
    }
}

const car = new carCharacteristic(true, 200, 5, 100);

car.go();
