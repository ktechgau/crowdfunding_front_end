import React from 'react';
import useProjectCategory from '../hooks/use-project-category';
import CategoryProjects from '../components/Projects/SubCategoryList';
import "../components/Projects/SubCategory.css";
import { Link } from 'react-router-dom';
import SubCategoryList from '../components/Projects/SubCategoryList';

function SubCategoryPage({categoryName}) {

    const { groupedProjects, isLoading, error } = useProjectCategory(categoryName);
    console.log("allprojects page:", groupedProjects)
    console.log("categoryname",categoryName);
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
//     if (!groupedProjects[categoryName]) {
//     return <p>No projects available for this category.</p>;
// }

return(
    <>
    <section className="categories">
       <h1>TEST</h1>
       {Object.keys(groupedProjects).map(categoryName =>
        <SubCategoryList key={categoryName} groupedProjects={groupedProjects}/>
        )}
    </section>

    </>
);
}


export default SubCategoryPage;

 
   


