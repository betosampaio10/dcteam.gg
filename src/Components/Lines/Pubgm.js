import React, { useState, useEffect, ReactElement, FC, useRef, Component } from "react";
import './Pubgm.scss'
import { Avatar, Divider} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const slides = [
    {
      title: "800k",
      subtitle: "E. Fragger",
      description: "OQ POE AQ?",
      image:
        "https://dcteam.gg/800k.png",
        sociais: [
              {
                  name: "Instagram",
                  url: "https://instagram.com/dc.800k",
                  icon: ["fab", "instagram"],
              },
              {
                  name: "Facebook",
                  url: "https://facebook.com/",
                  icon: ["fab", "facebook"],
              },
              {
                  name: "Twitch",
                  url: "https://twitch.tv/dcteam_gg",
                  icon: ["fab", "twitch"],
              },
              {
                  name: "Twitter",
                  url: "https://twitter.com/dcteam_gg",
                  icon: ["fab", "twitter"],
              },
              {
                  name: "Youtube",
                  url: "https://youtube.com",
                  icon: ["fab", "youtube"],
              },
          ]
    },
    {
      title: "Pardal",
      subtitle: "Fragger",
      description: "OQ POE AQ?",
      image:
        "https://i.imgur.com/lAiGaZP.png",
        sociais: [
              {
                  name: "Instagram",
                  url: "https://instagram.com/dc.pardal",
                  icon: ["fab", "instagram"],
              },
              {
                  name: "Facebook",
                  url: "https://facebook.com/",
                  icon: ["fab", "facebook"],
              },
              {
                  name: "Twitch",
                  url: "https://twitch.tv/dcteam_gg",
                  icon: ["fab", "twitch"],
              },
              {
                  name: "Twitter",
                  url: "https://twitter.com/dcteam_gg",
                  icon: ["fab", "twitter"],
              },
              {
                  name: "Youtube",
                  url: "https://youtube.com",
                  icon: ["fab", "youtube"],
              },
          ]
    },
    {
      title: "Hugo",
      subtitle: "Suporte",
      description: "OQ POE AQ?",
      image:
        "https://i.imgur.com/SNSPPQV.png",
        sociais: [
              {
                  name: "Instagram",
                  url: "https://instagram.com/dc.hugooliveiragg",
                  icon: ["fab", "instagram"],
              },
              {
                  name: "Facebook",
                  url: "https://facebook.com/",
                  icon: ["fab", "facebook"],
              },
              {
                  name: "Twitch",
                  url: "https://twitch.tv/dcteam_gg",
                  icon: ["fab", "twitch"],
              },
              {
                  name: "Twitter",
                  url: "https://twitter.com/dcteam_gg",
                  icon: ["fab", "twitter"],
              },
              {
                  name: "Youtube",
                  url: "https://youtube.com",
                  icon: ["fab", "youtube"],
              },
          ]
    },
    {
      title: "Hindra",
      subtitle: "Sniper",
      description: "OQ POE AQ?",
      image:
        "https://i.imgur.com/J5803Dd.png",
        sociais: [
              {
                  name: "Instagram",
                  url: "https://instagram.com/dc.hindra",
                  icon: ["fab", "instagram"],
              },
              {
                  name: "Facebook",
                  url: "https://facebook.com/",
                  icon: ["fab", "facebook"],
              },
              {
                  name: "Twitch",
                  url: "https://twitch.tv/dcteam_gg",
                  icon: ["fab", "twitch"],
              },
              {
                  name: "Twitter",
                  url: "https://twitter.com/dcteam_gg",
                  icon: ["fab", "twitter"],
              },
              {
                  name: "Youtube",
                  url: "https://youtube.com",
                  icon: ["fab", "youtube"],
              },
          ]
    },
];
  
function useTilt(active) {
    const ref = React.useRef(null);
  
    React.useEffect(() => {
      if (!ref.current || !active) {
        return;
      }
  
      const state = {
        rect: undefined,
        mouseX: undefined,
        mouseY: undefined
      };
  
      let el = ref.current;
  
      const handleMouseMove = (e) => {
        if (!el) {
          return;
        }
        if (!state.rect) {
          state.rect = el.getBoundingClientRect();
        }
        state.mouseX = e.clientX;
        state.mouseY = e.clientY;
        const px = (state.mouseX - state.rect.left) / state.rect.width;
        const py = (state.mouseY - state.rect.top) / state.rect.height;
  
        el.style.setProperty("--px", px);
        el.style.setProperty("--py", py);
      };
  
      el.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
      };
    }, [active]);
  
    return ref;
}
  
const initialState = {
    slideIndex: 2
};
let stateUsing = 2;

export const RenderAtInfos = ({}) => {
    const [slide, setSlide] = useState(slides[stateUsing])
	useEffect(() => {
        setInterval(()=>{
            setSlide(slides[stateUsing])
        },0)
	}, []);
	
	return (
		<>
            <div className="sociais">
                {slide.sociais.map((icon, i) => (
                    <a target="_blank" href={icon.url}>
                        <FontAwesomeIcon icon={icon.icon} />
                    </a>
                ))}
            </div>
		</>
	); 
}
  
const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
        let slideI = (state.slideIndex + 1) % slides.length
        stateUsing = slideI;
        return {
            ...state,
            slideIndex: slideI
        };
    }
    if (event.type === "PREV") {
        let slideI = state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1;
        stateUsing = slideI;
        return {
            ...state,
            slideIndex: slideI
        };
    }
};
  
function Slide({ slide, offset }) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);
  
    return (
      <div
        ref={ref}
        className="slide"
        data-active={active}
        style={{
          "--offset": offset,
          "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
        }}
      >
        <div
          className="slideBackground"
          style={{
            backgroundImage: `url('${slide.image}')`
          }}
        />
        <div
          className="slideContent"
          style={{
            backgroundImage: `url('${slide.image}')`
          }}
        >
          <div className="slideContentInner">
            <h2 className="slideTitle">{slide.title} — {slide.subtitle}</h2>
          </div>
          <div className="player-container">
            <RenderAtInfos />
          </div>
        </div>
      </div>
    );
}
  
function App() {
    const [state, dispatch] = React.useReducer(slidesReducer, initialState);

    return (
        <div className="slides">
        <button onClick={() => dispatch({ type: "NEXT" })}>‹</button>

        {[...slides, ...slides, ...slides].map((slide, i) => {
            let offset = slides.length + (state.slideIndex - i);
            return <Slide slide={slide} offset={offset} key={i} />;
        })}
        <button onClick={() => dispatch({ type: "PREV" })}>›</button>
        </div>
    );
}
  
class Pubgm extends Component {
	render() {
        return (
            <>
                <div className="center_container pubgm">
                    <div className="container_header pubgm_header">
                        <span>LINE-UP</span>
                        <div className="traces"></div>
                        <div className="traces"></div>
                        <div className="traces"></div>
                    </div>
                </div>
                <div className="center_container slide-container">
                    <App/>
                </div>
            </>
		);
	}
}

export default Pubgm;
