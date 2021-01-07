import  {data} from './data';

function App() {
  return (
    <div>
        <div className="grid-container">
                <header className="row">
                        <div>
                            <a className="brand" href="/">
                                ARIHANT
                            </a>
                        </div>
                        <div>
                         <a href="/cart"><button>Cart</button></a>
                            <a href="/signin"><button>Signin</button> </a>
                        </div>     
                </header>

                <main>
                <div className="row center">
                      {
                        data.products.map((product,index)=>(
                            <>
                                <div key={product._id} className="card">
                                <a href="product.html"><img className="medium" src={product.image} alt="product"/></a>
                                <div className="card-body">
                                                  <a href="#">
                                                      <h2>{product.name}</h2>  
                                                  </a>
                                                  <div className="rating">
                                                  {product.rating}
                                                      <span><i className="fa fa-star"></i></span>
                                                      <span><i className="fa fa-star"></i></span>
                                                      <span><i className="fa fa-star"></i></span>
                                                      <span><i className="fa fa-star"></i></span>
                                                      <span><i className="fa fa-star"></i></span>
                                                  </div>
                                                  <div className="price">
                                                      ${product.price}
                                                  </div>
                                              </div>
                                          </div>
                            </>
                          ))
                      }            
                </div>           
                </main>

                <footer className="row center">
                        All rights reserved
                </footer>
        </div>

    </div>
  );
}

export default App;
