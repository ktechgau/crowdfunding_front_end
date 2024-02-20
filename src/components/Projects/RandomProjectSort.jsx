import { useState, useEffect } from "react";
import useProjects from "../../hooks/use-projects.js";
import ProjectCard from "./ProjectCard.jsx";

function RandomProjectImg(){
    const { projects } = useProjects();
    const [currentProject, setCurrentProject] = useState(null);
    
    useEffect (() => {
        
        const intervalID = setInterval (() => {
            setCurrentProject(projects[Math.floor(Math.random()* projects.length)]);
        
    }, 2000)
        return() => clearInterval(intervalID);
    }, [projects])
    
    return (
       <section>
       {currentProject&&<ProjectCard projectData={currentProject}/>}
     
    </section>
     );
}
export default RandomProjectImg;
