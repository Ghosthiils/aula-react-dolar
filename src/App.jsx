
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import Titulo from './components/Titulo';
import Rodape from './components/rodape';
import Menu from './components/Menu';
import CalcDollar from './components/CalcDollar';

function App() {
 

  return (
    <>
      <div className='container'>
        <Titulo />
        <Menu />
        <CalcDollar />
      </div>
      <Rodape />
      
    </>
  )
}

export default App
