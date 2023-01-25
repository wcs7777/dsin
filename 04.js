const fullValue = 576;
const notes = [100, 50, 20, 10, 5, 2, 1];

console.log(`
Valor: ${fullValue}
Cédulas possíveis: ${notes.join(", ")}
`
);
Object
	.entries((decompose(fullValue, notes)))
	.sort(reverseSortDecomposed)
	.forEach(([note, quantity]) => {
		console.log(`${quantity} nota(s) de R$ ${note},00`);
	});

function decompose(value, factors) {
	const decomposed = notes.reduce((obj, note) => {
		return {
			[note]: 0,
			...obj,
		};
	}, {});
	let remainder = value;
	for (const factor of factors.sort(reverseSortNotes)) {
		while (remainder - factor >= 0) {
			decomposed[factor]++;
			remainder -= factor;
		}
	}
	return decomposed;
}

function reverseSortNotes(left, right) {
	return left > right ? -1 : right > left ? 1 : 0;
}

function reverseSortDecomposed([left], [right]) {
	return reverseSortNotes(parseInt(left), parseInt(right));
}
