import { useState } from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {


    let [search , setSearch] = useState("");   

    return (
        <nav >
                <form >
                <input type="search" placeholder="Search" value={search}
                onChange={(e)=>{setSearch(e.target.value)}}
                />
                <Link to={`/home${search}`}><button type="submit">Search</button></Link>
                </form>
        </nav>
    );
}

export default Navbar;