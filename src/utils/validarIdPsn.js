import {useState, useContext } from 'react'
import { NavigationContext } from '../contexts/navigationContext'

export const useValidarIdPsn = (event) => {
  const navigation = useContext(NavigationContext)
  const [msg, setMsg] = useState('')
  const validarIdPsn = event => {
    let val = event.target.value;
    if (!val) {
      setMsg('Campo obrigatório')
      navigation.alterarIdPsn.alterarStatusIdPsn(false)
    }
    else if (val.length < 4) {
      setMsg('Campo deve conter mais do que 4 caracteres')
      navigation.alterarIdPsn.alterarStatusIdPsn(false)
    }
    else if (navigation.alterarListaIdPsn.listaIdPsn.indexOf(val.toString()) > -1) {
      setMsg('Este Id Psn já está cadastrado')
      navigation.alterarIdPsn.alterarStatusIdPsn(false)
    }
    else {
      setMsg('')
      navigation.alterarIdPsn.alterarStatusIdPsn(true)
    }
  }
    return [msg, validarIdPsn]
}