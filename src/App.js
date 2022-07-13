import './App.css';
import logo from './imagenes/play.png';

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
    </div>
  );
}

export default App;
