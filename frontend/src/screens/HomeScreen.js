import React,{useState,useEffect} from 'react';
//import  {data} from '../data';
import Product from '../components/Product';
import axios from 'axios';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

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
        {loading?(<LoadingBox></LoadingBox>)
        :error?(<MessageBox variant='danger'>{error}</MessageBox>)
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
