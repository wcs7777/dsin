const quantity = 300;

for (let number = 1; number < quantity; ++number) {
	console.log(`número: ${number}`);
	if (isPerfect(number)) {
		console.log("número perfeito");
	}
	console.log(`número ${isEven(number)? "par" : "ímpar"}`);
	if (isPrime(number)) {
		console.log("número primo");
	}
	console.log();
}

function isPerfect(number) {
	const converted = number.toString();
	let left = 0;
	let right = converted.length - 1;
	while (left <= right) {
		if (converted[left] !== converted[right]) {
			return false;
		}
		++left;
		--right;
	}
	return true;
}

function isEven(number) {
	return number % 2 === 0;
}

function isPrime(number) {
	if (isEven(number)) {
		return number === 2;
	} else if (number < 2) {
		return false;
	}
	for (let factor = 3; factor < Math.sqrt(number); factor += 2) {
		if (number % factor === 0) {
			return false;
		}
	}
	return true;
}
