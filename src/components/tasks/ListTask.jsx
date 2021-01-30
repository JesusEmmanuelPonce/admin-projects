import React from 'react';
import Task from './Task';

const ListTask = () => {

    const tasks = [
        { name: 'Elegir colores', status: true },
        { name: 'Elegir hosting', status: false },
        { name: 'Elegir plataformas de pago', status: false },
        { name: 'Elegir plataforma', status: true }
    ]

    return ( 
        <>
            <h2>
                Project 1
            </h2>
            <ul className="listado-tareas">
                {
                    tasks.length === 0 
                        ?   (<li className="tarea"><p>No hay tarea</p></li>)
                        :   tasks.map ( task => (
                            <Task task={task} />
                        ))
                }
            </ul>
            <button type="button" className="btn btn-eliminar">
                Eliminar proyecto &times;
            </button>
        </>
    );
}
 
export default ListTask;