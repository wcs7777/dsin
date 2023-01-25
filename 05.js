const brasil = "ABC1234";
const mercosul = "ABC1C34";

main(brasil);
main(mercosul);

function main(plate) {
	console.log(`Placa: ${plate}`);
	if (validPlate(plate)) {
		const converted = convertPlate(plate);
		console.log(`Versão: ${plateVersion(plate)}`);
		console.log(`Correspondente no ${plateVersion(converted)}: ${converted}`);
	} else {
		console.log("Formato inválido");
	}
	console.log();
}

function validPlate(plate) {
	return /^[A-Z]{3}\d[A-Z|\d]\d{2}$/.test(plate);
}

function plateVersion(plate) {
	return isDigit(plate.charAt(4)) ? "Brasil" : "Mercosul";
}

function convertPlate(plate) {
	const brazil   = "0123456789";
	const mercosul = "ABCDEFGHIJ";
	const changeIndex = 4;
	return [
		plate.slice(0, changeIndex),
		(
			plateVersion(plate) === "Brasil" ?
			mercosul.charAt(brazil.indexOf(plate.charAt(changeIndex))) :
			brazil.charAt(mercosul.indexOf(plate.charAt(changeIndex)))
		),
		plate.slice(changeIndex + 1),
	].join("");
}

function isDigit(value) {
	return "0123456789".includes(value);
}
