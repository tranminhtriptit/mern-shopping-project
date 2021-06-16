import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import "./styles.scss"
import LoadingBox from 'components/LoadingBox';
import MessageBox from 'components/MessageBox';
import { createProduct } from 'actions/product.action';

function CreateProductScreen(props) {
  const [name, setName] = useState("")
  const [brand, setBrand] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [countInStock, setCountInStock] = useState("")
  const [selectedFile, setSelectedFile] = useState(null)

  const productCreate = useSelector(state => state.productCreate)
  const { loading, success, error } = productCreate

  const dispatch = useDispatch()

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const data = new FormData()
    data.append("name", name)
    data.append("brand", brand)
    data.append("category", category)
    data.append("description", description)
    data.append("price", Number(price))
    data.append("countInStock", Number(countInStock))
    data.append("productImage", selectedFile)

    dispatch(createProduct(data))
  }

  return (
    <div className="create-product-screen">
      <form onSubmit={handleFormSubmit}>
        <div>
          <h1>Create Product</h1>
        </div>

        {loading && <LoadingBox />}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {success && <MessageBox>Product created completely</MessageBox>}

        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            required
            onChange={e => setName(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="brand">Brand</label>
          <input
            type="text"
            id="brand"
            placeholder="Enter brand"
            required
            onChange={e => setBrand(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            placeholder="Enter category"
            required
            onChange={e => setCategory(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            placeholder="Enter price"
            required
            onChange={e => setPrice(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="countInStock">Count In Stock</label>
          <input
            type="text"
            id="countInStock"
            placeholder="Enter number"
            required
            onChange={e => setCountInStock(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            required
            onChange={e => setSelectedFile(e.target.files[0])}
          ></input>
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            type="textarea"
            id="description"
            placeholder="Enter description"
            required
            onChange={e => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label />
          <button className="primary" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProductScreen;