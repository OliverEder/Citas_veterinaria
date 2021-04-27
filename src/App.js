import {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {
  //Citas en local storage
  let citas_iniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citas_iniciales) {
    citas_iniciales = [];
  }

  // Crear state de citas
  const [citas, guardar_citas] = useState(citas_iniciales);

  const crear_cita = cita => {
	  guardar_citas([...citas, cita]);
  }

  //useEffect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
    let citas_iniciales = JSON.parse(localStorage.getItem('citas'));

    if(citas_iniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
}, [citas] );

  //Funcion que elimina una cita por id
  const eliminar_cita = (id) => {
    const nuevas_citas = citas.filter(cita => cita.id !== id)
    guardar_citas(nuevas_citas);
  }

  //mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas': 'Administra tus citas'

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
	      <h2>{titulo}</h2>
	      	{citas.map(cita =>(  
				  	<Cita
				  		key={cita.id}
				  		cita={cita} 
					    eliminar_cita={eliminar_cita}
			   		/>
			  	)	
			)}
	    </div> 
	  </div>
	</div>
    </Fragment>
  );
}
export default App;
