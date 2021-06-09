import React, { useState, useEffect, ReactElement, FC, useRef, Component } from "react";
import './Home.css';
import { Spin } from 'antd';
import {
    LoadingOutlined,
} from '@ant-design/icons';

import { getChannelFeed } from "./API_Youtube/index"

var loca = [];

export const YoutubeVideos = ({}) => {
    const isLoading = true;
    const [loading, setLoading] = useState(isLoading);

    const channelId = "UC6CmyAjhpdMune7tZFiA7SQ";
    const [videos, setVideos] = useState(loca);
    getChannelFeed(channelId).then((feed) => {
        var pushedItems = [];
        if (videos.length == 0) {
            for (let i = 0; i < 4; i++) {
                if (feed["feed"].entry[i]) pushedItems.push(feed["feed"].entry[i]);
                else
                    pushedItems.push(feed["feed"].entry[0]);
            }
            setVideos(pushedItems);
            setLoading(false);
        }
    });

    const [width, setWidth] = useState(window.innerWidth);
    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

    const antIcon = < LoadingOutlined style = {
        { fontSize: 44 }
    }
    spin /> ;

    setTimeout(() => {

    }, 500)

    return (<>
        <div className = "spin-dcteam" >
        <Spin size = "large"
        tip = "Carregando conteúdo..."
        indicator = { antIcon }
        spinning = { loading }
        delay = { 0 }
        /> </div > {
            videos.map((item, i) => ( <>
                {
                    item &&
                    <div onClick = {
                        () =>
                        window.open(item["link"][0].$.href)
                    }
                    className = { "item" + i }
                    key={i}
                    style = {
                        {
                            backgroundImage: "url(" + item["media:group"][0]["media:thumbnail"][0].$.url.replace("hqdefault", "maxresdefault") + ")"
                        }
                    } >
                    </div>
                } </>
            ))
        } </>
    );
}


class Main extends Component {
    render() {
        return (<>
            <div className = "center_container home" >
                <div className = "container_header home_header" >
                    <span> VÍDEOS DESTAQUES </span> 
                    <div className = "traces" > 
                    </div> 
                    <div className = "traces" > 
                    </div> 
                    <div className = "traces" > 
                    </div> 
                </div> 
                <div className = "page_container_home" >
                    <div className="videos_destaques">
                        <YoutubeVideos />
                    </div> 
                </div> 
            </div> 
        </>);
    }
}

export default Main;