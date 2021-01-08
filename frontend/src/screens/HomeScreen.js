import React,{useState,useEffect} from 'react';
//import  {data} from '../data';
import Product from '../components/Product';
import axios from 'axios';


export default function HomeScreen() {
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);

    useEffect(() => {
        const fetchedData=async () => {
                              
                                try{ 
                                      setLoading(true);
                                      const response=await axios.get('/api/products');
                                      const responseData=await response.data;
                                      console.log(responseData);
                                      setLoading(false);
                                      setProducts(responseData);
                                    }catch(error){
                                         console.log(error)
                                         setError(error.message);
                                         setLoading(false);
                                        }
                            }
        fetchedData();
    }, []);

    return (
        <>
        {loading?(<h1>loading...</h1>)
        :error?({error})
        :(
            <div className="row center">
                {
                    products.map(product=>(
                                    <Product key={product._id} product={product}></Product>
                                     ))
                }
           </div>   
        )}
       </>    
    )
}
