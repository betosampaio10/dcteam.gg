import React, { useState, useEffect, Component, useContext } from "react";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Divider } from 'antd';
import banner from '../Assets/Times/fifa_banner2.png';
import premiacao from '../Assets/Times/premiacao_campeonato.png';
import { NavigationContext } from '../contexts/navigationContext'
import Inscrever from './Inscrever'

import './Campeonato.css';

const Campeonato = () => {

	const navigation = useContext(NavigationContext)

	return (
		<div className="center_container aboutus">
			<div>
				<img src={banner} className="img"></img>
			</div>
			<div className="container_header about_header">
				<span>Lightning Cup</span>
				<div className="traces"></div>
				<div className="traces"></div>
				<div className="traces"></div>
			</div>
			<div className="aboutus_text">
				<span>
					<p>Lightning Cup é o primeiro campeonato de E-sports na modalidade FIFA Ultimate Team (Plataforma Playstation) organizado pela DC TEAM. Empresa voltada para o cenário de jogos virtuais, com objetivo de criar interatividade entre os competidores de todo o Brasil. A organização é realizada pela equipe da DC TEAM, que oferecerá todo o suporte durante o campeonato. Os jogos serão inicialmente em fase de grupos, podendo ser agendados em um horário acordado entre os adversários. A partir das quartas de final, os jogos terão data e horário fixo, a serem definidos pela organização do campeonato. As partidas das semifinais serão com jogos de ida e volta.</p>
					<p></p>
					<h4>Ao realizar a incrição você ganha uma Camiseta Jersey DC TEAM </h4>
					<p></p>
					<img src={premiacao} className="img"></img>
					<p></p>
					<h3>Formato</h3>
					<p>64 times (FASE DE GRUPOS)</p>
					<p>16 Grupos com 04 jogadores, a serem definidos por sorteio.</p>
					<p>Semifinal e Final serão jogos de ida e volta</p>
					<p>Final com Transmissão e Narração</p>
					<p></p>
					<p className="info">* Restrição do elenco: overall 89, mínimo 75 no banco e sem jogadores de empréstimo.</p>
					<p></p>
					<h3>Pagamento e Envio das Premiações:</h3>
					<p></p>
					<p>As premiações em dinheiro serão enviadas aos ganhadores no prazo de 120 horas úteis, via transferência bancária ou PIX, respeitando o tempo de transação ocorrido pelos bancos. Os itens da premiação serão enviados em até 15 dias úteis, podendo sofrer alterações devido ao prazo das transportadoras.</p>
					<p></p>
					<p>- Transmissão e Narração profissional da GRANDE FINAL</p>
					<p>- Suporte via Whatsapp.</p>

					<div>
						<button className="button" onClick={() => navigation.alterarModalInscrever.alterarModalInscrever(true)}>Inscrever-se</button>
					</div>
					<Inscrever
						show={navigation.alterarModalInscrever.modalInscrever}
						onHide={() => navigation.alterarModalInscrever.alterarModalInscrever(false)} />
				</span>
			</div>

		</div>
	)
}

export default Campeonato;
