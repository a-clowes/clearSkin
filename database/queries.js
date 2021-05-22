const pool = require('./config.js');

const getApprovedProducts = (cb) => {
  const queryString = `SELECT
      id,
      name,
      brand,
      category,
    FROM products
    WHERE approved = true;`

  pool.query(queryString, (err, results) => {
    if (err) {
      cb(err);
    } else {
      cb(null, results);
    }
  })
}

const postProduct = ({ name, brand, category, ingredients }, cb) => {

  // parse ingredients
  function string_to_slug (str) {
    str = str.toLowerCase();
    str = str.replaceAll("/", ", ");
    str = str.replaceAll("\n", " ")
    str = str.replaceAll(".", "");
    let ingredients = str.split(", ");

    console.log("INGREDIENTS", ingredients);
    return ingredients;
  }

  string_to_slug(ingredients);

  // post prodct data to products table if product doesn't exist
  let postProductQueryStr = `INSERT INTO products (name, brand, category) VALUES ($1, $1, $1)
  ON CONFLICT (name)
  DO NOTHING`


  // if it's found update product
  pool.query(postProductQueryStr, [ name, brand, category, ingredients], (err, results) => {
    if (err) {
      throw err;
    } else {
      console.log(results);
    }
  })

  // // then post ingredients to ingredients table
  ingredients.forEach(ingredient => {
    pool.query(`INSERT INTO ingredients (name, approved) VALUES ($1, $1)
    ON CONFLICT (name)
    DO NOTHING`, [ingredient, true], (err, results) => {
      if (err) {
        throw err;
      } else {
        console.log(results);
      }
    })
  })

  // // insert all ingredient ids with product id into join table
  ingredients.forEach(ingredient => {
    pool.query(
      // get  product id
      // get ing id from ing table
      // insert into join table
      `INSERT INTO productIngredients (product_id, ingredient_id) `
    )
  })

  // if all product ingredients are true

  // // product approved is true

  // // otherwise product approved is false


  // // get results from product id
  // `SELECT * FROM products where name = $1`
};

module.exports = { postProduct, getApprovedProducts }