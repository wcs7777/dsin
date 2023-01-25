const a = 2;
const b = 5;
const c = 3;
const d = 6;
const valid = validValues(a, b, c, d);

console.log(`
a: ${a}
b: ${b}
c: ${c}
d: ${d}
Válores${valid ? " " : " não "}aceitos
`);

function validValues(a, b, c, d) {
	return (
		b > c &&
		d > a &&
		c + d > a + b &&
		isEven(a) &&
		true
	);
}

function isEven(x) {
	return x % 2 == 0;
}
