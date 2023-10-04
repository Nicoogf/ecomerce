import { Products } from "../interface" ;

export const getProduct = async ():Promise<Products[]>=>{
    try {
        const response = await fetch ( "http://localhost:3000/products" )
        
     if(response.ok){
        const data = await response.json()
        return ( data )
     }else{
        throw new Error('Faild to fetch product')
     }

    } catch (error) {
        throw new Error ('Network error')
    }
}