
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import Titulo from './components/Titulo';
import Rodape from './components/rodape';
import Menu from './components/Menu';

function App() {
 

  return (
    <>
      <div className='container'>
        <Titulo />
        <Menu />
      </div>
      <Rodape />
      
    </>
  )
}

export default App
