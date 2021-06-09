import {useState, useContext } from 'react'
import { NavigationContext } from '../contexts/navigationContext'

export const useValidarNome = (event) => {
  const navigation = useContext(NavigationContext)
  const [msg, setMsg] = useState('')
  const validarNome = event => {
    let val = event.target.value;
    if (!val) {
      setMsg('Campo obrigatório')
      navigation.alterarNome.alterarStatusNome(false)
    }
    else if (val.length < 4) {
      setMsg('Campo deve conter mais do que 4 caracteres')
      navigation.alterarNome.alterarStatusNome(false)
    }
    else {
      setMsg('')
      navigation.alterarNome.alterarStatusNome(true)
    }
  }
    return [msg, validarNome]
}