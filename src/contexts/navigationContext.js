import React, { useState } from 'react'

export const NavigationContext = React.createContext()

const useConsumeModalInscrever = () => {
    const [modalInscrever, setModalInscrever] = useState(false)
    const alterarModalInscrever = modalInscrever => {
        setModalInscrever(modalInscrever)
    }
    return [modalInscrever, alterarModalInscrever]
}

const useConsumeModalLightning = () => {
    const [modalLightning, setModalLightning] = useState(false)
    const alterarModalLightning = modalLightning => {
        setModalLightning(modalLightning)
    }
    return [modalLightning, alterarModalLightning]
}

const useConsumeModalInscricao = () => {
    const [modalInscricao, setModalInscricao] = useState(false)
    const alterarModalInscricao = modalInscricao => {
        setModalInscricao(modalInscricao)
    }
    return [modalInscricao, alterarModalInscricao]
}

const useConsumeModalConfirmacao = () => {
    const [modalConfirmacao, setModalConfirmacao] = useState(false)
    const alterarModalConfirmacao = modalConfirmacao => {
        setModalConfirmacao(modalConfirmacao)
    }
    return [modalConfirmacao, alterarModalConfirmacao]
}

const useConsumeModalRegulamento = () => {
    const [modalRegulamento, setModalRegulamento] = useState(false)
    const alterarModalRegulamento = modalRegulamento => {
        setModalRegulamento(modalRegulamento)
    }
    return [modalRegulamento, alterarModalRegulamento]
}

const useConsumeModalPremiacao = () => {
    const [modalPremiacao, setModalPremiacao] = useState(false)
    const alterarModalPremiacao = modalPremiacao => {
        setModalPremiacao(modalPremiacao)
    }
    return [modalPremiacao, alterarModalPremiacao]
}

const useConsumeModalEmBreve = () => {
    const [modalEmBreve, setModalEmBreve] = useState(false)
    const alterarModalEmBreve = modalEmBreve => {
        setModalEmBreve(modalEmBreve)
    }
    return [modalEmBreve, alterarModalEmBreve]
}

const useConsumeAlterarStep = () => {
    const [step, setStep] = useState(1)
    const alterarStep = step => {
        setStep(step)
    }
    return [step, alterarStep]
}

const useConsumeIdPsn = () => {
    const [idPsn, setIdPsn] = useState('')
    const [statusIdPsn, setStatusIdPsn] = useState(false)
    const alterarIdPsn = idPsn => {
        setIdPsn(idPsn)
    }
    const alterarStatusIdPsn = statusIdPsn => {
        setStatusIdPsn(statusIdPsn)
    }
    return [idPsn, alterarIdPsn, statusIdPsn, alterarStatusIdPsn]
}

const useConsumeNomeTime = () => {
    const [nomeTime, setNomeTime] = useState('')
    const [statusNomeTime, setStatusNomeTime] = useState(false)
    const alterarNomeTime = nomeTime => {
        setNomeTime(nomeTime)
    }
    const alterarStatusNomeTime = statusNomeTime => {
        setStatusNomeTime(statusNomeTime)
    }
    return [nomeTime, alterarNomeTime, statusNomeTime, alterarStatusNomeTime]
}

const useConsumeIdade = () => {
    const [idade, setIdade] = useState('')
    const [statusIdade, setStatusIdade] = useState(false)
    const alterarIdade = idade => {
        setIdade(idade)
    }
    const alterarStatusIdade = statusIdade => {
        setStatusIdade(statusIdade)
    }
    return [idade, alterarIdade, statusIdade, alterarStatusIdade]
}

const useConsumeCpf = () => {
    const [cpf, setCpf] = useState('')
    const [statusCpf, setStatusCpf] = useState(false)
    const alterarCpf = cpf => {
        setCpf(cpf)
    }
    const alterarStatusCpf = statusCpf => {
        setStatusCpf(statusCpf)
    }
    return [cpf, alterarCpf, statusCpf, alterarStatusCpf]
}

const useConsumeCpfResponsavel = () => {
    const [cpfResponsavel, setCpfResponsavel] = useState('')
    const [statusCpfResponsavel, setStatusCpfResponsavel] = useState(true)
    const alterarCpfResponsavel = cpfResponsavel => {
        setCpfResponsavel(cpfResponsavel)
    }
    const alterarStatusCpfResponsavel = statusCpfResponsavel => {
        setStatusCpfResponsavel(statusCpfResponsavel)
    }
    return [cpfResponsavel, alterarCpfResponsavel, statusCpfResponsavel, alterarStatusCpfResponsavel]
}

