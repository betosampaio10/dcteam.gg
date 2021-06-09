import React, { useContext, useEffect, useState } from "react";
import { NavigationContext } from '../contexts/navigationContext'
import { FormGroup } from 'reactstrap';
import QrCode from '../Assets/Logo/qrCode2.jpeg'
import { useSubmeterCadastro } from '../utils/submeterCadastro'

import './Inscrever.css';


const Step2 = () => {
    const navigation = useContext(NavigationContext)
    const [cadastrarUsuario] = useSubmeterCadastro()

    const submeter = () => {
        cadastrarUsuario(form)
    }

    const form = {
        idPsn: navigation.alterarIdPsn.idPsn,
        nomeTime: navigation.alterarNomeTime.nomeTime,
        idade: navigation.alterarIdade.idade,
        cpf: navigation.alterarCpf.cpf,
        nome: navigation.alterarNome.nome,
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
        personalizacao: navigation.alterarPersonalizacao.personalizacao
    }

    return (
        <div>
            <FormGroup>
                <div>
                    <p>ATENÇÃO: Para confirmar sua inscrição você deve realizar o pagamento para o PIX abaixo. Inserir o seu CPF cadastrado nas informações da transferência do pix e enviar o comprovante para o e-mail braz@dcteam.gg com seu CPF, email e login PSN.</p>
                </div>
                <div class='row'>
                    <div class='col-2'>
                        <img src={QrCode} className="qrCode"></img>
                    </div>
                    <div class='col-10 mt-4'>
                        <p>Chave PIX: 2b45f00b-f216-49cc-a23d-d3729575882d</p>
                    </div>
                </div>
            </FormGroup>
            <div>
                <button className="button" onClick={() => submeter()}>Inscrever-se</button>
            </div>
        </div>
    )
}

export default Step2;
