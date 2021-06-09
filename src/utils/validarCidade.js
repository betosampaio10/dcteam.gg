import {useState, useContext } from 'react'
import { NavigationContext } from '../contexts/navigationContext'

export const useValidarCidade = (event) => {
  const navigation = useContext(NavigationContext)
  const [msg, setMsg] = useState('')
  const validarCidade = event => {
    let val = event.target.value;
    if (!val) {
      setMsg('Campo obrigatório')
      navigation.alterarCidade.alterarStatusCidade(false)
    }
    else if (val.length < 4) {
      setMsg('Campo deve conter mais do que 4 caracteres')
      navigation.alterarCidade.alterarStatusCidade(false)
    }
    else {
      setMsg('')
      navigation.alterarCidade.alterarStatusCidade(true)
    }
  }
    return [msg, validarCidade]
}