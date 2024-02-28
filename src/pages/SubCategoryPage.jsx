import React from 'react';
import useProjectCategory from '../hooks/use-project-category';
import { Link, useParams } from 'react-router-dom';

function SubCategories() {
    const { categoryName } = useParams();
    const { groupedProjects, isLoading, error } = useProjectCategory();
    {console.log('categoryNamesubpage:', categoryName)}
    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error.message}</p>;
    }

    // Check if groupedProjects is available
    if (!groupedProjects) {
        return <p>No data available</p>;
    }

    // Check if the category exists in groupedProjects
    if (!groupedProjects[categoryName]) {
        return <p>No projects available for this category.</p>;
    }

    // Access the projects for the specific category
    const categoryProjects = groupedProjects[categoryName];

    return (
        <div className="subcategoryPage">
            <h2>{categoryName}</h2>
            <ul>
                {categoryProjects.map(project => (
                    <li key={project.id}>
                        <p>{project.title}</p>
                        <p>{project.description}</p>
                        {/* Add additional project details as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default SubCategories;

 
   


