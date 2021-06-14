import React, {  useEffect, useContext } from "react";
import banner from '../Assets/Times/fifa_banner2.png';
import premiacao from '../Assets/Times/premiacao_campeonato.png';
import { NavigationContext } from '../contexts/navigationContext'
import Inscrever from './Inscrever'
import { useListarUsuarios } from '../utils/listarUsuarios'

import './Campeonato.css';

const Campeonato = () => {

	const [buscarUsuario] = useListarUsuarios()
	const navigation = useContext(NavigationContext)

	useEffect(() => {
		buscarUsuario()
	}, [])

	useEffect(() => {
		let keys = []
		if (navigation.alterarListaUsuarios.listaUsuarios != null) {
			keys = Object.keys(navigation.alterarListaUsuarios.listaUsuarios)
		}
		let cpfs = []
		let idpsn = []
		let emails = []
		let totalInscritos = 0
		keys.map(key => {
			emails.push(navigation.alterarListaUsuarios.listaUsuarios[key].email)
			idpsn.push(navigation.alterarListaUsuarios.listaUsuarios[key].idPsn)
			cpfs.push(navigation.alterarListaUsuarios.listaUsuarios[key].cpf)
			if (navigation.alterarListaUsuarios.listaUsuarios[key].pagamento) {
				totalInscritos = totalInscritos + 1
			}
		})
		navigation.alterarListaCpf.alterarListaCpf(cpfs)
		navigation.alterarListaIdPsn.alterarListaIdPsn(idpsn)
		navigation.alterarListaEmail.alterarListaEmail(emails)
		navigation.alterarTotalInscritos.alterarTotalInscritos(totalInscritos)
	}, [navigation.alterarListaUsuarios.listaUsuarios])

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
					<h3>Inscrições</h3>
					<p></p>
					<p>As incrições vão de 18 de junho à 25 de junho as 23h59.</p>
					<p></p>
					<h3>Campeonato</h3>
					<p></p>
					<p>O Campeonato ocorrerá do dia 02 de julho à 09 de julho.</p>
					<p></p>
					<img src={premiacao} className="img"></img>
					<p></p>
					<h3>Formato</h3>
					<p>64 times (FASE DE GRUPOS)</p>
					<p>16 Grupos com 04 jogadores, a serem definidos por sorteio.</p>
					<p>Semifinal e Final serão jogos de ida e volta</p>
					<p>Final com Transmissão e Narração</p>
					<p>Toda estrutura do campeonato será realizada na Arena 17, ao realizar a inscrição você será redirecionado ao link do campeonato.</p>
					<p></p>
					<p className="info">* Restrição do elenco: overall 89, mínimo 75 no banco e sem jogadores de empréstimo.</p>
					<p></p>
					<h3>Pagamento e Envio das Premiações:</h3>
					<p></p>
					<p>Taxa de inscrição: R$140,00</p>
					<p></p>
					<p>As premiações em dinheiro serão enviadas aos ganhadores no prazo de 120 horas úteis, via PIX. Os itens da premiação serão enviados em até 15 dias úteis, podendo sofrer alterações devido ao prazo das transportadoras.</p>
					<p></p>
					<p className='mb-0'>- Transmissão e Narração profissional da GRANDE FINAL</p>
					<a href='https://www.twitch.tv/dcteam_gg' className='mt-0'>https://www.twitch.tv/dcteam_gg</a>
					<p></p>
					<p>- Suporte via Whatsapp (11) 93758-2250</p>
					{navigation.alterarTotalInscritos.totalInscritos < 64 &&
						<div>
							<button className="button" onClick={() => navigation.alterarModalInscrever.alterarModalInscrever(true)}>Inscrever-se</button>
						</div>
					}
					{navigation.alterarTotalInscritos.totalInscritos >= 64 && <p className='text-danger avisos'>Inscrições Encerradas!!</p>}
					<Inscrever
						show={navigation.alterarModalInscrever.modalInscrever}
						onHide={() => navigation.alterarModalInscrever.alterarModalInscrever(false)} />
				</span>
			</div>

		</div>
	)
}

export default Campeonato;
