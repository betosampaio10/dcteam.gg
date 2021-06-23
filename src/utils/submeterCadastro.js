import { useContext, useState } from 'react'
import firebase from '../firebase'
import { NavigationContext } from '../contexts/navigationContext'
import { useListarUsuarios } from './listarUsuarios'
import { keys } from '@material-ui/core/styles/createBreakpoints'

export const useSubmeterCadastro = () => {
    const [status, setStatus] = useState('')
    const navigation = useContext(NavigationContext)
    const createUsuario = form => {
        firebase.database().ref('lightningCup/finalizados/').push(form, err => {
            if (err) {
                setStatus('ERROR')
            } else {
                firebase.database().ref('lightningCup/incompletos/').on('value', snapshot => {
                    if (snapshot.val()) {
                        let keys = Object.keys(snapshot.val())
                        keys.map(key => {
                            if(snapshot.val()[key]){
                                if (snapshot.val()[key].cpf == form.cpf) {
                                    firebase.database().ref(`lightningCup/incompletos/${key}`).remove()
                                }
                            }                            
                        })
                    }
                })
            }
        })

    }
    return [createUsuario]
}