import React, { useEffect, useContext } from "react";
import { NavigationContext } from '../../contexts/navigationContext'
import Inscrever from './Inscrever'
import Lightning from './Lightning'
import Regulamento from './Regulamento'
import Inscricao from './Inscricao'
import Premiacao from './Premiacao'
import EmBreve from './EmBreve'
import { useListarUsuarios } from '../../utils/listarUsuarios'
import lightningCup from '../../Assets/Campeonato/Lightning Cup.png'
import inscricao from '../../Assets/Campeonato/Inscricao.png'
import premiacao from '../../Assets/Campeonato/Premiacao.png'
import regulamento from '../../Assets/Campeonato/Regulamento.png'
import inscrevase from '../../Assets/Campeonato/inscrevase.png'
import poweredby from '../../Assets/Campeonato/poweredby.png'
import logofifa from '../../Assets/Campeonato/logofifa.png'
import { useSubmeterDataHora } from '../../utils/submeterDataHora'

import './Campeonato.css';

const Campeonato = () => {

	const [buscarUsuario] = useListarUsuarios()
	const [submeterDataHora] = useSubmeterDataHora()
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


	const inscrever = () => {
		navigation.alterarModalInscrever.alterarModalInscrever(true)
		let data = new Date()
		const form = {
			data: data.toString()
		}
		submeterDataHora(form)

	}

	return (
		<div className="aboutus">
			<div>
				<div className='divLightningCup row'>
					<div className='col-4 divBtn'>
						<img className='lightningCup mb-3 cursorPointer' src={lightningCup} onClick={() => navigation.alterarModalLightning.alterarModalLightning(true)} />
					</div>
					<div className=' col-4 divBtn'>
						<img src={logofifa} className='logofifa' />
					</div>
					{navigation.alterarTotalInscritos.totalInscritos < 64 &&
						<div className='col-4 Divinscrevase cursorPointer'>
							<img src={inscrevase} className='inscrevase' onClick={() => inscrever()} />
						</div>
					}

				</div>
				<div className='row mt-5 mb-1 cards'>
					<div className='col-lg-4 col-md-12 '>
						<img className='cardsImg cursorPointer' src={premiacao} onClick={() => navigation.alterarModalPremiacao.alterarModalPremiacao(true)} />
						<div className='divBtn'>
							<button className='mt-0 cardsBtn' onClick={() => navigation.alterarModalPremiacao.alterarModalPremiacao(true)}>SAIBA MAIS</button>
						</div>
					</div>
					<div className='col-lg-4 col-md-12 '>
						<img className='cardsImg inscricaoCardImg cursorPointer' src={inscricao} onClick={() => inscrever()} />
						<div className='divBtn'>

						</div>

					</div>
					<div className='col-lg-4 col-md-12 '>
						<img className='cardsImg cursorPointer' src={regulamento} onClick={() => navigation.alterarModalRegulamento.alterarModalRegulamento(true)} />
						<div className='divBtn'>
							<button className='mt-0 cardsBtn' onClick={() => navigation.alterarModalRegulamento.alterarModalRegulamento(true)}>SAIBA MAIS</button>
						</div>
					</div>
				</div>
				<div className='divBtn mb-3'>
					<img className='poweredby' src={poweredby} />
				</div>
			</div>
			<Inscrever
				show={navigation.alterarModalInscrever.modalInscrever}
				onHide={() => navigation.alterarModalInscrever.alterarModalInscrever(false)} />
			<Lightning
				show={navigation.alterarModalLightning.modalLightning}
				onHide={() => navigation.alterarModalLightning.alterarModalLightning(false)} />
			<Regulamento
				show={navigation.alterarModalRegulamento.modalRegulamento}
				onHide={() => navigation.alterarModalRegulamento.alterarModalRegulamento(false)} />
			<Premiacao
				show={navigation.alterarModalPremiacao.modalPremiacao}
				onHide={() => navigation.alterarModalPremiacao.alterarModalPremiacao(false)} />
			<Inscricao
				show={navigation.alterarModalInscricao.modalInscricao}
				onHide={() => navigation.alterarModalInscricao.alterarModalInscricao(false)} />
			<EmBreve
				show={navigation.alterarModalEmBreve.modalEmBreve}
				onHide={() => navigation.alterarModalEmBreve.alterarModalEmBreve(false)} />
		</div>

	)
}

export default Campeonato;
