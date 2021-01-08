import {Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
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
                  <Route exact path='/' component={HomeScreen}></Route>
                  <Route exact path='/product/:id' component={ProductScreen}></Route>
                </main>

                <footer className="row center">
                        All rights reserved
                </footer>
        </div>

    </div>
  );
}

export default App;
