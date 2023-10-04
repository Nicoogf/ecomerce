import { useEffect, useState } from "react";
import styles from "./Home.module.css" ;
import CartProduct from "../../component/cartProduct/CartProduct";
import Hero from "../../component/ui/Hero/Hero";

const Home = () => {

const [ products , setProducts ] = useState([])



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