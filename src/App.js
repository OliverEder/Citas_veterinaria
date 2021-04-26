import {Fragment, useState} from 'react';
import Formulario from './components/Formulario';

function App() {
  // Crear state de citas
  const [citas, guardar_citas] = useState([]);

  const crear_cita = cita => {
	console.log(cita);
	guardar_citas([...citas, cita]);
  }
  
  return (
      <Fragment>
    	<h1>Administrador de Pacientes</h1>
    	<div className="container"> 
	  <div className="row">
	    <div className="one-half column">
	      <Formulario
	        crear_cita = {crear_cita}
	      />
	    </div>
	    <div className="one-half column">
	      algo
	    </div> 
	  </div>
	</div>
    </Fragment>
  );
}
export default App;
