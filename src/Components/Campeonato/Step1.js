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
import { useValidarNomeResponsavel } from '../../utils/validarNomeResponsavel';
import { useValidarEmail } from '../../utils/validarEmail';
import { useValidarIdade } from '../../utils/validarIdade';
import { useValidarCelular } from '../../utils/validarCelular';
import { useValidarCPF } from '../../utils/validarCpf';
import { useValidarCPFResponsavel } from '../../utils/validarCpfResponsavel';
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
    const [msgNomeResponsavel, validarNomeResponsavel] = useValidarNomeResponsavel()
    const [msgNome, validarNome] = useValidarNome()
    const [msgCelular, validarCelular] = useValidarCelular()
    const [msgEmail, validarEmail] = useValidarEmail()
    const [msgIdade, validarIdade] = useValidarIdade()
    const [msgCpf, validarCPF] = useValidarCPF()
    const [msgCpfResponsavel, validarCPFResponsavel] = useValidarCPFResponsavel()
    const [msgAvancar, setMsgAvancar] = useState(false)    
    const [cadastrarUsuario] = useSubmeterCadastroIncompleto()

    const selecionarJersey = tam => {
        navigation.alterarTamanhoJersey.alterarTamanhoJersey(tam)
    }

    const submeter = () => {
        cadastrarUsuario(form)
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
        personalizacaoNumero: navigation.alterarPersonalizacaoNumero.personalizacaoNumero
    }

    const avancar = () => {
        if (
            navigation.alterarIdPsn.statusIdPsn &&
            navigation.alterarNomeTime.statusNomeTime &&
            navigation.alterarIdade.statusIdade &&
            navigation.alterarCpf.statusCpf &&
            navigation.alterarCpfResponsavel.statusCpfResponsavel &&
            navigation.alterarNome.statusNome &&
            navigation.alterarNomeResponsavel.statusNomeResponsavel &&
            navigation.alterarEmail.statusEmail &&
            navigation.alterarCelular.statusCelular &&
            navigation.alterarCep.statusCep &&
            navigation.alterarEndereco.statusEndereco &&
            navigation.alterarNumero.statusNumero &&
            navigation.alterarBairro.statusBairro &&
            navigation.alterarCidade.statusCidade &&
            navigation.alterarEstado.statusEstado           
        ) {
            submeter()
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
                    <p>Taxa de inscrição R$140,00.</p>
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
                        <label>Nome da Equipe Ultimate Team *</label>
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
                {navigation.alterarToggleResponsavel.toggleResponsavel &&
                    <div class='row'>
                        <div class='col-6'>
                        <label>CPF do Responsável *</label>
                        <MaskedInput
                            name="cpfResponsavel"
                            value={navigation.alterarCpfResponsavel.cpfResponsavel}
                            onChange={evt => navigation.alterarCpfResponsavel.alterarCpfResponsavel(evt.target.value)}
                            onBlur={validarCPFResponsavel}
                            mascara="999.999.999-99"
                            required
                        />
                        {
                            !navigation.alterarCpfResponsavel.statusCpfResponsavel && msgCpfResponsavel !== '' && <p className='text-danger avisos'>{msgCpfResponsavel}</p>
                        }

                    </div>

                    <div class='col-6'>
                        <label>Nome Completo Responsável *</label>
                        <Input
                            name="nomeResponsavel"
                            value={navigation.alterarNomeResponsavel.nomeResponsavel}
                            onChange={evt => navigation.alterarNomeResponsavel.alterarNomeResponsavel(evt.target.value)}
                            onBlur={validarNomeResponsavel}
                            required
                        />
                        {
                            !navigation.alterarNomeResponsavel.statusNomeResponsavel && msgNomeResponsavel !== '' && <p className='text-danger avisos'>{msgNomeResponsavel}</p>
                        }
                    </div>
                    </div>
                }

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
                        <label>Nome Completo *</label>
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
                            onBlur={validarCep}
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
                            <input type="radio" name="jersey" onClick={() => selecionarJersey("PP")}  /> PP
                            <input type="radio" name="jersey" onClick={() => selecionarJersey("P")} class='ml-2' /> P
                            <input type="radio" name="jersey" onClick={() => selecionarJersey("M")} class='ml-2' /> M
                            <input type="radio" name="jersey" onClick={() => selecionarJersey("G")} class='ml-2' /> G
                            <input type="radio" name="jersey" onClick={() => selecionarJersey("GG")} class='ml-2' /> GG
                            <input type="radio" name="jersey" onClick={() => selecionarJersey("EXG")} class='ml-2' /> EXG
                            <input type="radio" name="jersey" onClick={() => selecionarJersey("XGG")} class='ml-2' /> XGG
                            <input type="radio" name="jersey" onClick={() => selecionarJersey("XXGG")} class='ml-2' /> XXGG
                        </div>
                        {
                            navigation.alterarTamanhoJersey.tamanhoJersey == '' && <p className='text-danger avisos'>Selecionar tamanho da camiseta!</p>
                        }

                    </div>
                    <div class='col-3'>
                        <label>Nick Camiseta</label>
                        <Input
                            name="personalizacaoNome"
                            value={navigation.alterarPersonalizacaoNome.personalizacaoNome}
                            onChange={evt => navigation.alterarPersonalizacaoNome.alterarPersonalizacaoNome(evt.target.value)}
                        />
                    </div>
                    <div class='col-3'>
                        <label>Numero Camiseta</label>
                        <Input
                            name="personalizacao"
                            type='number'
                            value={navigation.alterarPersonalizacaoNumero.personalizacaoNumero}
                            onChange={evt => navigation.alterarPersonalizacaoNumero.alterarPersonalizacaoNumero(evt.target.value)}
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
