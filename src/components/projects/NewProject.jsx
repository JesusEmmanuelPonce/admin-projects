import React, { useState } from 'react';

const NewProject = () => {

    const [project, setProject] = useState({
        name: ''
    })

    const { name } = project

    const onChangeProject = e => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
    }

    return ( 
        <>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >
                Nuevo proyecto
            </button>
            <form
                onSubmit={onSubmit}
                className="formulario-nuevo-proyecto"
            >
                <input type="text" name="name" placeholder="Nombre del proyecto" className="input-text" value={name} onChange={onChangeProject} />
                <input type="submit" className="btn btn-block btn-primario" value="Agregar proyecto" />

            </form>
        </>
    );
}
 
export default NewProject;