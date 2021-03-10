CREATE DATABASE IF NOT EXISTS burger_db;
USE burger_db;

CREATE TABLE burgers
(
	`id` INT AUTO_INCREMENT NOT NULL ,
	`name` varchar(255) NOT NULL,
	`eaten` BOOLEAN DEFAULT false,
	PRIMARY KEY (`id`)
);
