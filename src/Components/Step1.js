import React, { useContext, useEffect, useState } from "react";
import { NavigationContext } from '../contexts/navigationContext'
import { FormGroup, Input } from 'reactstrap';
import MaskedInput from './maskedInput'
import { useValidarCep } from '../utils/validarCep'
import { useValidarEndereco } from '../utils/validarEndereco'
import { useValidarNumero } from '../utils/validarNumero'
import { useValidarCidade } from '../utils/validarCidade'
import { useValidarEstado } from '../utils/validarEstado'
import { useValidarBairro } from '../utils/validarBairro'
import { useValidarIdPsn } from '../utils/validarIdPsn';
import { useValidarNomeTime } from '../utils/validarNomeTime';
import { useValidarNome } from '../utils/validarNome';
import { useValidarEmail } from '../utils/validarEmail';
import { useValidarIdade } from '../utils/validarIdade';
import { useValidarCelular } from '../utils/validarCelular';
import { useValidarCPF } from '../utils/validarCpf';
import { useListarUsuarios } from '../utils/listarUsuarios'

import './Inscrever.css';


const Step1 = () => {

    const navigation = useContext(NavigationContext)
    const [msgCep, enderecoDisabled, logradouro, bairro, municipio, uf, preenchido, buscarCep] = useValidarCep()
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
    const [buscarUsuario] = useListarUsuarios()

    const selecionarJersey = tam => {
        navigation.alterarTamanhoJersey.alterarTamanhoJersey(tam)
    }

    useEffect(() => {
        buscarUsuario()
    }, [])

    useEffect(() => {
        let keys = Object.keys(navigation.alterarListaUsuarios.listaUsuarios)
        let cpfs = []
        let idpsn = []
        let emails = []
        keys.map(key => {
            emails.push(navigation.alterarListaUsuarios.listaUsuarios[key].email)
            idpsn.push(navigation.alterarListaUsuarios.listaUsuarios[key].idPsn)
            cpfs.push(navigation.alterarListaUsuarios.listaUsuarios[key].cpf)
        })
        navigation.alterarListaCpf.alterarListaCpf(cpfs)
        navigation.alterarListaIdPsn.alterarListaIdPsn(idpsn)
        navigation.alterarListaEmail.alterarListaEmail(emails)
    }, [navigation.alterarListaUsuarios.listaUsuarios])

    const avancar = () => {
        if (
            navigation.alterarIdPsn.statusIdPsn &&
            navigation.alterarNomeTime.statusNomeTime &&
            navigation.alterarIdade.statusIdade &&
            navigation.alterarCpf.statusCpf &&
            navigation.alterarNome.statusNome &&
            navigation.alterarEmail.statusEmail &&
            navigation.alterarCelular.statusCelular &&
            navigation.alterarCep.statusCep &&
            navigation.alterarEndereco.statusEndereco &&
            navigation.alterarNumero.statusNumero &&
            navigation.alterarBairro.statusBairro &&
            navigation.alterarCidade.statusCidade &&
            navigation.alterarEstado.statusEstado           
        ) {
            navigation.alterarStep.alterarStep(2)
            setMsgAvancar(false)
        } else {
            setMsgAvancar(true)
        }
    }


    return (
        <div>
            <FormGroup>
                <div>
                    <p>Taxa de inscrição R$180,00.</p>
                    <p>Na compra da sua inscrição você GANHA uma Camiseta Jersey da DC Team!</p>
                </div>

                <div class='row'>
                    <div class='col-3'>
                        <label>ID PSN *</label>
                        <Input
                            name="id_psn"
                            value={navigation.alterarIdPsn.idPsn}
                            onChange={evt => navigation.alterarIdPsn.alterarIdPsn(evt.target.value)}
                            onBlur={validarIdPsn}
                            required
                        />
                        {
                            !navigation.alterarIdPsn.statusIdPsn && msgIdPsn !== '' && <p className='text-danger avisos'>{msgIdPsn}</p>
                        }
                    </div>
                    <div class='col-6'>
                        <label>Nome do Time *</label>
                        <Input
                            name="nome"
                            value={navigation.alterarNomeTime.nomeTime}
                            onChange={evt => navigation.alterarNomeTime.alterarNomeTime(evt.target.value)}
                            onBlur={validarNomeTime}
                            required
                        />
                        {
                            !navigation.alterarNomeTime.statusNomeTime && msgNomeTime !== '' && <p className='text-danger avisos'>{msgNomeTime}</p>
                        }
                    </div>
                    <div class='col-3'>
                        <label>Idade *</label>
                        <Input
                            name="idade"
                            type='number'
                            value={navigation.alterarIdade.idade}
                            onChange={evt => navigation.alterarIdade.alterarIdade(evt.target.value)}
                            onBlur={validarIdade}
                            required
                        />
                        {
                            !navigation.alterarIdade.statusIdade && msgIdade !== '' && <p className='text-danger avisos'>{msgIdade}</p>
                        }
                    </div>
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
                            !navigation.alterarCpf.statusCpf && msgCpf !== '' && <p className='text-danger avisos'>{msgCpf}</p>
                        }

                    </div>

                    <div class='col-6'>
                        <label>Nome *</label>
                        <Input
                            name="nome"
                            value={navigation.alterarNome.nome}
                            onChange={evt => navigation.alterarNome.alterarNome(evt.target.value)}
                            onBlur={validarNome}
                            required
                        />
                        {
                            !navigation.alterarNome.statusNome && msgNome !== '' && <p className='text-danger avisos'>{msgNome}</p>
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
                            !navigation.alterarEmail.statusEmail && msgEmail !== '' && <p className='text-danger avisos'>{msgEmail}</p>
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
                            !navigation.alterarCelular.statusCelular && msgCelular !== '' && <p className='text-danger avisos'>{msgCelular}</p>
                        }
                    </div>
                </div>

                <div class='row'>
                    <div class='col-6'>
                        <label>CEP *</label>
                        <MaskedInput
                            name="cep"
                            minLength="4"
                            maxLength="255"
                            value={navigation.alterarCep.cep}
                            onChange={evt => navigation.alterarCep.alterarCep(evt.target.value)}
                            onBlur={buscarCep}
                            mascara="99999-999"
                            required
                        />
                        {
                            !navigation.alterarCep.statusCep && msgCep !== '' && <p className='text-danger avisos'>{msgCep}</p>
                        }
                    </div>
                    <div class='col-6'>
                        <label>Endereço *</label>
                        <Input
                            name="endereco"
                            value={navigation.alterarEndereco.endereco}
                            onChange={evt => navigation.alterarEndereco.alterarEndereco(evt.target.value)}
                            disabled={enderecoDisabled}
                            onBlur={validarEndereco}
                            required
                        />
                        {
                            !navigation.alterarEndereco.statusEndereco && msgEndereco !== '' && <p className='text-danger avisos'>{msgEndereco}</p>
                        }
                    </div>

                </div>

                <div class='row'>
                    <div class='col-6'>
                        <label>Número *</label>
                        <Input
                            name="estado"
                            value={navigation.alterarNumero.numero}
                            onChange={evt => navigation.alterarNumero.alterarNumero(evt.target.value)}
                            onBlur={validarNumero}
                            required
                        />
                        {
                            !navigation.alterarNumero.statusNumero && msgNumero !== '' && <p className='text-danger avisos'>{msgNumero}</p>
                        }
                    </div>
                    <div class='col-6'>
                        <label>Complemento</label>
                        <Input
                            name="complemento"
                            value={navigation.alterarComplemento.complemento}
                            onChange={evt => navigation.alterarComplemento.alterarComplemento(evt.target.value)}
                        />
                    </div>

                </div>

                <div class='row'>
                    <div class='col-12'>
                        <label>Bairro *</label>
                        <Input
                            name="bairro"
                            value={navigation.alterarBairro.bairro}
                            onChange={evt => navigation.alterarBairro.alterarBairro(evt.target.value)}
                            disabled={enderecoDisabled}
                            onBlur={validarBairro}
                            required
                        />
                        {
                            !navigation.alterarBairro.statusBairro && msgBairro !== '' && <p className='text-danger avisos'>{msgBairro}</p>
                        }
                    </div>
                </div>

                <div class='row'>
                    <div class='col-6'>
                        <label>Cidade *</label>
                        <Input
                            name="cidade"
                            value={navigation.alterarCidade.cidade}
                            onChange={evt => navigation.alterarCidade.alterarCidade(evt.target.value)}
                            disabled={enderecoDisabled}
                            onBlur={validarCidade}
                            required
                        />
                        {
                            !navigation.alterarCidade.statusCidade && msgCidade !== '' && <p className='text-danger avisos'>{msgCidade}</p>
                        }
                    </div>
                    <div class='col-6'>
                        <label>Estado *</label>
                        <Input
                            name="estado"
                            minLength="4"
                            maxLength="255"
                            value={navigation.alterarEstado.estado}
                            onChange={evt => navigation.alterarEstado.alterarEstado(evt.target.value)}
                            disabled={enderecoDisabled}
                            onBlur={validarEstado}
                            required
                        />
                        {
                            !navigation.alterarEstado.statusEstado && msgEstado !== '' && <p className='text-danger avisos'>{msgEstado}</p>
                        }
                    </div>
                </div>

                <div class='row'>
                    <div class='col-6'>
                        <label>Tamanho da Camiseta *</label>
                        <div>
                            <input type="radio" name="jersey" onClick={() => selecionarJersey("P")} defaultChecked /> P
                            <input type="radio" name="jersey" onClick={() => selecionarJersey("M")} class='ml-3' /> M
                            <input type="radio" name="jersey" onClick={() => selecionarJersey("G")} class='ml-3' /> G
                        </div>

                    </div>
                    <div class='col-6'>
                        <label>Personalização da camiseta</label>
                        <Input
                            name="personalizacao"
                            value={navigation.alterarPersonalizacao.personalizacao}
                            onChange={evt => navigation.alterarPersonalizacao.alterarPersonalizacao(evt.target.value)}
                        />
                    </div>
                </div>

            </FormGroup>
            <p>* Campos Obrigatórios</p>
            {msgAvancar &&
                <p className='text-danger aviso'>Revisar os seus dados!</p>
            }
            <div>
                <button className="button" onClick={() => avancar()}>Próximo</button>
            </div>
        </div >


    )
}

export default Step1;
