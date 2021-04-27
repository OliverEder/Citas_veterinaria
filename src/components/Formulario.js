import React, {Fragment, useState} from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

const Formulario = ({crear_cita}) => {
    //crear state de citas
    const [cita, actualizar_cita] = useState({
        mascota: '',
        propietario:'',
        fecha: '',
        hora: '',
        sintomas:''
    });

    const [error, actualizar_error] =  useState(false)  

    //Fucion que se ejecuta cada que el usuario escribe en un input
    const actualizar_state = (e) => {
        actualizar_cita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    //extraer lo valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    // cuando el usuario presiona agregar cita
    const sumbit_cita = (e) => {
        e.preventDefault();
        //validar
        if(
            mascota.trim() === '' || 
            propietario.trim() === '' || 
            fecha.trim() === '' || 
            hora.trim() === '' ||
            sintomas.trim() === '' 
        ){
            actualizar_error(true);
            return;            
        }
        //eliminar el mensaje previo
        actualizar_error(false);

        //Asignar un ID
        cita.id = uuid();
        
        //Crear una cita
        crear_cita(cita);

        //Reiniciar form
	actualizar_cita({
	  mascota: '',
	  propietario:'',
	  fecha: '',
	  hora: '',
	  sintomas: ''
	})

    }

    return (
        <Fragment>
            <h2> Crear Cita</h2>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p>: null}
            <form
                onSubmit={sumbit_cita}
            >
                <label>Nombre de la mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizar_state}
                    value={mascota}
                />
                <label>Nombre de la dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={actualizar_state}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizar_state}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizar_state}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizar_state}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
}

Formulario.propTypes = {
    crear_cita: PropTypes.func.isRequired
}

export default Formulario;