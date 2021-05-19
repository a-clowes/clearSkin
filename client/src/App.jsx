import React from 'react';
import SearchBar from './components/SearchBar.jsx';
import ProductList from './components/ProductList.jsx';

import Tesseract from 'tesseract.js';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      file: null,
    }

    this.onFileChangeHandler = this.onFileChangeHandler.bind(this);
    this.onFileUploadHandler = this.onFileUploadHandler.bind(this);
  }

  onFileChangeHandler (e) {
    this.setState({ file: e.target.files[0].name });
  }

  onFileUploadHandler (e) {
    e.preventDefault();

    console.log(this.state.file);

    Tesseract.recognize(
      this.state.file)
      .progress(packet => {
        console.info(packet)
        progressUpdate(packet)
      })
      .then(data => {
        console.log(data)
        progressUpdate({status: 'done', data: data })
      })
  }

  render () {
    return (
     <div>
       <h1>clearSkin</h1>
       <form>
          <label htmlFor="ingredient image">Upload an image of ingredients: </label>
          <input  type="file"
                  id="ingredientsImage" name="ingredientsImage"
                  onChange={this.onFileChangeHandler} />
            {/* Accepts bmp, jpg, png, pbm file types. */}
          <input
            type="submit"
            onClick={this.onFileUploadHandler}
            value="Upload Image"/>
       </form>
       <SearchBar />
       <ProductList />
     </div>
   );
  }
}

export default App;