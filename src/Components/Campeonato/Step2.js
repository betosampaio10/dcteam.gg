import React, { useContext, useEffect, useState } from "react";
import { NavigationContext } from '../../contexts/navigationContext'
import { FormGroup } from 'reactstrap';
import QrCode from '../../Assets/Campeonato/qrCodeCampeonato.jpeg'

import Confirmacao from './Confirmacao'

import './Inscrever.css';

const Step2 = () => {
    const navigation = useContext(NavigationContext)

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
                <button className='buttonModal' onClick={() => navigation.alterarModalConfirmacao.alterarModalConfirmacao(true)}>FINALIZAR</button>
            </div>
            <Confirmacao
                show={navigation.alterarModalConfirmacao.modalConfirmacao}
                onHide={() => navigation.alterarModalConfirmacao.alterarModalConfirmacao(false)} />
        </div>
    )
}

export default Step2;