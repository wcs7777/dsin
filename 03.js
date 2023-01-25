const manufacturing = 200;
const distributor = 12.5;
const tax = 33;
const discount = 5;
const car = carValue(manufacturing, distributor, tax);
const price = salePrice(car, true, discount);

console.log(`
valor de Venda: ${price}
Custo de Fabricação: ${manufacturing}
Porcentagem do Distribuidor: ${distributor}%
Valor do Distribuidor: ${distributorValue(manufacturing, distributor)}
Impostos: ${tax}%
Valor dos Impostos: ${taxValue(manufacturing, tax)}
Valor do Carro: ${car}
Desconto: ${discount}%
Valor do Desconto: ${discountValue(car, discount)}
`);

function distributorValue(manufacturingCost, percentage) {
	return percentageValue(manufacturingCost, percentage);
}

function taxValue(manufacturingCost, percentage) {
	return percentageValue(manufacturingCost, percentage);
}

function discountValue(carValue, percentage) {
	return percentageValue(carValue, percentage);
}

function carValue(manufacturingCost, distributorPercentage, taxPercentage) {
	return (
		manufacturingCost +
		distributorValue(manufacturingCost, distributorPercentage) +
		taxValue(manufacturingCost, taxPercentage) +
		0
	);
}

function salePrice(carValue, inCash, discountInCash) {
	return (
		inCash ?
		carValue - discountValue(carValue, discountInCash) :
		carValue
	);
}

function percentageValue(value, percentage) {
	return value * percentage / 100;
}

/*
custo de fábrica
porcentagem do distribuidor
impostos
desconto
*/