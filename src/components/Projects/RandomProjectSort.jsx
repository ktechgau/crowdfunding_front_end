import { useState, useEffect } from "react";
import useProjects from "../../hooks/use-projects.js";
import ProjectCard from "./ProjectCard.jsx";
import useProjectCategory from "../../hooks/use-project-category.js";

function RandomProjectImg(){
    const { groupedProjects } = useProjectCategory();
    const [currentProject, setCurrentProject] = useState(null);
    
    useEffect (() => {
        
        const allProjects = Object.values(groupedProjects).flat();
        const intervalID = setInterval (() => {
            const randomIndex = Math.floor(Math.random() * allProjects.length);
            setCurrentProject(allProjects[randomIndex]);
        
    }, 2000)
        return() => clearInterval(intervalID);
    }, [groupedProjects])
    
    return (
       <section>
       {currentProject&&<ProjectCard projectData={currentProject}/>}
     
    </section>
     );
}
export default RandomProjectImg;
