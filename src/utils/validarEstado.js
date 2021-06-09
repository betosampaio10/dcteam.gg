import {useState, useContext } from 'react'
import { NavigationContext } from '../contexts/navigationContext'

export const useValidarEstado = (event) => {
  const navigation = useContext(NavigationContext)
  const [msg, setMsg] = useState('')
  const validarEstado = event => {
    let val = event.target.value;
    if (!val) {
      setMsg('Campo obrigatório')
      navigation.alterarEstado.alterarStatusEstado(false)
    }
    else if (val.length < 4) {
      setMsg('Campo deve conter mais do que 4 caracteres')
      navigation.alterarEstado.alterarStatusEstado(false)
    }
    else {
      setMsg('')
      navigation.alterarEstado.alterarStatusEstado(true)
    }
  }
    return [msg, validarEstado]
}