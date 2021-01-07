import  {data} from './data';
import Product from './components/Product';
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
                        data.products.map((product)=>(
                            <>
                              <Product  key={product._id} product={product}></Product>
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
