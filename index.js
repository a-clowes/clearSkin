// main make up page
  // class for individual product "css-12egk0t"
  // <a class="css-ix8km1" aria-label="MAKE UP FOR EVER Ultra HD Self-Setting Concealer" href="/product/ultra-hd-concealer-P439652?icid2=skugrid:p439652" data-comp="LazyLoad"></a>



const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  await page.goto('https://www.sephora.com/shop/face-makeup?pageSize=300', { waitUntil: 'networkidle0'});

  let data = await page.evaluate(() => {
    let
  })

})();