import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectCard from './ProjectCard';

function SubCategoryList(props) {
   const {groupedProjects}=props;
    const {categoryName} =useParams();


   
    return (
        <div className="subcategoryPage">
            {groupedProjects[categoryName].map(project => (
                <ProjectCard key={project.id} projectData={project}/>
                    // <li key={project.id}>
                    //     <p>{project.title}</p>
                    //     <p>{project.description}</p>
                       
                    // </li>
                ))}
            
            </div>
               
        
        );
}

export default SubCategoryList;