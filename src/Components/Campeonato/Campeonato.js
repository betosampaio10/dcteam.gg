import React, { useEffect, useContext } from "react";
import banner from '../../Assets/Times/fifa_banner2.png';
import premiacao from '../../Assets/Times/premiacao_campeonato.png';
import { NavigationContext } from '../../contexts/navigationContext'
import Inscrever from './Inscrever'
import { useListarUsuarios } from '../../utils/listarUsuarios'

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
				<img src={banner} className="img_banner"></img>
			</div>
			<div className="container_header about_header">
				<span>Lightning Cup</span>
				<div className="traces"></div>
				<div className="traces"></div>
				<div className="traces"></div>
			</div>
			<div className="aboutus_text mb-5">
				<span className='mb-5'>
					<p>Lightning Cup é o primeiro campeonato de E-sports na modalidade FIFA Ultimate Team (Plataforma Playstation) organizado pela DC TEAM. Empresa voltada para o cenário de jogos virtuais, com objetivo de criar interatividade entre os competidores de todo o Brasil. A organização é realizada pela equipe da DC TEAM, que oferecerá todo o suporte durante o campeonato. Os jogos serão inicialmente em fase de grupos, podendo ser agendados em um horário acordado entre os adversários. A partir das quartas de final, os jogos terão data e horário fixo, a serem definidos pela organização do campeonato. A final será com jogos de ida e volta.</p>
					<p></p>
					<h3>Inscrições</h3>
					<p></p>
					<p>As incrições vão de 17 de junho à 02 de julho ate as 23h59.</p>
					<p></p>
					<h3>Campeonato</h3>
					<p></p>
					<p>O Campeonato ocorrerá do dia 09 de julho à 16 de julho.</p>
					<p></p>
				</span>
			</div>
			<div className='mt-5 mb-0'>
				<img src={premiacao} className="img"></img>
			</div>
			<div className="aboutus_text">
				<span>
					<p></p>
					<h3>Formato</h3>
					<p>64 times (FASE DE GRUPOS)</p>
					<p>16 Grupos com 04 jogadores, a serem definidos por sorteio.</p>
					<p>A grande final será realizada com jogos de ida e volta</p>
					<p>Final com Transmissão e Narração</p>
					<p>Toda estrutura do campeonato será realizada na Arena 17, ao realizar a inscrição você será redirecionado ao link do campeonato.</p>
					<p></p>
					<p className="info">* Restrição do elenco: overall 89, mínimo 75 no banco e sem jogadores de empréstimo.</p>
					<p></p>
					<h3>Premiações</h3>
					<p>1 - R$ 1000,00  + Controle Personalizado + Trofeu</p>
					<p></p>
					<p>2 - R$ 400,00  + Trofeu</p>
					<p></p>
					<p>3 - R$ 200,00 + Troféu</p>
					<p></p>
					<p>4 - Kit DC Team</p>
					<p></p>
					<p className="info">* Todas as transferencias serão realizadas via PIX.</p>
					<p></p>
					<h3>Pagamento e Envio das Premiações:</h3>
					<p></p>
					<p>Taxa de inscrição: R$140,00 (Ao realizar a inscrição você ganha uma Camiseta Jersey DC Team personalizada)</p>
					<p></p>
					<p>As premiações em dinheiro serão enviadas aos ganhadores no prazo de 120 horas úteis, via PIX. Os itens da premiação serão enviados em até 15 dias úteis após a finalização do campeonato, podendo sofrer alterações devido ao prazo das transportadoras.</p>
					<p></p>
					<p className='mb-0'>- Transmissão e Narração profissional da GRANDE FINAL</p>
					<a href='https://www.twitch.tv/dcteam_gg' className='mt-0'>https://www.twitch.tv/dcteam_gg</a>
					<p></p>
					<div>
						<p className='mb-0'>- Suporte via Whatsapp</p>
						<a href="https://api.whatsapp.com/send?phone=551193758-2250" className="float mt-0" >
							<i className="fab fa-whatsapp my-float botao mb-5"></i>
						</a>
					</div>

					{navigation.alterarTotalInscritos.totalInscritos < 64 &&
						<div>
							<button className="button mt-3 mb-2" onClick={() => navigation.alterarModalInscrever.alterarModalInscrever(true)}>Inscrever-se</button>
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
