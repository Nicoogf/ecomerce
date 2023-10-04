import { useEffect, useState } from "react";
import styles from "./Home.module.css" ;
import CartProduct from "../../component/cartProduct/CartProduct";
import Hero from "../../component/ui/Hero/Hero";

const Home = () => {

const [ products , setProducts ] = useState([])

const getProduct = async ()=>{
    try {
        const response = await fetch ( "http://localhost:3000/products" )
        const data = await response.json()
        setProducts( data )
    } catch (error) {
        console.error(error)
    }
}

  useEffect(()=>{
    getProduct()
  } , [])

  console.log( products )
 
  return (
    <>
      <Hero />
      <div className={ styles.container}>
        {  /* products.map( (product) => 
          <CartProduct key={product.tail} product={ product }/>
        ) */ }

        { products.map ( (product) => (
            <CartProduct key = {product.tail} product={product} />
        ))}

      </div>
     
    </>
  ) ;
} ;

export default Home ;