import './Titulo.css';
import dollarImg from '../assets/dollar.png';

function Titulo() {
    return (
        <div className='text-center'>
            <h1 className='display-3'>Calculadoras</h1>
            <img src={dollarImg} width='50' className='img-fluid'  />
        </div>
    );
}

export default Titulo;
