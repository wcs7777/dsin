const hoursPerDay = 5;
const hourPrice = 2;
const workedDays = 10;
const discount = 0.15;
const gross = grossSalary(hoursPerDay, hourPrice, workedDays, discount);
const net = netSalary(gross, discount);

console.log(`
Horas por dia: ${hoursPerDay}
Preço da Hora: ${hourPrice}
Dias trabalhados: ${workedDays}
Desconto sobre o salário bruto: ${discount * 100}%
Salário Bruto: ${gross}
Salário Líquido: ${net}
`);

function netSalary(grossSalary, discount=0.15) {
	return grossSalary * discount;
}

function grossSalary(hoursPerDay, hourPrice, workedDays) {
	return hoursPerDay * hourPrice * workedDays;
}
