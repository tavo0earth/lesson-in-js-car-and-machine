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
}

class CarCharacteristic extends Engine {
    constructor(engine, tank, fuelConsumption) {
        super(false);
        this.tank = tank;
        this.fuelConsumption = fuelConsumption;
        this.fuel = 0;
    }

    isEngineStopped () {
        this.engine = false;
        return this.engine
    }

    startEngine() {
        this.engine = true;
        return this.engine
    }

    stopEngine() {
        this.engine = false;
        return this.engine
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

    travelTime () {
        return this.getFuel() / this.fuelConsumption;
    }

    timer () {
        const time = this.travelTime ();
        this.timerId = setTimeout(function(){ alert('Машина проедет: ' + time + 'сек.'); }, time * 1000);
    }

    stopTimer () {
        clearTimeout(this.timerId);
    }

    go() {
        this.engine = this.startEngine();
        this.timer();
        this.stopEngine();
        alert('Двигатель: ' + this.engine);
    }

    stop() {
        if (this.engine) {
            this.engine = this.stopEngine();
        } else {
            alert('Двигатель итак: ' + this.isEngineStopped());
        }
        this.stopTimer();
        alert('Двигатель: ' + this.engine);
    }
}

const car = new CarCharacteristic(false, 200, 5);
car.setFuel(50);

car.go();
car.stop();


/*
class machineCharacteristic {
constructor (engine) {
this.engine = engine;
}

setTool (tool) {
this.tool = tool;
}

setDetail (detail) {
this.tool = detail;
}

getConditionTool {
return this.tool;
}

getConditionDetail {
return this.tool;
}

}

const machine = new machineCharacteristic(true);

machine.setTool(true);
machine.setDetail(true);

 */