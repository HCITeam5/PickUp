CREATE TABLE users (
  id       INT(11)      NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(15)  NOT NULL,
  email    VARCHAR(100) NOT NULL,
  password BINARY(60)   NOT NULL
);