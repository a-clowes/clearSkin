import React from 'react';
import SearchBar from './components/SearchBar.jsx';
import ProductList from './components/ProductList.jsx';

import { createWorker } from 'tesseract.js';

const worker = createWorker({
  logger: m => console.log(m)
});

(async () => {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
  console.log(text);
  await worker.terminate();
})();

const App = () => (
  <div>
    <h1>clearSkin</h1>
    <input type="file" id="file-1" className="inputfile" />
    <img id="select-image" src="" />
    <div id="log">
      <span id="startPre">
        <a id="startLink" href="#">Click here to recognize text</a> or choose your own image
      </span>
    </div>
    <SearchBar />
    <ProductList />
  </div>
);

export default App;