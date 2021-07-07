import React, { useContext } from "react";
import { FormGroup } from 'reactstrap';
import { NavigationContext } from '../../contexts/navigationContext'

import './Inscrever.css';


const Step3 = () => {
    const navigation = useContext(NavigationContext)
    const finalizar = () => {
        window.location.href = `https://api.whatsapp.com/send?phone=551193758-2250&text=Oi%20meu%20nome%20é%20${navigation.alterarNome.nome}%20e%20meu%20CPF%20é%20${navigation.alterarCpf.cpf}.%20Gostaria%20de%20confirmar%20minha%20inscrição%20para%20o%20campeonato%20de%20fifa!`;       
        
    }

    return (
        <div>
            <FormGroup>
                <h3 className='modalText'>Inscrição realizada com sucesso!</h3>
            </FormGroup>
            <div>
                <button className="button check" onClick={() => finalizar()}>Finalizar Via Whatsapp</button>
            </div>
        </div>
    )
}

export default Step3;