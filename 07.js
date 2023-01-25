console.log(format("DSIN", "TECNOLOGIA DA INFORMAÇÃO"));

function format(
	title,
	subtitle,
	ornament="|",
	ornamentQuantity=2,
	padding=4,
) {
	const titleIsGreater = title.length > subtitle.length;
	const maxLength = Math.max(title.length, subtitle.length);
	const lesserSectionPadding = (
		(maxLength - Math.min(title.length, subtitle.length)) / 2 + padding
	);
	const nonSectionLength = maxLength + padding * 2;
	const formatted = [];
	formatted.push(
		surroundOrnament(
			ornament.repeat(nonSectionLength), ornament, ornamentQuantity
		)
	);
	formatted.push(
		surroundOrnament(" ".repeat(nonSectionLength), ornament, ornamentQuantity)
	);
	formatted.push(surroundOrnament(
		surroundOrnament(
			title,
			" ",
			titleIsGreater ? padding : lesserSectionPadding
		),
		ornament,
		ornamentQuantity,
	));
	formatted.push(surroundOrnament(
		surroundOrnament(
			subtitle,
			" ",
			titleIsGreater ? lesserSectionPadding : padding
		),
		ornament,
		ornamentQuantity,
	));
	formatted.push(
		surroundOrnament(" ".repeat(nonSectionLength), ornament, ornamentQuantity)
	);
	formatted.push(
		surroundOrnament(
			ornament.repeat(nonSectionLength), ornament, ornamentQuantity
		)
	);
	return formatted.join("\n");
}

function surroundOrnament(text, ornament, quantity=2) {
	return ornament.repeat(quantity) + text + ornament.repeat(quantity);
}
