import './Titulo.css';
import dollarImg from '../assets/dollar.png';

function Titulo() {
    return (
        <div className='text-center'>
            <h1 className='display-3'>Calculadora Dólar</h1>
            <img src={dollarImg} width='50' className='img-fluid' alt="Ícone do dólar" />
        </div>
    );
}

export default Titulo;
