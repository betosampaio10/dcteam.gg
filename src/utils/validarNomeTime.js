import {useState, useContext } from 'react'
import { NavigationContext } from '../contexts/navigationContext'

export const useValidarNomeTime = (event) => {
  const navigation = useContext(NavigationContext)
  const [msg, setMsg] = useState('')
  const validarNomeTime = event => {
    let val = event.target.value;
    if (!val) {
      setMsg('Campo obrigatório')
      navigation.alterarNomeTime.alterarStatusNomeTime(false)
    }
    else if (val.length < 4) {
      setMsg('Campo deve conter mais do que 4 caracteres')
      navigation.alterarNomeTime.alterarStatusNomeTime(false)
    }
    else {
      setMsg('')
      navigation.alterarNomeTime.alterarStatusNomeTime(true)
    }
  }
    return [msg, validarNomeTime]
}