import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from 'antd';
import Rony from '../Assets/Equipe/Rony.PNG'
import Douglas from '../Assets/Equipe/Douglas.PNG'
import Beto from '../Assets/Equipe/Beto.png'
import Gustavo from '../Assets/Equipe/Gustavo.png'
import Julia from '../Assets/Equipe/Julia.png'
import Romario from '../Assets/Equipe/Romario.png'
import Malu from '../Assets/Equipe/Malu.png'
import Alexandre from '../Assets/Equipe/Alexandre.png'


import './AboutUs.css';


let UserStaff = [
	{
		nome: "Douglas Costa",
		foto: Douglas,
		cargo: "Fundador",
		sociais: [
			{
				name: "Instagram",
				url: "https://instagram.com/douglascosta",
				icon: ["fab", "instagram"],
			},
			{
				name: "Twitch",
				url: "https://twitch.tv/odouglascosta",
				icon: ["fab", "twitch"],
			},
			{
				name: "Twitter",
				url: "https://twitter.com/douglascosta",
				icon: ["fab", "twitter"],
			},
		]
	},
	{
		nome: "Rony Ferreira",
		foto: Rony,
		cargo: "Fundador e CEO",
		sociais: [
			{
				name: "Instagram",
				url: "https://instagram.com/brazeiker",
				icon: ["fab", "instagram"],
			},
			{
				name: "Twitch",
				url: "https://twitch.tv/brazeiker",
				icon: ["fab", "twitch"],
			},
			{
				name: "Twitter",
				url: "https://twitter.com/brazeiker",
				icon: ["fab", "twitter"],
			},
		]
	},
	{
		nome: "Beto Sampaio",
		foto: Beto,
		cargo: "CTO",
		sociais: [
			{
				name: "Instagram",
				url: "https://instagram.com/betoosampaio",
				icon: ["fab", "instagram"],
			},
			{
				name: "Twitch",
				url: "https://twitch.tv/betoosampaio2",
				icon: ["fab", "twitch"],
			}
		]
	},
	{
		nome: "Julia 'Coxinha'",
		foto: Julia,
		cargo: "Gestora de Ecommerce",
		sociais: [
			{
				name: "Instagram",
				url: "https://www.instagram.com/politiju/",
				icon: ["fab", "instagram"],
			},
			{
				name: "Twitch",
				url: "https://www.twitch.tv/twitch",
				icon: ["fab", "twitch"],
			},
			{
				name: "Twitter",
				url: "https://twitter.com/JuliaPoliti1",
				icon: ["fab", "twitter"],
			},
		]
	},
	{
		nome: "Gustavo 'Slow'",
		foto: Gustavo,
		cargo: "Designer",
		sociais: [
			{
				name: "Instagram",
				url: "https://www.instagram.com/gupereto/",
				icon: ["fab", "instagram"],
			},
			{
				name: "Twitch",
				url: "https://www.twitch.tv/slow1fps",
				icon: ["fab", "twitch"],
			},
			{
				name: "Twitter",
				url: "https://twitter.com/slow1fps",
				icon: ["fab", "twitter"],
			},
		]
	},
	{
		nome: "Romario 'Roma'",
		foto: Romario,
		cargo: "Editor de vídeo",
		sociais: [
			{
				name: "Instagram",
				url: "https://www.instagram.com/dc.roma/",
				icon: ["fab", "instagram"],
			},
			{
				name: "Twitch",
				url: "https://www.twitch.tv/DcRomarin",
				icon: ["fab", "twitch"],
			},
			{
				name: "Twitter",
				url: "https://twitter.com/King_Romax",
				icon: ["fab", "twitter"],
			},
		]
	},
	{
		nome: "Maria Luiza 'Ticah'",
		foto: Malu,
		cargo: "Manager Geral",
		sociais: [
			{
				name: "Instagram",
				url: "https://www.instagram.com/dc.malugg/",
				icon: ["fab", "instagram"],
			},
			{
				name: "Twitch",
				url: "https://www.twitch.tv/DCTICAgg",
				icon: ["fab", "twitch"],
			},
			{
				name: "Twitter",
				url: "https://twitter.com/lindemannmalu",
				icon: ["fab", "twitter"],
			},
		]
	},
	{
		nome: "Alexandre 'Dudi'",
		foto: Alexandre,
		cargo: "Gestor de Projetos",
		sociais: [
			{
				name: "Instagram",
				url: "https://www.instagram.com/alexandre_kliemann/",
				icon: ["fab", "instagram"],
			},
			{
				name: "Twitch",
				url: "https://www.twitch.tv/Dudi_KO",
				icon: ["fab", "twitch"],
			},
			{
				name: "Twitter",
				url: "https://twitter.com/AlexandreKliem1",
				icon: ["fab", "twitter"],
			},
		]
	},
	
]

class AboutUs extends Component {
	render() {
		return (
			<div className="center_container aboutus">
				<div className="container_header about_header">
					<span>SOBRE</span>
					<div className="traces"></div>
					<div className="traces"></div>
					<div className="traces"></div>
				</div>
				<div className="aboutus_text">
					<span>
						<p>A <strong>DC&nbsp;Team</strong>&nbsp;foi&nbsp;fundada&nbsp;em&nbsp;2019,&nbsp;por&nbsp;<strong>Douglas&nbsp;Costa</strong> e&nbsp;<strong>Rony&nbsp;Brazeiker</strong>.</p>

						<p>Em&nbsp;pouco&nbsp;tempo,&nbsp;a<strong>&nbsp;DC&nbsp;Team</strong>&nbsp;se&nbsp;destacou&nbsp;no&nbsp;cen&aacute;rio,&nbsp;conquistando&nbsp;milhares&nbsp;de&nbsp;f&atilde;s&nbsp;nas&nbsp;redes&nbsp;sociais&nbsp;e&nbsp;participando&nbsp;de&nbsp;eventos&nbsp;e&nbsp;competi&ccedil;&otilde;es&nbsp;relevantes&nbsp;no&nbsp;e-sports.</p>

						<p>Teve&nbsp;&ecirc;xito&nbsp;em&nbsp;v&aacute;rias&nbsp;competi&ccedil;&otilde;es,&nbsp;conquistando&nbsp;o&nbsp;primeiro&nbsp;lugar&nbsp;e&nbsp;sempre esteve&nbsp;entre&nbsp;os&nbsp;10&nbsp;melhores&nbsp;times&nbsp;de&nbsp;Fortnite&nbsp;no&nbsp;Brasil.</p>
					</span>
				</div>
				<div className="staff_header container_header ">
					<span>EQUIPE</span>
					<div className="traces_header"></div>
					<div className="traces_header"></div>
					<div className="traces_header"></div>
				</div>
				<div className="staff_container">
					<div className="container_start">
						<Row justify="space-around">
							{UserStaff.map((item, i) => (
								<Col span={6}>
									<div className="user mb-4">
										<img className='foto' src={item.foto}></img>
										<p className="title m-0">{item.nome}</p>
										<p className="cargo m-0">{item.cargo}</p>
										<div className="sociais">
											{item.sociais.map((icon, i) => (
												<a target="_blank" href={icon.url}>
													<FontAwesomeIcon icon={icon.icon} />
												</a>
											))}
										</div>
									</div>
								</Col>
							))}
						</Row>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutUs;
