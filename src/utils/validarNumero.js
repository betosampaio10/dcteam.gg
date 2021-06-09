import {useState, useContext } from 'react'
import { NavigationContext } from '../contexts/navigationContext'

export const useValidarNumero = (event) => {
    const navigation = useContext(NavigationContext)
    const [msg, setMsg] = useState('')
    const validarNumero = event => {
        let val = event.target.value;
        if (!val) {
            setMsg('Campo obrigatório')
            navigation.alterarNumero.alterarStatusNumero(false)
        }
        else if (val.length < 1) {
            setMsg('Este campo deve conter 1 caracter ou mais.')
            navigation.alterarNumero.alterarStatusNumero(false)
        }
        else if (val <= 0) {
            setMsg('O número deve ser maior que zero.')
            navigation.alterarNumero.alterarStatusNumero(false)
        }
        else {
            navigation.alterarNumero.alterarStatusNumero(true)
            setMsg('')
        }
    }
    return [msg, validarNumero]
}