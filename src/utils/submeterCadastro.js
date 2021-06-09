import { useContext, useState } from 'react'
import firebase from '../firebase'
import { NavigationContext } from '../contexts/navigationContext'

export const useSubmeterCadastro = () => {
    const [status, setStatus] = useState('')
    const navigation = useContext(NavigationContext)
    const createUsuario = form => {
        firebase.database().ref('usuarios/').push(form, err => {
            if (err) {
                setStatus('ERROR')
            } else {
                setStatus('SUCCESS')
            }
        })
    }
    return [createUsuario]
}