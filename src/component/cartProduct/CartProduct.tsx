import styles from "./CartProduct.module.css" ;

const CartProduct = ( {product} ) => {
  return (
    <div className= { styles.cardContainer } >
        <img src= { product.image }  alt= { product.name } className= { styles.cardImage } width={95} height={95}/>       
       <div  className= { styles.cardDetail }>
          <h3 className= { styles.cardTitle }> { product.name } </h3>
          <div className= { styles.cardBody }>
            <p className= { styles.cardType }>  { product.type } </p>
            <p className= { styles.cardPrice }>  { product.price  } <small> 00 </small>   </p>
          </div>
          <button className= { styles.cardButton }> Agregar Carrito</button>
      </div>
    </div>
  ) ;
} ;

export default CartProduct ;