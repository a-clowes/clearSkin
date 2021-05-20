const pool = require('./config.js');

const getApprovedProducts = (req, res) => {
  const queryString = `SELECT
      id,
      name,
      brand,
      category,
    FROM products
    WHERE approved = true;`
}

const postProduct = (product, cb) => {

  // parse ingredients
  function string_to_slug (str) {
    str = str.toLowerCase();
    str = str.replaceAll("/", ", ");
    str = str.replaceAll("\n", " ")
    let ingredients = str.split(", ");

    console.log("INGREDIENTS", ingredients);
  }

  string_to_slug(product.ingredients);

  cb();
  // post prodct data to products table if product doesn't exist
  // let postProductQuery = `INSERT INTO products (name, brand, category) VALUES ($1, $1, $1)
  // ON CONFLICT (name)
  // SELECT * FROM products where name = $1` // res.send

  // // then post ingredients to ingredients table
  // ingredients.forEach(ingredient => {
  //   `INSERT INTO ingredients (name, approved) VALUES ($1, $1)
  //   ON CONFLICT (name)
  //   DO NOTHING`

  // })

  // // insert all ingredient ids with product id into join table

  // // if all product ingredients are true

  // // product approved is true

  // // otherwise product approved is false


  // // get results from product id
  // `SELECT * FROM products where name = $1`
};

module.exports = { postProduct, getApprovedProducts }