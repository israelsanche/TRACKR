DROP DATABASE IF EXISTS TRACKRdb;
CREATE DATABASE TRACKRdb;

USE TRACKRdb;

CREATE TABLE Daily_Summary(
ID INT NOT NULL AUTO_INCREMENT,
Username VARCHAR (50) NOT NULL,
Fat DECIMAL(5,2),
Protein DECIMAL(5,2),
Calories INT NULL,
Carbohydrates DECIMAL(5,2),
PRIMARY KEY (ID)
);

INSERT INTO Daily_Summary (ID,Username,Fat,Protein,Calories,Carbohydrates)
VALUES (1,"Hoff",10,5,5,5);

INSERT INTO Daily_Summary (ID,Username,Fat,Protein,Calories,Carbohydrates)
VALUES (2,"Michael",11,5,5,5);

INSERT INTO Daily_Summary (ID,Username,Fat,Protein,Calories,Carbohydrates)
VALUES (3,"Jo",12,5,50,5);


