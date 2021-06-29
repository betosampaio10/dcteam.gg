/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { Link, NavLink, BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import MobileNav from "./MobileNav";
import Dropdown from './Dropdown'
library.add(fab);
import './styles.css';

export const SocialIcons = [
  {
    name: "Twitch",
    url: "https://twitch.tv/dcteam_gg",
    icon: ["fab", "twitch"],
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/dcteam.gg/",
    icon: ["fab", "instagram"],
  },
  {
    name: "Twitter",
    url: "https://twitter.com/DCTeam_gg",
    icon: ["fab", "twitter"],
  },
]

export const ReactNavbar = ({ color, logo }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const onClick = () => {
    setDropdown(!dropdown);
    setDropdown2(false);
  }
  const onClick2 = () => {
    setDropdown(false);
    setDropdown2(!dropdown2);
  }
  const [socialIcon, setSocialIcon] = useState(SocialIcons);
  const [background, setBackground] = useState("rgb(25, 25, 25)");
  const [logoUrl, setLogoUrl] = useState("https://svgshare.com/i/KHh.svg");
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    color ? setBackground(color) : null;
    logo ? setLogoUrl(logo) : null;
    SocialIcons ? setSocialIcon(socialIcon) : [];
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  return (
    <div onClick={handleClick}>
      {width < 1150 ? (
        <MobileNav
          width={width}
          logoUrl={logoUrl}
          background={background}
          socialIcon={socialIcon}
        />
      ) : (
        <div className='menuNew'>
          <Controller>
            <Scene>
              {(progress) => (
                <Timeline >
                  <Tween
                    from={{ height: "100px" }}
                    to={{ height: "100px", background: background }}
                  >
                    <div className="header">
                      <div className="navLogo">
                        <Router>
                          <Link onClick={() => { window.location.href = "/" }}>
                            <div className="logo-container">
                              <Timeline>
                                <Tween
                                  from={{ height: "100px" }}
                                  to={{ height: "100px" }}
                                >
                                  <img
                                    className="LogoImg"
                                    src={logoUrl}
                                    alt="logo"
                                  />
                                </Tween>
                              </Timeline>
                            </div>
                          </Link>
                        </Router>
                      </div>

                      <div className="navLinks" >
                        <Router>
                          <ul>
                          <li>
                              <NavLink to="/" onClick={() => { window.location.href = "/" }} className="home">
                                VÍDEOS
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/aboutus" onClick={() => { window.location.href = "/aboutus" }} className="home">
                                SOBRE NÓS
                              </NavLink>
                            </li>
                            <li>
                              <NavLink exact to="/" onClick={() => { window.location.href = "https://shop.dcteam.gg/" }} className="home">
                                LOJA
                              </NavLink>
                            </li>
                            <li>
                              <NavLink exact to="/" onClick={() => { window.location.href = "/campeonato" }} className="home">
                                CAMPEONATO
                              </NavLink>
                            </li>
                          </ul>
                        </Router>
                      </div>
                      <div className="navSocial">
                        <ul>
                          {socialIcon.map((icon, i) => (
                            <li key={i}>
                              <a target="_blank" href={icon.url}>
                                <FontAwesomeIcon icon={icon.icon} />
                              </a>
                              <span className="tooltiptext">
                                {icon.name}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>  
                    <div className='bar'></div>                
                  </Tween>
                </Timeline>
              )}
            </Scene>
          </Controller>
        </div>        
      )}      
    </div>
    
  );
};
