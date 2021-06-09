import React, { useContext } from "react";
import Modal from 'react-bootstrap/Modal'
import { NavigationContext } from '../contexts/navigationContext'
import Step1 from './Step1'
import Step2 from './Step2'


import './Inscrever.css';


const Inscrever = (dados) => {
	const navigation = useContext(NavigationContext)

	const renderStep = () => {
		switch (navigation.alterarStep.step) {
			case 1:
				return <Step1 />
			case 2:
				return <Step2 />
			default:
				return <Step1 />
		}
	}
	
	const fecharModal = () => {
		navigation.alterarModalInscrever.alterarModalInscrever(false)
		navigation.alterarStep.alterarStep(1)
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
				{renderStep()}
			</Modal.Body>
		</Modal >
	)
}

export default Inscrever;