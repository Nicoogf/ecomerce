import { useContext } from "react";
import styles from "./CartProduct.module.css" ;
import { CartContext } from "../../context/CartContext";

const CartProduct = ( {product} ) => {

  const { dispatch } = useContext( CartContext ) ;

  const item = {
    id: product.tail,
    name: product.name,
    image: product.image,
    quantity: 1
  }

  const addToCart = ( item ) => {
    dispatch ( {type: "ADD_TO_CART" , payload: item } )
  }


  return (
    <div className= { styles.cardContainer } >
        <img src= { product.image }  alt= { product.name } className= { styles.cardImage } width={95} height={95}/>       
       <div  className= { styles.cardDetail }>
          <h3 className= { styles.cardTitle }> { product.name } </h3>
          <div className= { styles.cardBody }>
            <p className= { styles.cardType }>  { product.type } </p>
            <p className= { styles.cardPrice }>  { product.price  } <small> 00 </small>   </p>
          </div>
          <button className= { styles.cardButton } onClick = { ()=>addToCart(item)}> Agregar Carrito</button>
      </div>
    </div>
  ) ;
} ;

export default CartProduct ;