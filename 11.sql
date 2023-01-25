SELECT
	c.cdclinome AS 'Cliente',
	a.lcadatahoraatend AS 'Data e Hora do Atendimento',
	f.cdfnome AS 'Atendido por'
FROM
	cdclicodigo AS c
INNER JOIN
	lcatendimento AS l ON c.cdclicodigo = l.lcacliente
INNER JOIN
	cdfuncionario AS f ON f.cdfcodigo = l.lcafuncionario
ORDER BY
	c.cdclinome;
