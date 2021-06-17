import React, { useContext } from "react";
import { FormGroup } from 'reactstrap';
import { NavigationContext } from '../../contexts/navigationContext'

import './Inscrever.css';


const Step3 = () => {
    const navigation = useContext(NavigationContext)
    const finalizar = () => {
        navigation.alterarModalInscrever.alterarModalInscrever(false)
        navigation.alterarStep.alterarStep(1)
        navigation.alterarIdPsn.alterarIdPsn('')
        navigation.alterarNomeTime.alterarNomeTime('')
        navigation.alterarIdade.alterarIdade('')
        navigation.alterarCpf.alterarCpf('')
        navigation.alterarNome.alterarNome('')
        navigation.alterarEmail.alterarEmail('')
        navigation.alterarCelular.alterarCelular('')
        navigation.alterarCep.alterarCep('')
        navigation.alterarEndereco.alterarEndereco('')
        navigation.alterarNumero.alterarNumero('')
        navigation.alterarComplemento.alterarComplemento('')
        navigation.alterarBairro.alterarBairro('')
        navigation.alterarCidade.alterarCidade('')
        navigation.alterarEstado.alterarEstado('')
        navigation.alterarTamanhoJersey.alterarTamanhoJersey('')
        navigation.alterarPersonalizacaoNome.alterarPersonalizacaoNome('')
        navigation.alterarPersonalizacaoNumero.alterarPersonalizacaoNumero('')
        window.location.href = "http://www.arena17.com/campeonato/637414";
    }

    return (
        <div>
            <FormGroup>
                <p>Inscrição realizada com sucesso!</p>
            </FormGroup>
            <div>
                <button className="button check" onClick={() => finalizar()}>Finalizar Inscrição</button>
            </div>
        </div>
    )
}

export default Step3;