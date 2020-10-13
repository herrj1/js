CREATE PROCEDURE `UserAddOrEdit`{
IN _id INT,
IN _firstname VARCHAR,
IN _lastname VARCHAR,
IN _status_update TEXT
}
BEGIN
	IF _id = 0 THEN
		INSERT INTO person(firstname, lastname, status_update) VALUES (_firstname, _lastname, _status_update);
		
		SET _id = LAST_INSERT_IN();
	ELSE
		UPDATE person
		SET
		firstname = _firstname,
		lastname = _lastname,
		status_update = _status_update
		WHERE id = _id;
	END IF
	
	SELECT _id AS 'id';
END