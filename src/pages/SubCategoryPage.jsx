import React from 'react';
import useProjectCategory from '../hooks/use-project-category';
import CategoryProjects from '../components/Projects/CategoryProjects';
import "../components/Projects/SubCategory.css";

function SubCategories({categoryName}) {

    const { groupedProjects, isLoading, error } = useProjectCategory(categoryName);
    console.log("allprojects page:", groupedProjects)
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

    return (
<>

<h1>TEST</h1>
<section className="categories">
        {Object.keys(groupedProjects).map(categoryName => (
           <div className="categories" key={categoryName} groupedProjects={groupedProjects}>
            <Link to={`/projects/${categoryName}`}>
                   
                    <h2>{categoryName}</h2>
                </Link>
            </div>
        ))}
        
       </section>
     
        </>
    );
   
}


export default SubCategories;

 
   


