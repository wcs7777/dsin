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
	const paddings = " ".repeat(padding);
	const ornaments = ornament.repeat(ornamentQuantity);
	const lesserSectionPaddingLength = (
		(maxLength - Math.min(title.length, subtitle.length)) / 2
	);
	const leftLesserSectionPadding = (
		" ".repeat(lesserSectionPaddingLength) +
		paddings +
		""
	);
	const rightLesserSectionPadding = (
		leftLesserSectionPadding +
		(Number.isInteger(lesserSectionPaddingLength) ? "" : " ") +
		""
	);
	const border = ornament.repeat(maxLength + padding * 2);
	const space = paddings + " ".repeat(maxLength) + paddings;
	return [
		border,
		space,
		(
			titleIsGreater ?
			surroundWith(title, paddings) :
			leftLesserSectionPadding + title + rightLesserSectionPadding
		),
		(
			titleIsGreater ?
			leftLesserSectionPadding + subtitle + rightLesserSectionPadding :
			surroundWith(subtitle, paddings)
		),
		space,
		border,
	]
		.map((line) => ornaments + line + ornaments)
		.join("\n");
}

function surroundWith(text, surroundText, quantity=1) {
	const border = surroundText.repeat(quantity);
	return border + text + border;
}
