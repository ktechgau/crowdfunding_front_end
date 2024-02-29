import React from 'react';
import { useParams } from 'react-router-dom';

function SubCategoryList(props) {
   const {groupedProjects}=props;
    const {categoryName} =useParams();
console.log("categoryKeys:", Object.keys(groupedProjects));

   
    return (
        <div className="subcategoryPage">
          
           
            <ul>
                {groupedProjects[categoryName].map(project => (
                    <li key={project.id}>
                        <p>{project.title}</p>
                        <p>{project.description}</p>
                       
                    </li>
                ))}
            </ul>
            </div>
               
        
        );
}

export default SubCategoryList;