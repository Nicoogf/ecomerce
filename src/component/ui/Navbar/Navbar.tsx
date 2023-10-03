import Logo from "../../../assets/logo.svg" ; 
import Cart from "../../../assets/carrito.svg" ;
import styles from "./Navbar.module.css" ;

const Navbar = () => {
  return (
    <div className= { styles.navbarContainer } >

        <div className= { styles.navbarDetail }>
            <img src={ Logo } alt ="Logo" width={50} height={50}/>
            <div>
                <span> DH Ecommerce </span>
            </div>
        </div>

        <div className= { styles.navbarCartContainer }>
            <p  className= { styles.navbarTextAmount }> 2 </p>
            <img src={Cart} alt = "Carrito" width={50} height={50}/>
        </div>

    </div>
  )
}

export default Navbar ;