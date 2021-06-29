import React, { useContext } from "react";
import { FormGroup } from 'reactstrap';
import { NavigationContext } from '../../contexts/navigationContext'

import './Inscrever.css';


const Step3 = () => {
    const navigation = useContext(NavigationContext)
    const finalizar = () => {
        navigation.alterarModalInscrever.alterarModalInscrever(false)
        navigation.alterarStep.alterarStep(1)
        navigation.alterarCpf.alterarCpf('')
        navigation.alterarNome.alterarNome('')
        navigation.alterarEmail.alterarEmail('')
        navigation.alterarCelular.alterarCelular('')
        window.location.href = "http://www.arena17.com/campeonato/637414";
    }

    return (
        <div>
            <FormGroup>
                <h3 className='modalText'>Inscrição realizada com sucesso!</h3>
            </FormGroup>
            <div>
                <button className="button check" onClick={() => finalizar()}>Finalizar Inscrição</button>
            </div>
        </div>
    )
}

export default Step3;