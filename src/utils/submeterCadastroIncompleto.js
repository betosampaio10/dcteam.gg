import { useContext, useState } from 'react'
import firebase from '../firebase'
import { NavigationContext } from '../contexts/navigationContext'

export const useSubmeterCadastroIncompleto = () => {
    const [status, setStatus] = useState('')
    const navigation = useContext(NavigationContext)
    const createUsuario = form => {
        firebase.database().ref('lightningCup/incompletos/').push(form, err => {
            if (err) {
                setStatus('ERROR')
            } else {
                setStatus('SUCCESS')
            }
        })
    }
    return [createUsuario]
}