  
import React, { useState } from 'react';
import { Link, NavLink, BrowserRouter as Router } from "react-router-dom";
import './MobileDropdown.css';

export const MobileDropdown = ({menu}) => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [navLinks, setNavLinks] = useState(menu);
    return (
      <>
      <div className="Mobiledropdown-menu">
        <div onClick={handleClick} className={click ? 'dropdown-list clicked' : 'dropdown-item'}>
                {navLinks.map((item,index) => {
                    return(
                        <li key={index}>
                            <NavLink exact to={item.to}  onClick={() => {window.location.href=item.to}} >
                                {item.name}
                            </NavLink>
                        </li>
                    )
                })}
            </div>
      </div>
      </>
    );
}

export default MobileDropdown;