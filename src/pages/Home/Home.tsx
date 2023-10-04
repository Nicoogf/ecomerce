import { useEffect, useState } from "react";
import styles from "./Home.module.css" ;
import CartProduct from "../../component/cartProduct/CartProduct";
import Hero from "../../component/ui/Hero/Hero";
import { getProduct } from "../../service";
import { Products } from "../../interface";

const Home = () => {

const [ products , setProducts ] = useState<Products[]>([])
const [error , setError] = useState(false) ;
const [isLoading, setIsLoading] = useState(true) ;


  useEffect(()=>{
    getProduct().then((data)=>{
      setProducts(data)
    }).catch(()=>{
      setError(true)
    }).finally(() => {
      setIsLoading(false)
    })
  } , [])

  console.log( products )
 
  return (
    <>
      <Hero />
      {isLoading && <p>Cargando...</p>}
      {error && <p>Error Inesperado</p>}
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