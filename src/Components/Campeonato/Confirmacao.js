import React, { useContext } from "react";
import Modal from 'react-bootstrap/Modal'
import { NavigationContext } from '../../contexts/navigationContext'
import { useSubmeterCadastro } from '../../utils/submeterCadastro'
import './Inscrever.css'

const Confirmacao = (dados) => {
	const navigation = useContext(NavigationContext)
	const [cadastrarUsuario] = useSubmeterCadastro()
	const pagamento = ""

	const fecharModal = () => {
		navigation.alterarModalConfirmacao.alterarModalConfirmacao(false)
	}

	const confirmarInscricao = () => {
		navigation.alterarStep.alterarStep(3)
		navigation.alterarModalConfirmacao.alterarModalConfirmacao(false)
		cadastrarUsuario(form)
	}

	const realizarPagamento = () => {
		navigation.alterarModalConfirmacao.alterarModalConfirmacao(false)
	}

	const submeter = () => {
		cadastrarUsuario(form)
		navigation.alterarModalConfirmacao.alterarModalConfirmacao(true)
	}

	const form = {
		cpf: navigation.alterarCpf.cpf,
		nome: navigation.alterarNome.nome,
		email: navigation.alterarEmail.email,
		celular: navigation.alterarCelular.celular,
		pagamento
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
			<Modal.Header>
				<h5 className='modalTextConfirmacao'>Confirmação</h5>
			</Modal.Header>
			<Modal.Body>
				<i className='modalTextConfirmacao'>
					Tem certeza que deseja sair? Já realizou o pagamento via PIX?
				</i>
			</Modal.Body>
			<Modal.Footer>
				<button className='button buttonPagamento' onClick={() => realizarPagamento()}>Realizar Pagamento</button>
				<button className='button buttonConfirmar' onClick={() => confirmarInscricao()}>Confirmar Inscrição</button>
			</Modal.Footer>
		</Modal >
	)
}

export default Confirmacao;