import React from 'react';
import Project from './Project';

const ListProject = () => {

    const projects = [
        {name: 'proyecto 1'},
        {name: 'proyecto 2'},
        {name: 'proyecto 3'},
    ]

    return ( 
        <ul className="listado-proyectos">
            {
                projects.map(project => (
                    <Project project={project} />
                ))
            }
        </ul>
    );
}
 
export default ListProject;