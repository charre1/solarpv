CREATE DATABASE solarPV;
GO
CREATE TABLE Donator (
    username VARCHAR(MAX),
    "password" VARCHAR(MAX),
);
CREATE TABLE Userinfo (
    Firstname VARCHAR(MAX),
	Middlename VARCHAR(MAX),
	Lastname VARCHAR(MAX),
	Gender VARCHAR(MAX),
	Company VARCHAR(MAX),
	dobday integer,
	dobmonth integer,
	dobyear integer,
	email VARCHAR(MAX),
	phone integer,
	address VARCHAR(MAX),
	city VARCHAR(MAX),
	"state" VARCHAR(MAX),
	zipcode VARCHAR(MAX),
);
CREATE TABLE payment (
    paymentID integer,
	contributionID integer,
	amountreceived integer,
	receiveddate date,
	paymentmethod VARCHAR(MAX),
);
CREATE TABLE contribution (
    ID VARCHAR(MAX),
	amount integer,
	duedate date,
	frequency VARCHAR(MAX),

);
CREATE TABLE company (
    company VARCHAR(MAX),

);