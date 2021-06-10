import { useState, useContext } from 'react'
import axios from 'axios'
import { NavigationContext } from '../contexts/navigationContext'

export const useValidarCep = event => {
    const navigation = useContext(NavigationContext)
    const [msg, setMsg] = useState('')
    const [endereco, setEndereco] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [preenchido, setPreenchido] = useState(false)
    const [enderecoDisabled, setEnderecoDisabled] = useState(false)
    const buscarCep = async (event) => {
        let val = event.target.value.replace(/\D/g, '')
        if (val.length < 8) {
            setMsg('Formato inválido')
            navigation.alterarCep.alterarStatusCep(false)
            setEndereco('')
            setBairro('')
            setCidade('')
            setEstado('')
            navigation.alterarEndereco.alterarEndereco('')
            navigation.alterarBairro.alterarBairro('')
            navigation.alterarCidade.alterarCidade('')
            navigation.alterarEstado.alterarEstado('')
            navigation.alterarEndereco.alterarStatusEndereco(false)
            navigation.alterarBairro.alterarStatusBairro(false)
            navigation.alterarCidade.alterarStatusCidade(false)
            navigation.alterarEstado.alterarStatusEstado(false)
            setEnderecoDisabled(false)
            setPreenchido(false)
        } else {
            if (val.length === 8) {
                setPreenchido(true)
                const result = await axios(
                    `http://viacep.com.br/ws/${val}/json/`
                )
                if (result.data.erro === true) {
                    setMsg("Cep não encontrado")
                    navigation.alterarCep.alterarStatusCep(false)
                    setEndereco('')
                    setBairro('')
                    setCidade('')
                    setEstado('')
                    navigation.alterarEndereco.alterarEndereco('')
                    navigation.alterarBairro.alterarBairro('')
                    navigation.alterarCidade.alterarCidade('')
                    navigation.alterarEstado.alterarEstado('')
                    navigation.alterarEndereco.alterarStatusEndereco(false)
                    navigation.alterarBairro.alterarStatusBairro(false)
                    navigation.alterarCidade.alterarStatusCidade(false)
                    navigation.alterarEstado.alterarStatusEstado(false)
                    setEnderecoDisabled(false)
                } else {
                    setEndereco(result.data.logradouro)
                    setBairro(result.data.bairro)
                    setCidade(result.data.localidade)
                    setEstado(result.data.uf)
                    navigation.alterarCep.alterarStatusCep(true)
                    setMsg('Cep Ok')
                    navigation.alterarEndereco.alterarEndereco(result.data.logradouro)
                    navigation.alterarBairro.alterarBairro(result.data.bairro)
                    navigation.alterarCidade.alterarCidade(result.data.localidade)
                    navigation.alterarEstado.alterarEstado(result.data.uf)
                    navigation.alterarEndereco.alterarStatusEndereco(true)
                    navigation.alterarBairro.alterarStatusBairro(true)
                    navigation.alterarCidade.alterarStatusCidade(true)
                    navigation.alterarEstado.alterarStatusEstado(true)
                    setEnderecoDisabled(true)
                }
            }
        }
    }
    return [msg, enderecoDisabled, endereco, bairro, cidade, estado, preenchido, buscarCep]
}