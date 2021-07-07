import { useContext, useState } from 'react'
import firebase from '../firebase'
import { NavigationContext } from '../contexts/navigationContext'

export const useListarAcessosCadastro = () => {
    const [status, setStatus] = useState('')
    const navigation = useContext(NavigationContext)
    const buscarAcessosCadastro = async () => {
        await firebase.database().ref('lightningCup/acessosCadastro/').on('value', snapshot => {
            navigation.alterarListaAcessosCadastro.alterarListaAcessosCadastro(snapshot.val())
        })
    }
    return [buscarAcessosCadastro]
}