const useConsumeNome = () => {
    const [nome, setNome] = useState('')
    const [statusNome, setStatusNome] = useState(false)
    const alterarNome = nome => {
        setNome(nome)
    }
    const alterarStatusNome = statusNome => {
        setStatusNome(statusNome)
    }
    return [nome, alterarNome, statusNome, alterarStatusNome]
}

const useConsumeNomeResponsavel = () => {
    const [nomeResponsavel, setNomeResponsavel] = useState('')
    const [statusNomeResponsavel, setStatusNomeResponsavel] = useState(true)
    const alterarNomeResponsavel = nomeResponsavel => {
        setNomeResponsavel(nomeResponsavel)
    }
    const alterarStatusNomeResponsavel = statusNomeResponsavel => {
        setStatusNomeResponsavel(statusNomeResponsavel)
    }
    return [nomeResponsavel, alterarNomeResponsavel, statusNomeResponsavel, alterarStatusNomeResponsavel]
}

const useConsumeEmail = () => {
    const [email, setEmail] = useState('')
    const [statusEmail, setStatusEmail] = useState(false)
    const alterarEmail = email => {
        setEmail(email)
    }
    const alterarStatusEmail = statusEmail => {
        setStatusEmail(statusEmail)
    }
    return [email, alterarEmail, statusEmail, alterarStatusEmail]
}

const useConsumeCelular = () => {
    const [celular, setCelular] = useState('')
    const [statusCelular, setStatusCelular] = useState(false)
    const alterarCelular = celular => {
        setCelular(celular)
    }
    const alterarStatusCelular = statusCelular => {
        setStatusCelular(statusCelular)
    }
    return [celular, alterarCelular, statusCelular, alterarStatusCelular]
}

const useConsumeCep = () => {
    const [cep, setCep] = useState('')
    const [statusCep, setStatusCep] = useState(false)
    const alterarCep = cep => {
        setCep(cep)
    }
    const alterarStatusCep = statusCep => {
        setStatusCep(statusCep)
    }
    return [cep, alterarCep, statusCep, alterarStatusCep]
}

const useConsumeEstado = () => {
    const [estado, setEstado] = useState('')
    const [statusEstado, setStatusEstado] = useState(false)
    const alterarEstado = estado => {
        setEstado(estado)
    }
    const alterarStatusEstado = statusEstado => {
        setStatusEstado(statusEstado)
    }
    return [estado, alterarEstado, statusEstado, alterarStatusEstado]
}

const useConsumeEndereco = () => {
    const [endereco, setEndereco] = useState('')
    const [statusEndereco, setStatusEndereco] = useState(false)
    const alterarEndereco = endereco => {
        setEndereco(endereco)
    }
    const alterarStatusEndereco = statusEndereco => {
        setStatusEndereco(statusEndereco)
    }
    return [endereco, alterarEndereco, statusEndereco, alterarStatusEndereco]
}

const useConsumeNumero = () => {
    const [numero, setNumero] = useState('')
    const [statusNumero, setStatusNumero] = useState(false)
    const alterarNumero = numero => {
        setNumero(numero)
    }
    const alterarStatusNumero = statusNumero => {
        setStatusNumero(statusNumero)
    }
    return [numero, alterarNumero, statusNumero, alterarStatusNumero]
}

const useConsumeComplemento = () => {
    const [complemento, setComplemento] = useState('')
    const alterarComplemento = complemento => {
        setComplemento(complemento)
    }
    return [complemento, alterarComplemento]
}

const useConsumeCidade = () => {
    const [cidade, setCidade] = useState('')
    const [statusCidade, setStatusCidade] = useState(false)
    const alterarCidade = cidade => {
        setCidade(cidade)
    }
    const alterarStatusCidade = statusCidade => {
        setStatusCidade(statusCidade)
    }
    return [cidade, alterarCidade, statusCidade, alterarStatusCidade]
}

const useConsumeBairro = () => {
    const [bairro, setBairro] = useState('')
    const [statusBairro, setStatusBairro] = useState(false)
    const alterarBairro = bairro => {
        setBairro(bairro)
    }
    const alterarStatusBairro = statusBairro => {
        setStatusBairro(statusBairro)
    }
    return [bairro, alterarBairro, statusBairro, alterarStatusBairro]
}

const useConsumePersonalizacaoNome = () => {
    const [personalizacaoNome, setPersonalizacaoNome] = useState('')
    const alterarPersonalizacaoNome = personalizacaoNome => {
        setPersonalizacaoNome(personalizacaoNome)
    }
    return [personalizacaoNome, alterarPersonalizacaoNome]
}

