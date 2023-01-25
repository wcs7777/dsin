SELECT
	c.cdclicodigo AS 'CDCLICODIGO',
	c.cdclinome AS 'CDCLINOME',
	c.cdcliendereco AS 'CDCLIENDERECO',
	c.cdcliuf AS 'CDCLIUF',
	c.cdcliativo AS 'CDCLIATIVO',
FROM
	cdcliente AS c
WHERE
	c.cdcliuf = 'ES' AND
	c.cdcliativo = 'F';
