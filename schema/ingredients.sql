DROP TABLE IF EXISTS ingredients CASCADE;

CREATE TABLE ingredients (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  approved BOOLEAN
)