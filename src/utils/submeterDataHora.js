import { useContext, useState } from 'react'
import firebase from '../firebase'

export const useSubmeterDataHora = () => {
    const [status, setStatus] = useState('')
    const submeterDataHora = form => {
        console.log("ENTROUUUUUUU")
        console.log(form)
        firebase.database().ref('lightningCup/acessosCadastro/').push(form, err => {
            if (err) {
                setStatus('ERROR')
            } else {
                setStatus('SUCCESS')
            }
        })

    }
    return [submeterDataHora]
}