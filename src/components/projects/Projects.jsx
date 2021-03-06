import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import FormTask from "../tasks/FormTaks";
import ListTask from "../tasks/ListTask";

const Projects = () => {
    return ( 
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Header />
                <main>
                    <FormTask />
                    <div className="contenedor-tareas">
                        <ListTask />
                    </div>
                </main>
            </div>
        </div>
    );
}
 
export default Projects;