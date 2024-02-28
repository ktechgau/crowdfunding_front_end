import React from 'react';
import useProjectCategory from '../hooks/use-project-category';
import CategoryProjects from '../components/Projects/CategoryProjects';
import "../components/Projects/SubCategory.css";

function SubCategories({categoryName, groupedProjects}) {

    // const { groupedProjects, isLoading, error } = useProjectCategory();
    {console.log('categoryNamesubpage:', categoryName)}
    
    // if (isLoading) {
    //     return <p>Loading...</p>;
    // }
    // if (error) {
    //     return <p>Error: {error.message}</p>;
    // }

    // Check if groupedProjects is available
    if (!groupedProjects) {
        return <p>No data available</p>;
    }
    // Check if the category exists in groupedProjects
    if (!groupedProjects[categoryName]) {
    return <p>No projects available for this category.</p>;
}
             
const categoryProjects = groupedProjects[categoryName];

    return (
<>

        
              
<section className="categories">
        {Object.keys(groupedProjects).map(categoryName => (
           <div className="categories" key={categoryName}>
            <Link to={`/projects/${categoryName}`}>
                   
                    <h2>{categoryName}</h2>
                </Link>
           
            <CategoryProjects 
                categoryName={categoryName}
                groupedProjects={groupedProjects}
                key={categoryName}
                />
            </div>
        ))}
        
       </section>
        </>
    );
   
}


export default SubCategories;

 
   


