/* A */
SELECT
	c.cdclinome AS 'Cliente',
	a.lcadatahoraatend AS 'Data e Hora do Atendimento',
	f.cdfnome AS 'Atendido por'
FROM
	cdclicodigo AS c
INNER JOIN
	lcatendimento AS a ON c.cdclicodigo = a.lcacliente
INNER JOIN
	cdfuncionario AS f ON f.cdfcodigo = a.lcafuncionario
ORDER BY
	c.cdclinome;

/* B (Não tinha feito por falta de tempo) */
SELECT
	c.cdclicodigo AS 'Código do Cliente',
	c.cdclinome AS 'Nome do Cliente'
FROM
	cdclicodigo AS c
INNER JOIN
	lcatendimento AS a ON c.cdclicodigo = a.lcacliente
GROUP BY
	c.cdclicodigo,
	c.cdclinome
HAVING
	COUNT(*) > 3;


/* C (Não tinha feito por falta de tempo) */
SELECT
	c.cdclinome AS 'Cliente',
	a.lcadatahoraatend AS 'Data e Hora do Atendimento'
FROM
	cdclicodigo AS c
INNER JOIN
	lcatendimento AS a ON c.cdclicodigo = a.lcacliente
WHERE
	YEAR(a.lcadatahoraatend) = 2011 AND
	(MONTH(a.lcadatahoraatend) < 3 OR MONTH(a.lcadatahoraatend) > 6);