const useConsumePersonalizacaoNumero = () => {
    const [personalizacaoNumero, setPersonalizacaoNumero] = useState('')
    const alterarPersonalizacaoNumero = personalizacaoNumero => {
        setPersonalizacaoNumero(personalizacaoNumero)
    }
    return [personalizacaoNumero, alterarPersonalizacaoNumero]
}

const useConsumeTamanhoJersey = () => {
    const [tamanhoJersey, setTamanhoJersey] = useState('')
    const alterarTamanhoJersey = tamanhoJersey => {
        setTamanhoJersey(tamanhoJersey)
    }
    return [tamanhoJersey, alterarTamanhoJersey]
}

const useConsumeListaUsuarios = () => {
    const [listaUsuarios, setListaUsuarios] = useState({})
    const alterarListaUsuarios = listaUsuarios => {
        setListaUsuarios(listaUsuarios)
    }
    return [listaUsuarios, alterarListaUsuarios]
}

const useConsumeListaCpf = () => {
    const [listaCpf, setListaCpf] = useState({})
    const alterarListaCpf = listaCpf => {
        setListaCpf(listaCpf)
    }
    return [listaCpf, alterarListaCpf]
}

const useConsumeListaIdPsn = () => {
    const [listaIdPsn, setListaIdPsn] = useState({})
    const alterarListaIdPsn = listaIdPsn => {
        setListaIdPsn(listaIdPsn)
    }
    return [listaIdPsn, alterarListaIdPsn]
}

const useConsumeListaEmail = () => {
    const [listaEmail, setListaEmail] = useState({})
    const alterarListaEmail = listaEmail => {
        setListaEmail(listaEmail)
    }
    return [listaEmail, alterarListaEmail]
}

const useConsumeTotalInscritos = () => {
    const [totalInscritos, setTotalInscritos] = useState({})
    const alterarTotalInscritos = totalInscritos => {
        setTotalInscritos(totalInscritos)
    }
    return [totalInscritos, alterarTotalInscritos]
}

const useConsumeToggleResponsavel = () => {
    const [toggleResponsavel, setToggleResponsavel] = useState(false)
    const alterarToggleResponsavel = toggleResponsavel => {
        setToggleResponsavel(toggleResponsavel)
    }
    return [toggleResponsavel, alterarToggleResponsavel]
}

