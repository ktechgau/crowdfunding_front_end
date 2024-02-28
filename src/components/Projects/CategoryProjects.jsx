import React from 'react';

function CategoryProjects({ categoryName, groupedProjects }) {
    const categoryProjects = groupedProjects[categoryName] || [];

    return (
        <div className="subcategoryPage">
            <h2>{categoryName}</h2>
            <h1>TEST</h1>
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

export default CategoryProjects;