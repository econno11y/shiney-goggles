CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name varchar(255) NOT NULL,
  company varchar(255) NOT NULL,
  email varchar(255) NOT NULL UNIQUE,
  phone varchar(50) NOT NULL
);
