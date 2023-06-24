import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setimagem] = useState('');
    const [time, setTime] = useState('');

    function aoSalvar(event) {
        event.preventDefault();          

        props.aoColaboradorCadastrado ({
            nome,
            cargo,
            imagem,
            time
        })        

        setNome('');
        setCargo('');
        setimagem('');
        setTime('');
    }    

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar} >
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    label='Nome'
                    placeholder='Digite seu nome'
                    obrigatorio={true}
                    valor={nome}    
                    aoAlterado={valor => setNome(valor)}>
                </CampoTexto>

                <CampoTexto 
                    label='Cargo' 
                    placeholder='Digite seu cargo' 
                    obrigatorio={true}
                    valor={cargo}    
                    aoAlterado={valor => setCargo(valor)}>                    
                </CampoTexto>
                <CampoTexto 
                    label='Imagem'
                    placeholder='Digite o endereço da sua imagem'
                    obrigatorio={true}                        
                    valor={imagem}    
                    aoAlterado={valor => setimagem(valor)}>                    
                </CampoTexto>
                <ListaSuspensa 
                    label='Time' 
                    itens={props.times}
                    obrigatorio={true}
                    valor={time}    
                    aoAlterado={valor => setTime(valor)}>                                        
                </ListaSuspensa>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
    
}

export default Formulario;