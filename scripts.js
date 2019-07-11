/*"Используя es6 классы и наследование решить следующую задачу:
спроектировать 2 вида авто - легковая машина и металорежущий станок.

Машина должна содержать в себе следующий функционал: состояние двигателя(работает сейчас или нет),
размер бака, расход топлива, текущее значение залитого топлива.
Также функции, которые:
1) заправляют бак на определенное количество литров
2) вычисляют текущее значение залитого топлива
3) вычисляют время которое может проехать авто
4) функция: поехали(запускает двигатель, вычисляет сколько времени будет ехать машина, запускает таймер в
секундах сколько она может проехать и выводит сообщение сколько авто было в пути по окончанию поездки.
Также функция должна возвращать включен ли двигатель или нет)
5) функция: остановить авто(останавливает двигатель если он запущен, обнуляет таймер поездки.
Также функция должна возвращать включен ли двигатель или нет)

Станок должен содержать в себе следующий функционал: состояние двигателя(работает сейчас или нет),
состояние инструмента(есть или нет), состояние детали(есть или нет).
Функции:
1) установить/снять инструмент
2) установить/снять деталь
3) узнать установлен ли инструмент
4) узнать есть ли деталь
5) начать обработку детали(если установлен инструмент и деталь, включает двигатель, выводит сообщение что
обратотка детали начата. Также функция должна возвращать включен
ли двигатель или нет)
6) остановить обработку(если обработка начата, останавливает двигатель. Также функция должна возвращать
включен ли двигатель или нет)

Проанализировать общий функционал и спроектировать общую сущность(техника) для обеих видов авто.
Общее состояние и функции должны находится в этой сущности."
*/

class Engine {
    constructor(engine) {
        this.engine = engine;
    }

    startEngine() {
        this.engine = true;
    }

    stopEngine() {
        this.engine = false;
    }
}



class CarCharacteristic extends Engine {
    constructor(tank, fuelConsumption) {
        super(false);
        this.tank = tank;
        this.fuelConsumption = fuelConsumption;
        this.fuel = 0;
    }

    setFuel(fuel) {
        if (fuel > 0 && fuel < this.tank && typeof fuel === "number") {
            this.fuel = fuel;
        } else {
            alert('Укажите адекватное значение топлива в баке');
        }
    };

    getFuel() {
        return this.fuel;
    };

    travelTime() {
        return this.getFuel() / this.fuelConsumption;
    }

    timeoutCallback() {
        this.stopEngine();
        const time = this.travelTime();
        alert('Машина проедет: ' + time + 'сек.');
    }

    timer() {
        const time = this.travelTime();
        this.timerId = setTimeout(this.timeoutCallback, time * 1000);
    }

    stopTimer() {
        clearTimeout(this.timerId);
    }

    go() {
        this.startEngine();
        this.timer();
        this.stopEngine();
        alert('Двигатель: ' + this.engine);
    }

    stop() {
        if (this.engine) {
            this.stopEngine();
        } else {
            alert('Двигатель итак остановлен');
        }
        this.stopTimer();
        alert('Двигатель ' + this.engine);
    }
}

const car = new CarCharacteristic(200, 5);
const {setFuel, go, stop} = car;
setFuel(50);
go();
stop();



class machineCharacteristic extends Engine {
    constructor() {
        super(false);
    }

    setTool(tool) {
        this.tool = tool;
    }

    setDetail(detail) {
        this.detail = detail;
    }

    getTool() {
        return this.tool;
    }

    getDetail() {
        return this.detail;
    }

    go() {
        if (this.getTool() && this.getDetail()) {
            this.startEngine();
            alert('Двигатель: ' + this.engine);
        } else {
            alert("Комплектующей нет");
        }
    }

    stop() {
        if (this.engine) {
            this.stopEngine();
            alert('Двигатель остановлен');
        }
    }
}

const machine = new machineCharacteristic();
const {setDetail, setTool, go: goMachine, stop: stopMachine} = machine;
setDetail(true);
setTool(true);
goMachine();
stopMachine();