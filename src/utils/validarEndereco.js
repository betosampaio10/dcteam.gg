import {useState, useContext } from 'react'
import { NavigationContext } from '../contexts/navigationContext'

export const useValidarEndereco = (event) => {
  const navigation = useContext(NavigationContext)
  const [msg, setMsg] = useState('')
  const validarEndereco = event => {
    let val = event.target.value;
    if (!val) {
      setMsg('Campo obrigatório')
      navigation.alterarEndereco.alterarStatusEndereco(false)
    }
    else if (val.length < 4) {
      setMsg('Campo deve conter mais do que 4 caracteres')
      navigation.alterarEndereco.alterarStatusEndereco(false)
    }
    else {
      setMsg('')
      navigation.alterarEndereco.alterarStatusEndereco(true)
    }
  }
    return [msg, validarEndereco]
}