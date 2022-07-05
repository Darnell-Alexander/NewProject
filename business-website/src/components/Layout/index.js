import { Outlet } from "react-router-dom";
import './index.scss'
const Layout =()=>{
    return(
        <div className='page-container'>
            <Outlet />
        </div>
    )
}

export default Layout;