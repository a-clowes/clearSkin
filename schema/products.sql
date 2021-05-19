DROP TABLE IF EXISTS products CASCADE;


CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR (200),
  brand VARCHAR (200),
  category VARCHAR (50)
  banned BOOLEAN
);

