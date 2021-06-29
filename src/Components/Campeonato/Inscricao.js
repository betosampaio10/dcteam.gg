import React, { useContext } from "react";
import Modal from 'react-bootstrap/Modal'
import { NavigationContext } from '../../contexts/navigationContext'
import './Inscrever.css'

const Inscricao = (dados) => {
	const navigation = useContext(NavigationContext)

	const fecharModal = () => {
		navigation.alterarModalInscricao.alterarModalInscricao(false)
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
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">Inscrição</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<i className='modalText'>
					Mais informações em breve.
				</i>
			</Modal.Body>
		</Modal >
	)
}

export default Inscricao;