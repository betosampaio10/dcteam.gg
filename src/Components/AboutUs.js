import React, { Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from 'antd';

import './AboutUs.css';


let UserStaff = [
    {
        nome : "Douglas Costa",
		foto : "https://instagram.fgig4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/38468329_241941443191812_7388279158637330432_n.jpg?tp=1&_nc_ht=instagram.fgig4-1.fna.fbcdn.net&_nc_ohc=RdNfCKdNVG0AX8J3-Md&ccb=7-4&oh=6f873db36d27738a215bd9303b88414c&oe=60835FCE&_nc_sid=e7738c",
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
        nome : "Rony Ferreira",
		foto : "https://instagram.fgig4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/162956966_456419802300817_6810096271530311754_n.jpg?tp=1&_nc_ht=instagram.fgig4-1.fna.fbcdn.net&_nc_ohc=MhlcA19VFzoAX8JQFtR&ccb=7-4&oh=e3f876e4c2cdd6a5242e57c26a3e9acd&oe=60842F5E&_nc_sid=7bff83",
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
						<p>A <strong>DC&nbsp;Team</strong>&nbsp;foi&nbsp;fundada&nbsp;em&nbsp;2019,&nbsp;por&nbsp;<strong>Douglas&nbsp;Costa</strong>,&nbsp;<strong>Rony&nbsp;Brazeiker</strong>&nbsp;e&nbsp;<strong>Fernando&nbsp;Sev7n</strong>.</p>

						<p>Em&nbsp;pouco&nbsp;tempo,&nbsp;a<strong>&nbsp;DC&nbsp;Team</strong>&nbsp;se&nbsp;destacou&nbsp;no&nbsp;cen&aacute;rio,&nbsp;conquistando&nbsp;milhares&nbsp;de&nbsp;f&atilde;s&nbsp;nas&nbsp;redes&nbsp;sociais&nbsp;e&nbsp;participando&nbsp;de&nbsp;eventos&nbsp;e&nbsp;competi&ccedil;&otilde;es&nbsp;relevantes&nbsp;no&nbsp;e-sports.</p>

						<p>Teve&nbsp;&ecirc;xito&nbsp;em&nbsp;v&aacute;rias&nbsp;competi&ccedil;&otilde;es,&nbsp;conquistando&nbsp;o&nbsp;primeiro&nbsp;lugar&nbsp;e&nbsp;sempre esteve&nbsp;entre&nbsp;os&nbsp;10&nbsp;melhores&nbsp;times&nbsp;de&nbsp;Fortnite&nbsp;no&nbsp;Brasil.</p>
					</span>
				</div>
				<div className="container_header staff_header">
					<span>EQUIPE</span>
					<div className="traces"></div>
					<div className="traces"></div>
					<div className="traces"></div>
				</div>
				<div className="staff_container">
					<div className="container_start">
						<Row justify="space-around">
							{UserStaff.map((item, i) => (
								<Col span={3}>
									<div className="user">
										<img src={item.foto}></img>
										<span className="title">{item.nome}</span>
										<span className="cargo">{item.cargo}</span>
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
