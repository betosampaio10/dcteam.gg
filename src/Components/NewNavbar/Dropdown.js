  
import React, {  useState } from "react";
import { NavLink, BrowserRouter } from "react-router-dom";

export const Dropdown = ({menu}) => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [navLinks, setNavLinks] = useState(menu);

    return (
      <>
      <div className="dropdown-menu2" >
        <div onClick={handleClick} className={click ? 'dropdown-list clicked' : 'dropdown-list'}>
                {navLinks.map((item,index) => {
                    return(
                        <li key={index}>
                            <NavLink exact to={item.to} onClick={() => {window.location.href=item.to}} >
                                <img className="dropdown-image" src={item.img}></img>
                            </NavLink>
                        </li>
                    )
                })}
            </div>
      </div>
      </>
    );
    return (
        <>
        </>);
}

export default Dropdown;