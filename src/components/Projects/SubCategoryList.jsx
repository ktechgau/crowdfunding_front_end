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
                   
                ))}
            
            </div>
               
        
        );
}

export default SubCategoryList;