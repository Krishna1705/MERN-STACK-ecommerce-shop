import React from 'react';
import { data } from '../data';
import Rating from '../components/Rating';
import {Link} from 'react-router-dom';
import MessageBox from '../components/MessageBox'

export default function ProductScreen(props) {
    console.log(props.match.params.id)
    const product=data.products.find(product=>product._id === props.match.params.id);

    if(!product){
        return(<div>
            <MessageBox variant="info">Product Not found.</MessageBox>
        </div>)
    }
    return (
        <div>
           <Link to="/">Back to Results</Link>
           <div className="row top">
               <div className="col-2">
                    <img className="large" src={`.${product.image}`} alt={product.name}></img>
               </div>
               <div className="col-1">
                   <ul>
                       <li><h1>Name : {product.name}</h1></li>
                       <li> 
                          <span className="rating"><Rating rating={product.rating} numReviews={product.numReviews}> </Rating></span>    
                       </li>
                       <li><h2>Price : ${product.price}</h2></li>
                       <li><h2>Description : {product.description}</h2></li>
                   </ul>
               </div>
               <div className="col-1">
                   <div className="card card-body">
                    <ul>
                        <li>
                            <div className="row ">
                                <div>Price </div>
                                <div className="price"> ${product.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Status  </div>
                                <div> 
                                    {product.countInStock>0
                                    ? <span className="success"> In Stock</span>
                                    : <span className="danger">Unavailable</span>
                                    }
                                </div>
                            </div>
                        </li>
                        <li>
                            <button className="primary block">Add to cart</button>
                        </li>
                    </ul>

                   </div>
               </div>
           </div>
           
        </div>
    )
}
