import React, { useContext } from "react";
import Modal from 'react-bootstrap/Modal'
import { NavigationContext } from '../../contexts/navigationContext'
import logo from '../../Assets/Logo/Logo1.png'
import './Inscrever.css'

const Lightning = (dados) => {
	const navigation = useContext(NavigationContext)

	const fecharModal = () => {
		navigation.alterarModalLightning.alterarModalLightning(false)
	}

	return (
		<Modal
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			backdrop='static'
			show={dados.show}
			onHide={() => fecharModal()}
			className='modal'>
			<div className='fundoRoxo'>
				<p className='float-right mt-0 mr-1 cursorPointer' onClick={() => fecharModal()}>X</p>
				<img src={logo} className='logoInscrever' />
			</div>
			<Modal.Body className='fundoRoxo'>
				<i className='modalText teste'>
					Lightning Cup é o primeiro campeonato de E-sports na modalidade FIFA Ultimate Team (Plataforma Playstation) organizado pela DC TEAM. Empresa voltada para o cenário de jogos virtuais, com objetivo de criar interatividade entre os competidores de todo o Brasil. A organização é realizada pela equipe da DC TEAM, que oferecerá todo o suporte durante o campeonato. Os jogos serão inicialmente em fase de grupos, podendo ser agendados em um horário acordado entre os adversários. A partir das quartas de final, os jogos terão data e horário fixo, a serem definidos pela organização do campeonato. A final será com jogos de ida e volta.
				</i>
			</Modal.Body>
		</Modal >
	)
}

export default Lightning;