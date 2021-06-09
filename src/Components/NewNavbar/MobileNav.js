import React, { useRef, useState } from "react";
import { Link, NavLink, BrowserRouter as Router } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { TweenMax, Power3 } from "gsap";
import MobileDropdown from './MobileDropdown'

library.add(fab, faBars);

const MobileNav = ({ width, logoUrl, background, socialIcon }) => {
  let nav = useRef(null);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [click, setClick] = useState(false);
  const socialLinks = socialIcon.map((icon) => (
    <li>
      <a target="_blank" rel="noopener noreferrer" href={icon.url}>
        <FontAwesomeIcon icon={icon.icon} />
      </a>
    </li>
  ));
  const handelExpand = () => {
    if (click === false) {
      TweenMax.to(nav, 0.8, { height: 400, ease: Power3.easeOut });
      setClick(true);
    } else {
      TweenMax.to(nav, 0.8, { height: 0, ease: Power3.easeOut });
      setClick(false);
    }
  };

  const onClick = () => {
    setDropdown(!dropdown);
    setDropdown2(false);
    if(dropdown)
      handelExpand();
  }
  const onClick2 = () => {
    setDropdown(false);
    setDropdown2(!dropdown2);
    if(dropdown)
      handelExpand();
  }

  return (
    <div className="MoNavContainer" style={{ background: background }}>
      <div className="mobileNav" style={{ background: background }}>
        <div className="navBars">
          <FontAwesomeIcon icon={faBars} onClick={handelExpand} />
        </div>
        <div className="MoNavLogo">
          <img src={logoUrl} alt="logo" />
        </div>

        <div className="MoNavSocial">
          {width > 700 ? <ul>{socialLinks}</ul> : null}
        </div>
      </div>
      <div
        className="MoNavLinks"
        ref={(el) => {
          nav = el;
        }}
      >
        <Router>
        <ul>
          <li>
              <NavLink exact to="/aboutus" onClick={() => {window.location.href="/aboutus"}} activeClassName="home" >
                DC TEAM
              </NavLink>
          </li>
          <li>
              <NavLink exact to="/" activeClassName="home" >
                NOTÍCIAS
              </NavLink>
          </li>
          <li onClick={onClick}>
              <NavLink exact to="/" activeClassName="home" >
                LINES <FontAwesomeIcon icon={faChevronDown} />
                {dropdown && <MobileDropdown 
                  menu={[
                    {name: "VALORANT", img: "https://i.imgur.com/6gahkf7.png",  to: "/valorant"},
                    {name: "PUBG MOBILE", img: "https://www.pubgmobile.com/pt/event/brandassets/images/down-logo8.png",  to: "/pubgm"},
                    {name: "FIFA", img: "https://i.imgur.com/dOg0LS0.png",  to: "/fifa"},
                  ]}
                />}
              </NavLink>
          </li>
          <li>
              <NavLink exact to="/" onClick={() => {window.location.href="https://shop.dcteam.gg/"}}  activeClassName="home" >
                LOJA
              </NavLink>
          </li>
          <li>
              <NavLink exact to="/" onClick={() => {window.location.href="https://shop.dcteam.gg/"}}  activeClassName="home" >
                CAMPEONATO
              </NavLink>
          </li>
        </ul>
        </Router>
        {width < 700 ? (
          <div className="mobileNavII">
            <div className="MoNavSocialII">
              <ul>{socialLinks}</ul>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MobileNav;
