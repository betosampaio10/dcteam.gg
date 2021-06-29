import React, { useContext } from "react";
import Modal from 'react-bootstrap/Modal'
import { NavigationContext } from '../../contexts/navigationContext'
import './Inscrever.css'

const EmBreve = (dados) => {
	const navigation = useContext(NavigationContext)

	const fecharModal = () => {
		navigation.alterarModalEmBreve.alterarModalEmBreve(false)
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
				<Modal.Title id="contained-modal-title-vcenter">Inscever-se</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<i className='modalText'>
					As inscrições ainda não foram iniciadas.
				</i>
			</Modal.Body>
		</Modal >
	)
}

export default EmBreve;