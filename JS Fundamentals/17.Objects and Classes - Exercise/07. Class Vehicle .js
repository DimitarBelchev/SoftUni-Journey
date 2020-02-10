class vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.parts.quality = this.parts.engine * this.parts.power;
        this.fuel = fuel;
    }
    drive(fueloss) {
        this.fuel -= fueloss;

    }
}
solve([])