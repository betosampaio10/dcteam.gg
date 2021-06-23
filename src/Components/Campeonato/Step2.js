import React, { useContext, useEffect, useState } from "react";
import { NavigationContext } from '../../contexts/navigationContext'
import { FormGroup } from 'reactstrap';
import QrCode from '../../Assets/Logo/qrCodeCampeonato.jpeg'
import { useSubmeterCadastro } from '../../utils/submeterCadastro'

import './Inscrever.css';


const Step2 = () => {
    const navigation = useContext(NavigationContext)
    const [cadastrarUsuario] = useSubmeterCadastro()
    const pagamento = ""

    const submeter = () => {
        cadastrarUsuario(form)
        navigation.alterarStep.alterarStep(3)
    }

    const form = {
        idPsn: navigation.alterarIdPsn.idPsn,
        nomeTime: navigation.alterarNomeTime.nomeTime,
        idade: navigation.alterarIdade.idade,
        cpf: navigation.alterarCpf.cpf,
        cpfResponsavel: navigation.alterarCpfResponsavel.cpfResponsavel,
        nome: navigation.alterarNome.nome,
        nomeResponsavel: navigation.alterarNomeResponsavel.nomeResponsavel,
        email: navigation.alterarEmail.email,
        celular: navigation.alterarCelular.celular,
        cep: navigation.alterarCep.cep,
        endereco: navigation.alterarEndereco.endereco,
        numero: navigation.alterarNumero.numero,
        complemento: navigation.alterarComplemento.complemento,
        bairro: navigation.alterarBairro.bairro,
        cidade: navigation.alterarCidade.cidade,
        estado: navigation.alterarEstado.estado,
        tamanhoJersey: navigation.alterarTamanhoJersey.tamanhoJersey,
        personalizacaoNome: navigation.alterarPersonalizacaoNome.personalizacaoNome,
        personalizacaoNumero: navigation.alterarPersonalizacaoNumero.personalizacaoNumero,
        pagamento
    }

    return (
        <div>
            <FormGroup>
                <div>
                    <div className='row'>
                        <div className='col-6'>
                            <p>{'->'} Para pagamentos via QR Code:</p>
                            <p>1 - Abra o APP do seu banco.</p>
                            <p>2 - Vá até PIX.</p>
                            <p>3 - Apontar a câmera do seu celular para o QR Code abaixo:</p>
                            <img src={QrCode} className="qrCode"></img>
                            <p>&nbsp;&nbsp;&nbsp;- Nome: Rony Ferreira Gomes</p>
                            <p>&nbsp;&nbsp;&nbsp;- CPF: *.276.038-*</p>
                            <p>&nbsp;&nbsp;&nbsp;- Banco Bradesco S.A.</p>
                            <p>4 - Confirme o pagamento.</p>
                        </div>
                        <div className='col-6'>
                            <p>{'->'} Para pagamentos via chave pix:</p>
                            <p>1 - Abra o APP do seu banco.</p>
                            <p>2 - Vá até PIX.</p>
                            <p>3 - Insira a chave: pix.dcteam@gmail.com</p>
                            <p>&nbsp;&nbsp;&nbsp;- Nome: Rony Ferreira Gomes</p>
                            <p>&nbsp;&nbsp;&nbsp;- CPF: *.276.038-*</p>
                            <p>&nbsp;&nbsp;&nbsp;- Banco Bradesco S.A.</p>
                            <p>4 - Confirme o pagamento.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>ATENÇÃO: Para confirmar sua inscrição você deve realizar o pagamento do PIX, inserir o seu CPF cadastrado nas informações da transferência do pix e enviar o comprovante para o e-mail braz@dcteam.gg com seu CPF, email e login PSN.</p>
                </div>
            </FormGroup>
            <div>
                <button className="button" onClick={() => submeter()}>Inscrever-se</button>
            </div>
        </div>
    )
}

export default Step2;