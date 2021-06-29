import React, { useContext } from "react";
import Modal from 'react-bootstrap/Modal'
import { NavigationContext } from '../../contexts/navigationContext'
import logo from '../../Assets/Logo/Logo1.png'
import './Inscrever.css'

const Premiacao = (dados) => {
	const navigation = useContext(NavigationContext)

	const fecharModal = () => {
		navigation.alterarModalPremiacao.alterarModalPremiacao(false)
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
			<h3 className='modalTextTitle'>Premiações</h3>
					<p className='modalText'>1 - R$ 1000,00  + Jersey DC Team Personalizada</p>
					<p></p>
					<p className='modalText'>2 - R$ 400,00 + Jersey DC Team Personalizada</p>
					<p></p>
					<p className='modalText'>3 - R$ 200,00 + Jersey DC Team Personalizada</p>
					<p></p>
					<p className='modalText' className="info">* Todas as transferências serão realizadas via PIX.</p>
					<p></p>
					<h3 className='modalTextTitle'>Pagamento e Envio das Premiações:</h3>
					<p></p>
					<p className='modalText'>As premiações em dinheiro serão enviadas aos ganhadores no prazo de 120 horas úteis, via PIX. Os itens da premiação serão enviados em até 15 dias úteis após a finalização do campeonato, podendo sofrer alterações devido ao prazo das transportadoras.</p>
					<p></p>
			</Modal.Body>
		</Modal >
	)
}

export default Premiacao;