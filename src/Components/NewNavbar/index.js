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

export const SocialIcons = [
  {
    name: "Twitch",
    url: "https://twitch.tv/dcteam_gg",
    icon: ["fab", "twitch"],
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/dcteam_gg/",
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
        <Controller>
          <Scene triggerHook="onLeave" duration={300} pin>
            {(progress) => (
              <Timeline totalProgress={progress} paused>
                <Tween
                  from={{ height: "120px" }}
                  to={{ height: "80px", background: background }}
                >
                  <div className="header">
                    <div className="navLogo">
                      <Router>
                        <Link onClick={() => {window.location.href="/"}}>
                          <div className="logo-container">
                            <Timeline totalProgress={progress} paused>
                              <Tween
                                from={{ height: "120px" }}
                                to={{ height: "70px" }}
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
                                <NavLink to="/aboutus" onClick={() => {window.location.href="/aboutus"}} className="home">
                                  DC TEAM
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" onClick={() => {window.location.href="/news"}} className="home">
                                  NOTÍCIAS
                                </NavLink>
                            </li>
                            <li onClick={onClick}>
                                <NavLink exact to="/" className="home">
                                  LINES <FontAwesomeIcon icon={faChevronDown} />
                                </NavLink>
                                {dropdown && <Dropdown 
                                  	menu={[
                                      {name: "VALORANT", img: "https://i.imgur.com/6gahkf7.png",  to: "/valorant"},
                                      {name: "PUBG MOBILE", img: "https://www.pubgmobile.com/pt/event/brandassets/images/down-logo8.png",  to: "/pubgm"},
                                      {name: "FIFA", img: "https://i.imgur.com/dOg0LS0.png",  to: "/fifa"},
                                    ]}
                                  />}
                            </li>
                            <li>
                                <NavLink exact to="/" onClick={() => {window.location.href="https://shop.dcteam.gg/"}} className="home">
                                  LOJA
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/" onClick={() => {window.location.href="/campeonato"}} className="home">
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
                </Tween>
              </Timeline>
            )}
          </Scene>
        </Controller>
      )}
    </div>
  );
};
