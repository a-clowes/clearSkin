// // main make up page
//   // class for individual product "css-12egk0t"
//   // <a class="css-ix8km1" aria-label="MAKE UP FOR EVER Ultra HD Self-Setting Concealer" href="/product/ultra-hd-concealer-P439652?icid2=skugrid:p439652" data-comp="LazyLoad"></a>

//   // https://www.sephora.com/product/ultra-hd-concealer-P439652?icid2=skugrid:p439652

//   const fs = require('fs');
//   const puppeteer = require('puppeteer');

//   (async () => {
//     const browser = await puppeteer.launch({headless:false});
//     const page = await browser.newPage();

//     await page.goto('https://www.sephora.com/product/ultra-hd-concealer-P439652?icid2=skugrid:p439652', { waitUntil: 'networkidle0'});

//     let data = await page.evaluate(() => {

//       class="css-1ue8dmw eanm77i0"

//       let ingredients = document.querySelectorAll("div > br");

//       console.log("INGREDIENTS", ingredients)

//       return ingredients;

//     })

//     console.log(data);

//     fs.writeFile('ingredients.json', JSON.stringify(data), err => {
//       if (err) throw err;
//       console.log('Saved')
//     })

//     console.log(data);


//     await browser.close();

//   })();