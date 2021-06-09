import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

class Cards extends Component {
    state = {
        current: 'mail',
        visible: false
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return ( 
        <div className = "site-card-wrapper" >
            <div className = "row" >
            <div className = "column" >
            <div className = "card" >
            <img id = "notice-image" src = "https://pbs.twimg.com/media/En29lRSWEAAS6hK?format=jpg"/>
            <div className = "notice-content" >
            </div> </div> </div>

            <div className = "column" >
            <div className = "card" >
            <img id = "notice-image" src = "https://pbs.twimg.com/media/EnNw3AaW8AEoPPH?format=jpg" /> 
            <div className = "notice-content" >
            </div> </div> </div>

            <div className = "column" >
            <div className = "card" >
            <img id = "notice-image" src = "https://pbs.twimg.com/media/EmkkJ4CXEAcuMB9?format=jpg" /> 
            <div className = "notice-content" >
            </div> </div> </div>

            <div className = "column" >
            <div className = "card" >
            <img id = "notice-image"
            src = "https://pbs.twimg.com/media/EmFs8qwXEAEsBeR?format=jpg" /> 
            <div className = "notice-content" >
            </div> </div> </div> </div> </div>
        );
    }
}

export default Cards;