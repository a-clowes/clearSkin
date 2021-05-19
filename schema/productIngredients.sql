DROP TABLE IF EXISTS productIngredients;

CREATE TABLE productIngredients (
  product_id int REFERENCES products(id),
  ingredient_id int REFERENCES ingredients(id),
  constraint id PRIMARY KEY (product_id, ingredient_id)
)