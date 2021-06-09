import {useState, useContext } from 'react'
import { NavigationContext } from '../contexts/navigationContext'


export const useValidarCPF = (event) => {
  const [msg, setMsg] = useState('')
  const navigation = useContext(NavigationContext) 

  const validarCPF = event => {
    let val = event.target.value.replace(/\D/g, '')
    if (!val) {
      setMsg('Campo obrigatório')
      navigation.alterarCpf.alterarStatusCpf(false)
    }
    else if (val.length < 11) {
      setMsg('Formato inválido')
      navigation.alterarCpf.alterarStatusCpf(false)
    }
    else if (!testarCPF(val)) {
      setMsg('CPF incorreto')
      navigation.alterarCpf.alterarStatusCpf(false)
    }
    else if (val.toString().includes('11111111111')) {
      setMsg('Formato inválido')
      navigation.alterarCpf.alterarStatusCpf(false)
    }
    else if (val.toString().includes('22222222222')) {
      setMsg('Formato inválido')
      navigation.alterarCpf.alterarStatusCpf(false)
    }
    else if (val.toString().includes('33333333333')) {
      setMsg('Formato inválido')
      navigation.alterarCpf.alterarStatusCpf(false)
    }
    else if (val.toString().includes('44444444444')) {
      setMsg('Formato inválido')
      navigation.alterarCpf.alterarStatusCpf(false)
    }
    else if (val.toString().includes('55555555555')) {
      setMsg('Formato inválido')
      navigation.alterarCpf.alterarStatusCpf(false)
    }
    else if (val.toString().includes('66666666666')) {
      setMsg('Formato inválido')
      navigation.alterarCpf.alterarStatusCpf(false)
    }
    else if (val.toString().includes('77777777777')) {
      setMsg('Formato inválido')
      navigation.alterarCpf.alterarStatusCpf(false)
    }
    else if (val.toString().includes('88888888888')) {
      setMsg('Formato inválido')
      navigation.alterarCpf.alterarStatusCpf(false)
    }
    else if (val.toString().includes('99999999999')) {
      setMsg('Formato inválido')
      navigation.alterarCpf.alterarStatusCpf(false)
    }
    else if (navigation.alterarListaCpf.listaCpf.indexOf(event.target.value.toString()) > -1) {
      setMsg('Este CPF já está cadastrado')
      navigation.alterarCpf.alterarStatusCpf(false)
    }
    else {
      navigation.alterarCpf.alterarStatusCpf(true)
      setMsg('')
    }
  }
  return [msg, validarCPF]
}

const testarCPF = (strCPF) => {
  var Soma;
  var Resto;
  Soma = 0;
  if (strCPF === "00000000000") return false;

  for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto === 10) || (Resto === 11)) Resto = 0;
  if (Resto !== parseInt(strCPF.substring(9, 10))) return false;

  Soma = 0;
  for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto === 10) || (Resto === 11)) Resto = 0;
  if (Resto !== parseInt(strCPF.substring(10, 11))) return false;
  return true;
}