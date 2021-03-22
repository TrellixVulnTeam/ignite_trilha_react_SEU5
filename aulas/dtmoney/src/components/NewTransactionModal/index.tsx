import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer } from './styles'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useState } from 'react'

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void,
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState('deposit')

    function handleSetTypeDeposit(){

    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h2>Cadastrar transação</h2>
                <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar"/>
                </button>
                <input type="text" placeholder="Título" />
                <input type="number" placeholder="Valor" />
                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() =>{
                            setType('deposit')
                        }}
                        isActive={type=='deposit'}
                    >
                        <img src={incomeImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() =>{
                            setType('withdraw')
                        }}
                        isActive={type == 'withdraw'}
                    >
                        <img src={outcomeImg} alt="Saída"/>
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input type="text" placeholder="Categoria" />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}