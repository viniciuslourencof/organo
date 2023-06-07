
import './CampoTexto.css';

const CampoTexto = (props) => {            

    function aoDigitar(evento) {        
        props.aoAlterado(evento.target.value)
    }

    const placeholderModificada = `${props.placeholder}...`;
    
    return (
        
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} placeholder={placeholderModificada} required={props.obrigatorio}></input>
        </div>
    )
}

export default CampoTexto;