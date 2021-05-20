import React from 'react';
import SearchBar from './components/SearchBar.jsx';
import ProductList from './components/ProductList.jsx';
import axios from 'axios';
import Tesseract from 'tesseract.js';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      brand: '',
      category: '',
      file: null,
      ingredients: '',
      approved: '',
      loading: null
    }

    this.onFileChangeHandler = this.onFileChangeHandler.bind(this);
    this.onFileUploadHandler = this.onFileUploadHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onFileChangeHandler (e) {
    this.setState({ file: e.target.files[0] });
  }

  onFileUploadHandler (e) {
    e.preventDefault();

    console.log(this.state.file);
    this.setState({ loading: true });
    Tesseract.recognize(
      this.state.file)
      .then(result => {
        this.setState({ ingredients: result.data.text });

        axios.post('/products', {
          name: this.state.name,
          brand: this.state.brand,
          category: this.state.category,
          ingredients: this.state.ingredients
        })
        .then(res => {
          this.setState({
            loading: false,
            approved: res.body
          })
        })
        .catch(err => {
          throw err;
        })
      })

  }

  render () {
    return (
     <div>
       <h1>clearSkin</h1>
       <form>
          <label htmlFor="ingredient image">
            <h3>Upload an image of ingredients:</h3>
          </label>
          <label>Product Name: </label>
          <input  type="text"
                  name="name"
                  onChange={this.onChangeHandler}
                  value={this.state.name}
                  required />
          <label>Brand: </label>
          <input  type="text"
                  name="brand"
                  onChange={this.onChangeHandler}
                  value={this.state.brand}
                  required />
          <label>Category: </label>
          <input  type="text"
                  name="category"
                  onChange={this.onChangeHandler}
                  value={this.state.category}
                  required />
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