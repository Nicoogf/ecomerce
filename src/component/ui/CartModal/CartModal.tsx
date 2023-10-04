import styles from "./CartModal.module.css" ;
import closeButton from "../../../assets/close.svg" ;

const CartModal = ( {handleShowCartModal} ) => {
  return (
    <div className={styles.modalContainer} >
        <button className={styles.modalCloseButton} onClick={handleShowCartModal}>
            <img src={closeButton} alt='' width={30} height={30}/>
        </button>
        <table  className={styles.modalTable}>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Eliminar</th>
                    <th>Cantidad</th>
                    <th>Agregar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td > Nombre </td>
                    <td > <button> - 1  </button>  </td>
                    <td > Cantidad </td>
                    <td > <button> + 1  </button> </td>
                </tr>
            </tbody>
        </table>
        <div>
            <h3 className={styles.modalTotalContainer}> Total : 4000 </h3>
        </div>
        <div>
            <button> Finalizar </button>
        </div>
    </div>
  )
}

export default CartModal