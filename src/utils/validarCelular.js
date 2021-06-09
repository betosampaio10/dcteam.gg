import {useState, useContext } from 'react'
import { NavigationContext } from '../contexts/navigationContext'

export const useValidarCelular = (event) => {
  const navigation = useContext(NavigationContext)
  const [msg, setMsg] = useState('')
  const validarCel = event => {
    let val = event.target.value.replace(/\D/g, '');
    if (!val) {
     setMsg('Campo obrigatório')
     navigation.alterarCelular.alterarStatusCelular(false)
    }
    else if (val.length < 11) {
     setMsg('Formato inválido')
     navigation.alterarCelular.alterarStatusCelular(false)
    }
    else if (val.toString().includes('11111111111')) {
     setMsg('Formato inválido')
     navigation.alterarCelular.alterarStatusCelular(false)
    }
    else if (val.toString().includes('22222222222')) {
     setMsg('Formato inválido')
     navigation.alterarCelular.alterarStatusCelular(false)
    }
    else if (val.toString().includes('33333333333')) {
     setMsg('Formato inválido')
     navigation.alterarCelular.alterarStatusCelular(false)
    }
    else if (val.toString().includes('44444444444')) {
     setMsg('Formato inválido')
     navigation.alterarCelular.alterarStatusCelular(false)
    }
    else if (val.toString().includes('55555555555')) {
     setMsg('Formato inválido')
     navigation.alterarCelular.alterarStatusCelular(false)
    }
    else if (val.toString().includes('66666666666')) {
     setMsg('Formato inválido')
     navigation.alterarCelular.alterarStatusCelular(false)
    }
    else if (val.toString().includes('77777777777')) {
     setMsg('Formato inválido')
     navigation.alterarCelular.alterarStatusCelular(false)
    }
    else if (val.toString().includes('88888888888')) {
     setMsg('Formato inválido')
     navigation.alterarCelular.alterarStatusCelular(false)
    }
    else if (val.toString().includes('99999999999')) {
     setMsg('Formato inválido')
     navigation.alterarCelular.alterarStatusCelular(false)
    }
    else {
      setMsg('')
     navigation.alterarCelular.alterarStatusCelular(true)
    }
  }
    return [msg, validarCel]
  }