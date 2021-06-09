import {useState, useContext } from 'react'
import { NavigationContext } from '../contexts/navigationContext'

export const useValidarBairro = (event) => {
  const navigation = useContext(NavigationContext)
  const [msg, setMsg] = useState('')
  const validarBairro = event => {
    let val = event.target.value;
    if (!val) {
      setMsg('Campo obrigatório')
      navigation.alterarBairro.alterarStatusBairro(false)
    }
    else if (val.length < 4) {
      setMsg('Campo deve conter mais do que 4 caracteres')
      navigation.alterarBairro.alterarStatusBairro(false)
    }
    else {
      setMsg('')
      navigation.alterarBairro.alterarStatusBairro(true)
    }
  }
    return [msg, validarBairro]
}