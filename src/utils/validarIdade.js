import {useState, useContext } from 'react'
import { NavigationContext } from '../contexts/navigationContext'

export const useValidarIdade = (event) => {
    const navigation = useContext(NavigationContext)
    const [msg, setMsg] = useState('')
    const validarIdade = event => {
        let val = event.target.value;
        if (!val) {
            setMsg('Campo obrigatório')
            navigation.alterarIdade.alterarStatusIdade(false)
        }
        else if (val.length < 1) {
            setMsg('Este campo deve conter 1 caracter ou mais.')
            navigation.alterarIdade.alterarStatusIdade(false)
        }
        else if (val <= 0) {
            setMsg('O número deve ser maior que zero.')
            navigation.alterarIdade.alterarStatusIdade(false)
        }
        else if (val < 18) {
            navigation.alterarToggleResponsavel.alterarToggleResponsavel(true)
            navigation.alterarIdade.alterarStatusIdade(true)
            navigation.alterarCpfResponsavel.alterarStatusCpfResponsavel(false)
            navigation.alterarNomeResponsavel.alterarStatusNomeResponsavel(false)
        }
        else {
            navigation.alterarIdade.alterarStatusIdade(true)
            navigation.alterarToggleResponsavel.alterarToggleResponsavel(false)
            navigation.alterarCpfResponsavel.alterarStatusCpfResponsavel(true)
            navigation.alterarNomeResponsavel.alterarStatusNomeResponsavel(true)
            setMsg('')
        }
    }
    return [msg, validarIdade]
}