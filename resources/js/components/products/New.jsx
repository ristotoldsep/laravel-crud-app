import React from 'react'

const New = () => {
  return (
    <div className="container">
        <div className="products_create">
            <div className="titlebar">
                <div className="titlebar_item">
                    <h1>Add Product</h1>
                </div>
                <div className="titlebar_item">
                    <button className="btn">
                        Save
                    </button>
                </div>
            </div>

            <div className="card_wrapper">
                <div className="wrapper_left">
                    <div className="card">
                      <p>Name</p>
                      <input type="text" />

                      <p>Description (Optional)</p>
                      <textarea cols="10" rows="5"></textarea>
                    </div>
                </div>
                <div className="wrapper_right">
                    Wrapper right
                </div>
            </div>
        </div>
    </div>
  )
}

export default New