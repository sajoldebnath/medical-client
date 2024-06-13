import { Link, Outlet } from "react-router-dom";
import Header from "../Header";
const DafaultLayoutClient = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            
        </div>
    )

}

export default DafaultLayoutClient;