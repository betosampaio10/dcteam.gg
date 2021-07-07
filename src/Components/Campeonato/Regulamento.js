import React, { useContext } from "react";
import Modal from 'react-bootstrap/Modal'
import { NavigationContext } from '../../contexts/navigationContext'
import logo from '../../Assets/Logo/Logo1.png'
import './Inscrever.css'

const Regulamento = (dados) => {
	const navigation = useContext(NavigationContext)

	const fecharModal = () => {
		navigation.alterarModalRegulamento.alterarModalRegulamento(false)
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
			<Modal.Body className='fundoRoxo'>
				<div className='fundoRoxo'>
					<p className='float-right mt-0 mr-1 cursorPointer' onClick={() => fecharModal()}>X</p>
					<img src={logo} className='logoInscrever' />
				</div>
				<h3 className='modalTextTitle'>Período do campeonato</h3>
				<p className='modalText'>O campeonato iniciará dia 09/07 e terá sua final no dia 16/07!</p>
				<h3 className='modalTextTitle'>Plataforma</h3>
				<p className='modalText'>Playstation 4</p>
				<h3 className='modalTextTitle'>Formato</h3>
				<p className='modalText'>64 times (FASE DE GRUPOS)</p>
				<p className='modalText'>16 Grupos com 04 jogadores, a serem definidos por sorteio.</p>
				<p className='modalText'>A grande final será realizada com jogos de ida e volta</p>
				<p className='modalText'>Final com Transmissão e Narração</p>
				<p className='modalText'>Toda estrutura do campeonato será realizada na Arena 17, ao realizar a inscrição você será redirecionado ao link do campeonato.</p>
				<p></p>
				<p className="info">* Restrição do elenco: overall 89, mínimo 75 no banco e sem jogadores de empréstimo.</p>
			</Modal.Body>
		</Modal >
	)
}

export default Regulamento;