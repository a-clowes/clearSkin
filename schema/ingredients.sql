DROP TABLE IF EXISTS ingredients;

CREATE TABLE ingredients (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  banned BOOLEAN
)