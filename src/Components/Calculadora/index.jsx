import { useState } from 'react';
import styles from './calculadora.module.css';
import '/global.css';

function Calculadora() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('')
    const [resultado, setResultado] = useState(null);
    
    function calculaImc () {
        if(peso && altura) {
            const alturaEmMetros = altura / 100;
            const imc = peso / (alturaEmMetros * alturaEmMetros)
            setResultado(imc.toFixed(2));
            setPeso('')
            setAltura('')
        } else {
            setResultado(null)
        }

    };

    return (
        <div className='container'>
            <div className={styles.containerImc}>
                <h1>Calculadora de IMC</h1>
                <div>
                    <label htmlFor='peso'><strong>Peso (kg): </strong> </label>
                    <input 
                    onChange={({ target }) => setPeso(target.value)} 
                    type="number" 
                    value={peso}
                    id='peso'
                    placeholder='insira seu peso ex: (80.50)' />
                </div>
                <div>
                    <label htmlFor='altura'><strong>Altura (cm): </strong></label>
                    <input 
                    onChange={({ target }) => setAltura(target.value)} 
                    type="number" 
                    value={altura}
                    id='altura'
                    placeholder='insira sua altura ex: (175)' />
                </div>
                <button onClick={calculaImc}>Calcular</button>
                {resultado && (
                    <div>
                        <h2>Seu IMC é <span>{resultado}</span></h2>
                        <img src="src/img/tabela.png" alt="tabela-imc" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Calculadora;