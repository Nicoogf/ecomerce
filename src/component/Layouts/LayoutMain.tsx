import { Outlet} from "react-router-dom"



const LayoutMain = () => {
  return (
    <div>
      Layouts
      <Outlet />
    </div>
    
  ) ;
} ;

export default LayoutMain ;