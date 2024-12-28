import { useState } from "react";
import Link from "../Link/Link";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/courses", name: "Courses" },
        { id: 3, path: "/login", name: "Login" },
        { id: 4, path: "/profile", name: "Profile" },
        { id: 5, path: "/certificate/:id", name: "Certificate Details" },
      ];
 

    return (
        <nav className="text-black p-6 bg-sky-700">
            
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoCloseSharp ></IoCloseSharp> 
                    : 
                    <TiThMenu ></TiThMenu>
                }
            
            </div>

        <ul className={`md:flex absolute md:static duration-1000
        ${open ? 'top-16' : '-top-60' }
         bg-sky-700 px-6 `}>
        {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
        </ul>
        </nav>
    );
};

export default Navbar;