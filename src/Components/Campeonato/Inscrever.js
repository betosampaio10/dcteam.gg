import React, { useContext } from "react";
import Modal from 'react-bootstrap/Modal'
import { NavigationContext } from '../../contexts/navigationContext'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import logo from '../../Assets/Logo/Logo1.png'



import './Inscrever.css';


const Inscrever = (dados) => {
	const navigation = useContext(NavigationContext)

	const renderStep = () => {
		switch (navigation.alterarStep.step) {
			case 1:
				return <Step1 />
			case 2:
				return <Step2 />
			case 3:
				return <Step3 />
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
			<Modal.Body className='fundoRoxo'>
				<div className='fundoRoxo'>
					<p className='float-right mt-0 mr-1 cursorPointer' onClick={() => fecharModal()}>X</p>
					<img src={logo} className='logoInscrever' />
				</div>
				{renderStep()}
			</Modal.Body>
		</Modal >
	)
}

export default Inscrever;