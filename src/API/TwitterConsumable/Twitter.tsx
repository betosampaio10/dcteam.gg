/* eslint-disable */
// tslint:disable-next-line
import $ from "jquery";
import { Row, Col, Divider } from 'antd';
import React, { useState, useEffect, ReactElement, FC, useRef } from "react";
import { Spin } from 'antd';
import {
  LoadingOutlined,
} from '@ant-design/icons';

interface IProps {
  max: number
  autoplay: boolean,
}

let timeoutRunning: any = null;
let Images: any = [];

function getData(ajaxurl: string) { 
  return $.ajax({
    url: ajaxurl,
    headers: {
      'Origin': 'x-requested-with'
    },
    success: function (data) {
        data = JSON.parse(data.split("window._sharedData = ")[1].split(";</script>")[0]).entry_data.ProfilePage[0].graphql;
    },
    type: 'GET',
  });
};

async function test(): Promise<void> {
  try {
    const res = await getData('https://www.instagram.com/dcteam.gg')
    Images.push(res.graphql.user.edge_owner_to_timeline_media.edges);
  } catch(err) {
    console.log(err);
  }
}
test();

export const HelloWorld: FC<IProps> = ({ max = 1, autoplay = true }: IProps) => {
  const isLoading = true;
  const [loading, setLoading] = useState(isLoading);
  var loca: any = [];
  const [test, setTest] = useState(loca);
  useEffect(() => {
    loca ? setTest(loca) : [];
  }, []);
  useEffect(() => {
    if (!timeoutRunning) {
      timeoutRunning = setTimeout(() => {
        loca = Images[0];
        setTest(loca)
        setLoading(false);
        clearTimeout(timeoutRunning)
        timeoutRunning = null;
      }, 2000)
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
  const antIcon = <LoadingOutlined style={{ fontSize: 44 }} spin />;

  return (
    
    <Row justify="space-around">
      <>
      <div className="spin-dcteam">
        <Spin size="large"  tip="Carregando conteúdo..." indicator={antIcon}  spinning={loading} delay={0} />
      </div>
      {test && 
        <>
        
      {width < 480 ? (
        <>
            <Row justify="space-around">
                {test.map((item:any, i:any) => (
                    <>
                        {i < 2 &&
                        <>
                            <Col span={-1}>
                                {item.node.__typename == "GraphVideo" ? 
                                  <video src={item.node.video_url} autoPlay loop></video>
                                : 
                                  <img src={item.node.thumbnail_src}></img>
                                }     
                                <div className="notice-container">
                                    <a className="title-notice">Tópico</a>
                                    {item.node.__typename == "GraphVideo" ? 
                                      <label className="notice-context">Para acessar o vídeo, acesse o leia-mais!</label> 
                                    : 
                                      <label className="notice-context">{item.node.edge_media_to_caption.edges[0].node.text}</label>
                                    }
                                    <a className="Fixed-ReadMore" href={"https://www.instagram.com/p/" + item.node.shortcode} target="_blank">LEIA-MAIS</a>
                                </div>
                            </Col>
                            {i == 0 && <Divider type="vertical" className="divider-class"></Divider>}
                        </>
                        }
                    </>
                ))}
            </Row>
        </>)
        : 
        <>
        {width < 570 ? (
        <>
            <Row justify="space-around">
                {test.map((item:any, i:any) => (
                    <>
                        {i < 3 &&
                        <>
                            <Col span={0}>
                            {item.node.__typename == "GraphVideo" ? 
                                  <video src={item.node.video_url} autoPlay loop></video>
                                : 
                                  <img src={item.node.thumbnail_src}></img>
                                }     
                                <div className="notice-container">
                                    <a className="title-notice">Tópico</a>
                                    {item.node.__typename == "GraphVideo" ? 
                                      <label className="notice-context">Para acessar o vídeo, acesse o leia-mais!</label> 
                                    : 
                                      <label className="notice-context">{item.node.edge_media_to_caption.edges[0].node.text}</label>
                                    }
                                    <a className="Fixed-ReadMore" href={"https://www.instagram.com/p/" + item.node.shortcode} target="_blank">LEIA-MAIS</a>
                                </div>
                            </Col>
                            {i <= 1 && <Divider type="vertical" className="divider-class"></Divider>}
                        </>
                        }
                    </>
                ))}
            </Row>
        </>) : <>
        {width < 830 ? (
        <>
            <Row justify="space-around">
                {test.map((item:any, i:any) => (
                    <>
                      {i < 4 &&
                        <>
                          <Col span={1}>
                          {item.node.__typename == "GraphVideo" ? 
                                    <video src={item.node.video_url} autoPlay loop></video>
                                  : 
                                    <img src={item.node.thumbnail_src}></img>
                                  }     
                                  <div className="notice-container">
                                      <a className="title-notice">Tópico</a>
                                      {item.node.__typename == "GraphVideo" ? 
                                        <label className="notice-context">Para acessar o vídeo, acesse o leia-mais!</label> 
                                      : 
                                        <label className="notice-context">{item.node.edge_media_to_caption.edges[0].node.text}</label>
                                      }
                                      <a className="Fixed-ReadMore" href={"https://www.instagram.com/p/" + item.node.shortcode} target="_blank">LEIA-MAIS</a>
                                  </div>
                          </Col>
                          {i <= 2 && <Divider type="vertical" className="divider-class"></Divider>}
                          </>
                        }
                    </>
                ))}
            </Row>
        </>
        ) : <>
        {width < 1100 ? (
        <>
            <Row justify="space-around">
                {test.map((item:any, i:any) => (
                    <>
                      {i < 4 &&
                        <>
                          <Col span={2}>
                          {item.node.__typename == "GraphVideo" ? 
                                    <video src={item.node.video_url} autoPlay loop></video>
                                  : 
                                    <img src={item.node.thumbnail_src}></img>
                                  }     
                                  <div className="notice-container">
                                      <a className="title-notice">Tópico</a>
                                      {item.node.__typename == "GraphVideo" ? 
                                        <label className="notice-context">Para acessar o vídeo, acesse o leia-mais!</label> 
                                      : 
                                        <label className="notice-context">{item.node.edge_media_to_caption.edges[0].node.text}</label>
                                      }
                                      <a className="Fixed-ReadMore" href={"https://www.instagram.com/p/" + item.node.shortcode} target="_blank">LEIA-MAIS</a>
                                  </div>
                          </Col>
                          {test.length-4 >= i && <Divider type="vertical" className="divider-class"></Divider>}
                        </>
                      }
                    </>
                ))}
            </Row>
        </>
        ) : (<>
        {width < 1480 ? (
        <>
            <Row justify="space-around">
                {test.map((item:any, i:any) => (
                    <>
                      {i < 4 &&
                        <>
                          <Col span={3}>
                          {item.node.__typename == "GraphVideo" ? 
                                    <video src={item.node.video_url} autoPlay loop></video>
                                  : 
                                    <img src={item.node.thumbnail_src}></img>
                                  }     
                                  <div className="notice-container">
                                      <a className="title-notice">Tópico</a>
                                      {item.node.__typename == "GraphVideo" ? 
                                        <label className="notice-context">Para acessar o vídeo, acesse o leia-mais!</label> 
                                      : 
                                        <label className="notice-context">{item.node.edge_media_to_caption.edges[0].node.text}</label>
                                      }
                                      <a className="Fixed-ReadMore" href={"https://www.instagram.com/p/" + item.node.shortcode} target="_blank">LEIA-MAIS</a>
                                  </div>
                          </Col>
                          {test.length-4 >= i && <Divider type="vertical" className="divider-class"></Divider>}
                        </>
                      }
                    </>
                ))}
            </Row>
        </>
        ) : (
            <Row justify="space-around">
                  {test.map((item:any, i:any) => (
                       <>
                        {i < 4 &&
                          <>
                            <Col span={4}>
                              {item.node.__typename == "GraphVideo" ? 
                                    <video src={item.node.video_url} autoPlay loop></video>
                                  : 
                                    <img src={item.node.thumbnail_src}></img>
                                  }     
                                  <div className="notice-container">
                                      <a className="title-notice">Tópico</a>
                                      {item.node.__typename == "GraphVideo" ? 
                                        <label className="notice-context">Para acessar o vídeo, acesse o leia-mais!</label> 
                                      : 
                                        <label className="notice-context">{item.node.edge_media_to_caption.edges[0].node.text}</label>
                                      }
                                      <a className="Fixed-ReadMore" href={"https://www.instagram.com/p/" + item.node.shortcode} target="_blank">LEIA-MAIS</a>
                                  </div>
                              </Col>
                              {test.length-4 >= i && <Divider type="vertical" className="divider-class"></Divider>}
                          </>
                          }
                        </>
                    ))}
            </Row>
        )}
        </>)}</>}</>}</> }
        </>
      }
      </>
    </Row>
  ); 
}


export default {}