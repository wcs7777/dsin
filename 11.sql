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
