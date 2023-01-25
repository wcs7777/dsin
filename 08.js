for (let sides = 1; sides < 10; ++sides) {
	console.log(`Sides: ${sides}`);
	console.log(squareToString(snailSquare(sides), sides));
}

function snailSquare(side) {
	let index = 0;
	let value = 2;
	let limit = side;
	const lastValue = side ** 2 * 2;
	const square = [];
	const shouldContinue = () => value <= lastValue;
	while (shouldContinue()) {
		repeatFn(limit, shouldContinue, () => {
			square[index] = value;
			index++;
			value += 2;
		});
		if (!shouldContinue()) {
			break;
		}
		--limit;
		--index;
		repeatFn(limit, shouldContinue, () => {
			index += side;
			square[index] = value;
			value += 2;
		});
		if (!shouldContinue()) {
			break;
		}
		repeatFn(limit, shouldContinue, () => {
			--index;
			square[index] = value;
			value += 2;
		});
		if (!shouldContinue()) {
			break;
		}
		--limit;
		repeatFn(limit, shouldContinue, () => {
			index -= side;
			square[index] = value;
			value += 2;
		});
		if (!shouldContinue()) {
			break;
		}
		++index;
	}
	return square;
}

function repeatFn(quantity, shouldContinue, fn) {
	for (let i = 0; shouldContinue(i) && i < quantity; ++i) {
		fn(i);
	}
}

function squareToString(square, side) {
	const out = [];
	for (let i = 0; i < side ** 2; ++i) {
		out.push(square[i].toString().padStart(4, " "));
		if ((i + 1) % side === 0) {
			out.push("\n");
		}
	}
	return out.join("");
}