export const NavigationProvider = ({ children }) => {
    const [modalInscrever, alterarModalInscrever] = useConsumeModalInscrever()
    const [modalLightning, alterarModalLightning] = useConsumeModalLightning()
    const [modalInscricao, alterarModalInscricao] = useConsumeModalInscricao()
    const [modalRegulamento, alterarModalRegulamento] = useConsumeModalRegulamento()
    const [modalPremiacao, alterarModalPremiacao] = useConsumeModalPremiacao()
    const [modalEmBreve, alterarModalEmBreve] = useConsumeModalEmBreve()
    const [modalConfirmacao, alterarModalConfirmacao] = useConsumeModalConfirmacao()
    const [step, alterarStep] = useConsumeAlterarStep()
    const [idPsn, alterarIdPsn, statusIdPsn, alterarStatusIdPsn] = useConsumeIdPsn()
    const [nomeTime, alterarNomeTime, statusNomeTime, alterarStatusNomeTime] = useConsumeNomeTime()
    const [email, alterarEmail, statusEmail, alterarStatusEmail] = useConsumeEmail()
    const [celular, alterarCelular, statusCelular, alterarStatusCelular] = useConsumeCelular()
    const [idade, alterarIdade, statusIdade, alterarStatusIdade] = useConsumeIdade()
    const [cpf, alterarCpf, statusCpf, alterarStatusCpf] = useConsumeCpf()
    const [cpfResponsavel, alterarCpfResponsavel, statusCpfResponsavel, alterarStatusCpfResponsavel] = useConsumeCpfResponsavel()
    const [nome, alterarNome, statusNome, alterarStatusNome] = useConsumeNome()
    const [nomeResponsavel, alterarNomeResponsavel, statusNomeResponsavel, alterarStatusNomeResponsavel] = useConsumeNomeResponsavel()
    const [cep, alterarCep, statusCep, alterarStatusCep] = useConsumeCep()
    const [estado, alterarEstado, statusEstado, alterarStatusEstado] = useConsumeEstado()
    const [endereco, alterarEndereco, statusEndereco, alterarStatusEndereco] = useConsumeEndereco()
    const [numero, alterarNumero, statusNumero, alterarStatusNumero] = useConsumeNumero()
    const [complemento, alterarComplemento] = useConsumeComplemento()
    const [cidade, alterarCidade, statusCidade, alterarStatusCidade] = useConsumeCidade()
    const [bairro, alterarBairro, statusBairro, alterarStatusBairro] = useConsumeBairro()
    const [personalizacaoNome, alterarPersonalizacaoNome] = useConsumePersonalizacaoNome()
    const [personalizacaoNumero, alterarPersonalizacaoNumero] = useConsumePersonalizacaoNumero()
    const [tamanhoJersey, alterarTamanhoJersey] = useConsumeTamanhoJersey()
    const [listaUsuarios, alterarListaUsuarios] = useConsumeListaUsuarios()
    const [listaCpf, alterarListaCpf] = useConsumeListaCpf()
    const [listaIdPsn, alterarListaIdPsn] = useConsumeListaIdPsn()
    const [listaEmail, alterarListaEmail] = useConsumeListaEmail()
    const [totalInscritos, alterarTotalInscritos] = useConsumeTotalInscritos()
    const [toggleResponsavel, alterarToggleResponsavel] = useConsumeToggleResponsavel()

    return (
        <NavigationContext.Provider value={{
            alterarModalInscrever: {
                modalInscrever, alterarModalInscrever
            },
            alterarModalLightning: {
                modalLightning, alterarModalLightning
            },
            alterarModalInscricao: {
                modalInscricao, alterarModalInscricao
            },
            alterarModalRegulamento: {
                modalRegulamento, alterarModalRegulamento
            },
            alterarModalPremiacao: {
                modalPremiacao, alterarModalPremiacao
            },
            alterarModalEmBreve: {
                modalEmBreve, alterarModalEmBreve
            },
            alterarModalConfirmacao: {
                modalConfirmacao, alterarModalConfirmacao
            },
            alterarStep: {
                step, alterarStep
            },
            alterarIdPsn: {
                idPsn, alterarIdPsn, statusIdPsn, alterarStatusIdPsn
            },
            alterarNomeTime: {
                nomeTime, alterarNomeTime, statusNomeTime, alterarStatusNomeTime
            },
            alterarIdade: {
                idade, alterarIdade, statusIdade, alterarStatusIdade
            },
            alterarCpf: {
                cpf, alterarCpf, statusCpf, alterarStatusCpf
            },
            alterarCpfResponsavel: {
                cpfResponsavel, alterarCpfResponsavel, statusCpfResponsavel, alterarStatusCpfResponsavel
            },
            alterarNome: {
                nome, alterarNome, statusNome, alterarStatusNome
            },
            alterarNomeResponsavel: {
                nomeResponsavel, alterarNomeResponsavel, statusNomeResponsavel, alterarStatusNomeResponsavel
            },
            alterarEmail: {
                email, alterarEmail, statusEmail, alterarStatusEmail
            },
            alterarCelular: {
                celular, alterarCelular, statusCelular, alterarStatusCelular
            },
            alterarCep: {
                cep, alterarCep, statusCep, alterarStatusCep
            },
            alterarEstado: {
                estado, alterarEstado, statusEstado, alterarStatusEstado
            },
            alterarEndereco: {
                endereco, alterarEndereco, statusEndereco, alterarStatusEndereco
            },
            alterarNumero: {
                numero, alterarNumero, statusNumero, alterarStatusNumero
            },
            alterarComplemento: {
                complemento, alterarComplemento
            },
            alterarCidade: {
                cidade, alterarCidade, statusCidade, alterarStatusCidade
            },
            alterarBairro: {
                bairro, alterarBairro, statusBairro, alterarStatusBairro
            },
            alterarPersonalizacaoNome: {
                personalizacaoNome, alterarPersonalizacaoNome
            },
            alterarPersonalizacaoNumero: {
                personalizacaoNumero, alterarPersonalizacaoNumero
            },
            alterarTamanhoJersey: {
                tamanhoJersey, alterarTamanhoJersey
            },
            alterarListaUsuarios: {
                listaUsuarios, alterarListaUsuarios
            },
            alterarListaCpf: {
                listaCpf, alterarListaCpf
            },
            alterarListaEmail: {
                listaEmail, alterarListaEmail
            },
            alterarListaIdPsn: {
                listaIdPsn, alterarListaIdPsn
            },
            alterarTotalInscritos: {
                totalInscritos, alterarTotalInscritos
            },
            alterarToggleResponsavel: {
                toggleResponsavel, alterarToggleResponsavel
            }
            
        }
        }>
            {children}
        </NavigationContext.Provider>
    )
}