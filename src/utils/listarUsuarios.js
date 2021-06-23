import { useContext, useState } from 'react'
import firebase from '../firebase'
import { NavigationContext } from '../contexts/navigationContext'

export const useListarUsuarios = () => {
    const [status, setStatus] = useState('')
    const navigation = useContext(NavigationContext)
    const buscarUsuario = async () => {
        await firebase.database().ref('lightningCup/finalizados/').on('value', snapshot => {
            navigation.alterarListaUsuarios.alterarListaUsuarios(snapshot.val())
        })
    }
    return [buscarUsuario]
}