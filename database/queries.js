const pool = require('./config.js');

const getApprovedProducts = (req, res) => {
  const queryString = `SELECT
      id,
      name,
      brand,
      category,
      banned,
    FROM products   `
}