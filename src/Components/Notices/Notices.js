/* eslint-disable */
import React, { useState, useEffect } from "react";
import 'antd/dist/antd.css';
import { Row, Col, Divider } from 'antd';
import './Grid.css'
import { InstagramEstrategy, HelloWorld } from '../../API/TwitterConsumable/Twitter.tsx'

export const Notices = () => [
    {
        noticeImage : "https://pbs.twimg.com/media/Eor1IBKXMAAlTgv?format=jpg",
        noticeContext : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        pageToGo: ""
    },
    {
        noticeImage : "https://pbs.twimg.com/media/Eor1IBKXMAAlTgv?format=jpg",
        noticeContext : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        pageToGo: ""
    },
    {
        noticeImage : "https://pbs.twimg.com/media/Eor1IBKXMAAlTgv?format=jpg",
        noticeContext : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        pageToGo: ""
    },
    {
        noticeImage : "https://pbs.twimg.com/media/Eor1IBKXMAAlTgv?format=jpg",
        noticeContext : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        pageToGo: ""
    },
]


const NoticesGrid = () => {
    return (
        <>
            <HelloWorld max="4" autoplay="true" />
        </>
  );
};
  
export default NoticesGrid;