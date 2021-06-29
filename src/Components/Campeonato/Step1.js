import React, { useContext, useEffect, useState } from "react";
import { NavigationContext } from '../../contexts/navigationContext'
import { FormGroup, Input } from 'reactstrap';
import MaskedInput from '../../utils/maskedInput'
import { useValidarCep } from '../../utils/validarCep'
import { useValidarEndereco } from '../../utils/validarEndereco'
import { useValidarNumero } from '../../utils/validarNumero'
import { useValidarCidade } from '../../utils/validarCidade'
import { useValidarEstado } from '../../utils/validarEstado'
import { useValidarBairro } from '../../utils/validarBairro'
import { useValidarIdPsn } from '../../utils/validarIdPsn';
import { useValidarNomeTime } from '../../utils/validarNomeTime';
import { useValidarNome } from '../../utils/validarNome';
import { useValidarEmail } from '../../utils/validarEmail';
import { useValidarIdade } from '../../utils/validarIdade';
import { useValidarCelular } from '../../utils/validarCelular';
import { useValidarCPF } from '../../utils/validarCpf';
import { useSubmeterCadastroIncompleto } from '../../utils/submeterCadastroIncompleto'

import './Inscrever.css';


const Step1 = () => {

    const navigation = useContext(NavigationContext)
    const [msgCep, validarCep] = useValidarCep()
    const [msgEndereco, validarEndereco] = useValidarEndereco()
    const [msgNumero, validarNumero] = useValidarNumero()
    const [msgCidade, validarCidade] = useValidarCidade()
    const [msgEstado, validarEstado] = useValidarEstado()
    const [msgBairro, validarBairro] = useValidarBairro()
    const [msgIdPsn, validarIdPsn] = useValidarIdPsn()
    const [msgNomeTime, validarNomeTime] = useValidarNomeTime()
    const [msgNome, validarNome] = useValidarNome()
    const [msgCelular, validarCelular] = useValidarCelular()
    const [msgEmail, validarEmail] = useValidarEmail()
    const [msgIdade, validarIdade] = useValidarIdade()
    const [msgCpf, validarCPF] = useValidarCPF()
    const [msgAvancar, setMsgAvancar] = useState(false)
    const [cadastrarUsuario] = useSubmeterCadastroIncompleto()

    const selecionarJersey = tam => {
        navigation.alterarTamanhoJersey.alterarTamanhoJersey(tam)
    }

    const submeter = () => {
        cadastrarUsuario(form)
    }

    const form = {
        cpf: navigation.alterarCpf.cpf,
        nome: navigation.alterarNome.nome,
        email: navigation.alterarEmail.email,
        celular: navigation.alterarCelular.celular
    }

    const avancar = () => {
        if (
            navigation.alterarCpf.statusCpf &&
            navigation.alterarNome.statusNome &&
            navigation.alterarEmail.statusEmail &&
            navigation.alterarCelular.statusCelular
        ) {
            submeter()
            navigation.alterarStep.alterarStep(2)
            setMsgAvancar(false)
        } else {
            setMsgAvancar(true)
        }
    }

    const fecharModal = () => {
		navigation.alterarModalInscrever.alterarModalInscrever(false)
		navigation.alterarStep.alterarStep(1)
	}


    return (
        <div>
            <FormGroup>
                <div>
                    <p className='modalText'>As inscrições ocorrerão do dia 30/06 à 07/07 e terão vagas limitadas!</p>
                    <p>*Os 5 primeiros a se inscrever receberão um salve do general @Douglascosta</p>
                    <p>*A Lightning Cup será realizada de 09/07 à 16/07</p>
                </div>
                <div class='row'>
                    <div class='col-6'>
                        <label>CPF *</label>
                        <MaskedInput
                            name="cpf"
                            value={navigation.alterarCpf.cpf}
                            onChange={evt => navigation.alterarCpf.alterarCpf(evt.target.value)}
                            onBlur={validarCPF}
                            mascara="999.999.999-99"
                            required
                        />
                        {
                            !navigation.alterarCpf.statusCpf && msgCpf !== '' && <p className=' avisos'>{msgCpf}</p>
                        }

                    </div>

                    <div class='col-6'>
                        <label>Nome Completo *</label>
                        <Input
                            name="nome"
                            value={navigation.alterarNome.nome}
                            onChange={evt => navigation.alterarNome.alterarNome(evt.target.value)}
                            onBlur={validarNome}
                            required
                        />
                        {
                            !navigation.alterarNome.statusNome && msgNome !== '' && <p className=' avisos'>{msgNome}</p>
                        }
                    </div>
                </div>

                <div class='row'>
                    <div class='col-6'>
                        <label>Email *</label>
                        <Input
                            name="email"
                            value={navigation.alterarEmail.email}
                            onChange={evt => navigation.alterarEmail.alterarEmail(evt.target.value)}
                            onBlur={validarEmail}
                            required
                        />
                        {
                            !navigation.alterarEmail.statusEmail && msgEmail !== '' && <p className=' avisos'>{msgEmail}</p>
                        }

                    </div>

                    <div class='col-6'>
                        <label>Celular *</label>
                        <MaskedInput
                            name="celular"
                            value={navigation.alterarCelular.celular}
                            onChange={evt => navigation.alterarCelular.alterarCelular(evt.target.value)}
                            onBlur={validarCelular}
                            mascara="(99) 99999-9999"
                            required
                        />
                        {
                            !navigation.alterarCelular.statusCelular && msgCelular !== '' && <p className=' avisos'>{msgCelular}</p>
                        }
                    </div>
                </div>
            </FormGroup>
            <p>* Campos Obrigatórios</p>
            {msgAvancar &&
                <p className='aviso'>Revisar os seus dados!</p>
            }
            <div>
                <button className="buttonModal" onClick={() => avancar()}>PRÓXIMO</button>
            </div>
        </div >


    )
}

export default Step1;
