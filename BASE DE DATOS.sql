-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema misticbd
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema misticbd
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `misticbd` DEFAULT CHARACTER SET utf8 ;
USE `misticbd` ;

-- -----------------------------------------------------
-- Table `misticbd`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `misticbd`.`productos` (
  `Identificador` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NOT NULL,
  `Valor` INT NOT NULL,
  `Estado` VARCHAR(45) NOT NULL,
  `Descripcion` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`Identificador`),
  UNIQUE INDEX `Identifcador_UNIQUE` (`Identificador` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `misticbd`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `misticbd`.`usuarios` (
  `identificador` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `rol` VARCHAR(45) NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  `mail` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`identificador`),
  UNIQUE INDEX `identificador_UNIQUE` (`identificador` ASC) VISIBLE,
  UNIQUE INDEX `mail_UNIQUE` (`mail` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 27
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
