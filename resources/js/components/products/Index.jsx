import React from 'react'

const Index = () => {
  return (
    <div className="container">
        <div className="products_list">
            <div className="titlebar">
                <div className="titlebar_item">
                    <h1>Products</h1>
                </div>
                <div className="titlebar_item">
                    <div className='btn'>
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
                <div className="list_items">

                </div>
            </div>
        </div>
    </div>
  )
}

export default Index