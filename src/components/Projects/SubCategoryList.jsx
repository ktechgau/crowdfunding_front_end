import React from 'react';

function SubCategoryList(props) {
   const {groupedProjects}=props;
console.log("categoryKeys:", Object.keys(groupedProjects));

    const categoryKeys = Object.keys(groupedProjects);
    return (
        <div className="subcategoryPage">
            {categoryKeys.map(categoryName => (
                <div key={categoryName}>
         
            <h2>{categoryName}</h2>
            <ul>
                {groupedProjects[categoryName].map(project => (
                    <li key={project.id}>
                        <p>{project.title}</p>
                        <p>{project.description}</p>
                       
                    </li>
                ))}
            </ul>
            </div>
               ))}
        </div>
    );
}

export default SubCategoryList;