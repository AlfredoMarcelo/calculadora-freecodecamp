import './App.css';
import logo from './imagenes/play.png';
import Boton from './componentes/Boton'
function App() {
  return (
    <div className="App">
      <div className='play-logo-contenedor'>
        <img
          src={logo}
          className='play-logo'
          alt='logo de play'        
        />
      </div>
      <div className='contenedor-calculadora'>
          <div className='fila'>
            <Boton>1</Boton>
            <Boton>+</Boton>
          </div>
          <div className='fila'></div>
          <div className='fila'></div>
          <div className='fila'></div>
          <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
