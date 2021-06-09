import {useState, useContext } from 'react'
import { NavigationContext } from '../contexts/navigationContext'

export const useValidarEmail = (event) => {
  const navigation = useContext(NavigationContext) 
  const [msg, setMsg] = useState('')
  const validarEmail = event => {
    let val = event.target.value
    if (!val) {
      setMsg('Campo obrigatório')
      navigation.alterarEmail.alterarStatusEmail(false)
    }
    else if (!/.+@.+\..+/.test(val)) {
      setMsg('Formato inválido')
      navigation.alterarEmail.alterarStatusEmail(false)
    }
    else if (navigation.alterarListaEmail.listaEmail.indexOf(val.toString()) > -1) {
      setMsg('Este Email já está cadastrado')
      navigation.alterarEmail.alterarStatusEmail(false)
    }
    else {
      navigation.alterarEmail.alterarStatusEmail(true)
    }
  }
  return [msg, validarEmail]
}