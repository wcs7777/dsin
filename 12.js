class Duck {
	constructor(name, currentLocation) {
		this._name = name;
		this._currentLocation = currentLocation;
	}

	get name() {
		return this._name;
	}

	set currentLocation(location) {
		this._currentLocation = location;
	}

	get currentLocation() {
		return this._currentLocation;
	}

	makeSound() {
		return "quak";
	}

	shouldFlee(predatorLocation) {
		return Math.abs(this.currentLocation - predatorLocation) < 10;
	}
}
