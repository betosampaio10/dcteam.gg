import {useState, useContext } from 'react'
import { NavigationContext } from '../contexts/navigationContext'

export const useValidarNomeResponsavel = (event) => {
  const navigation = useContext(NavigationContext)
  const [msg, setMsg] = useState('')
  const validarNomeResponsavel = event => {
    let val = event.target.value;
    if (!val) {
      setMsg('Campo obrigatório')
      navigation.alterarNomeResponsavel.alterarStatusNomeResponsavel(false)
    }
    else if (val.length < 4) {
      setMsg('Campo deve conter mais do que 4 caracteres')
      navigation.alterarNomeResponsavel.alterarStatusNomeResponsavel(false)
    }
    else {
      setMsg('')
      navigation.alterarNomeResponsavel.alterarStatusNomeResponsavel(true)
    }
  }
    return [msg, validarNomeResponsavel]
}