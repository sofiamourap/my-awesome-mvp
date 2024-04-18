--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists sessions;
SET foreign_key_checks = 1;

--
-- Create Tables
--

CREATE TABLE sessions(
    id INT NOT NULL AUTO_INCREMENT, 
    weekday VARCHAR(100) not null, 
    duration INT not null, 
    description TEXT,
    mood INT not null,
    PRIMARY KEY (id)
    );
