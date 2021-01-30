import React from 'react';
import ListProject from '../projects/ListProject';
import NewProject from '../projects/NewProject';

const Sidebar = () => {
    return ( 
        <aside>
            <h1>Menu <span>Tareas</span></h1>
            <NewProject />
            <div className="proyectos">
                <h2>Tus proyectos</h2>
                <ListProject />
            </div>
        </aside>
    );
}
 
export default Sidebar;