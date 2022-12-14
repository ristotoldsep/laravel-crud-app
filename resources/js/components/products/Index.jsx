import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Index = () => {

  const navigate = useNavigate()

  const [products, setProducts] = useState([])

  const newProduct = () => {
    navigate("/product/new")
  }

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    await axios.get("/api/get_all_product")
        .then(({data}) => {
            console.log('data', data);
            
            setProducts(data.products);
        })
  }

  const editProduct = (id) => {
    navigate("/product/edit/" + id)
  }

   const deleteProduct = async (id) => {
       Swal.fire({
           title: "Are you sure?",
           text: "You can't reverse this!",
           icon: "warning",
           showCancelButton: true,
           confirmButtonColor: "#3085d6",
           cancelButtonColor: "#d33",
           confirmButtonText: "Yes, delete it!",
       }).then((result) => {
           if (result.isConfirmed) {
               axios
                   .get(`/api/delete_product/${id}`)
                   .then(() => {
                       Swal.fire(
                           "Deleted!",
                           "Product successfully deleted",
                           "success"
                       );
                       getProducts();
                   })
                   .catch((error) => {
                       console.log(error);
                   });
           }
       });
   };

  return (
      <div className="container">
          <div className="products_list">
              <div className="titlebar">
                  <div className="titlebar_item">
                      <h1>Products</h1>
                  </div>
                  <div className="titlebar_item">
                      <div className="btn" onClick={() => newProduct()}>
                          Add Product
                      </div>
                  </div>
              </div>

              <div className="table">
                  <div className="list_header">
                      <p>Image</p>
                      <p>Product</p>
                      <p>Type</p>
                      <p>Inventory</p>
                      <p>Actions</p>
                  </div>
                  {products.length > 0 &&
                      products.map((product, key) => (
                          <div className="list_items" key={key}>
                              <img src={`/upload/${product.photo}`} height="40px" />
                              <p>{product.name}</p>
                              <p>{product.type}</p>
                              <p>{product.quantity}</p>
                              <div style={{display: 'flex', gap: '10px'}}>
                                  <button className="btn-icon success" onClick={() => editProduct(product.id)}>
                                      <i className="fa fa-pencil-alt"></i>
                                  </button>
                                  <button className="btn-icon danger" onClick={() => deleteProduct(product.id)}>
                                      <i className="far fa-trash-alt"></i>
                                  </button>
                              </div>
                          </div>
                      ))}
              </div>
          </div>
      </div>
  );
}

export default Index