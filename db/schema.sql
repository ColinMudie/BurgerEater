CREATE DATABASE IF NOT EXISTS burger_db;
USE burger_db;

CREATE TABLE burgers
(
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`eaten` BOOLEAN DEFAULT false,
	PRIMARY KEY (`id`)
);
