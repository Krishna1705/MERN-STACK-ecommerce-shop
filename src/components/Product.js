import React from 'react';
import Rating from './Rating';

export default function Product({product}){
    
    return(
        <>
          <div className="card">
                                <a href="product.html">
                                   <img className="medium" src={product.image} alt={product.name}/>
                                </a>
                                <div className="card-body">
                                                  <a href="#">
                                                      <h2>{product.name}</h2>  
                                                  </a>
                                                  <div className="rating">
                                                  {product.rating}
                                                     <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                                                  </div>
                                                  <div className="price">
                                                      ${product.price}
                                                  </div>
                                              </div>
                                          </div>

        </>
    );
}
