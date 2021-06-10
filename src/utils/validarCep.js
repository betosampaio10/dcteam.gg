import {useState, useContext } from 'react'
import { NavigationContext } from '../contexts/navigationContext'

export const useValidarCep = (event) => {
  const navigation = useContext(NavigationContext)
  const [msg, setMsg] = useState('')
  const validarCep = event => {
    let val = event.target.value.replace(/\D/g, '');
    if (!val) {
     setMsg('Campo obrigatório')
     navigation.alterarCep.alterarStatusCep(false)
    }
    else if (val.length < 8) {
     setMsg('Formato inválido')
     navigation.alterarCep.alterarStatusCep(false)
    }
    else if (val.toString().includes('11111111')) {
     setMsg('Formato inválido')
     navigation.alterarCep.alterarStatusCep(false)
    }
    else if (val.toString().includes('22222222')) {
     setMsg('Formato inválido')
     navigation.alterarCep.alterarStatusCep(false)
    }
    else if (val.toString().includes('33333333')) {
     setMsg('Formato inválido')
     navigation.alterarCep.alterarStatusCep(false)
    }
    else if (val.toString().includes('44444444')) {
     setMsg('Formato inválido')
     navigation.alterarCep.alterarStatusCep(false)
    }
    else if (val.toString().includes('55555555')) {
     setMsg('Formato inválido')
     navigation.alterarCep.alterarStatusCep(false)
    }
    else if (val.toString().includes('66666666')) {
     setMsg('Formato inválido')
     navigation.alterarCep.alterarStatusCep(false)
    }
    else if (val.toString().includes('77777777')) {
     setMsg('Formato inválido')
     navigation.alterarCep.alterarStatusCep(false)
    }
    else if (val.toString().includes('88888888')) {
     setMsg('Formato inválido')
     navigation.alterarCep.alterarStatusCep(false)
    }
    else if (val.toString().includes('99999999')) {
     setMsg('Formato inválido')
     navigation.alterarCep.alterarStatusCep(false)
    }
    else {
      setMsg('')
     navigation.alterarCep.alterarStatusCep(true)
    }
  }
    return [msg, validarCep]
  }