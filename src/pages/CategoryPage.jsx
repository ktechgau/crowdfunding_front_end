
import React from 'react';
import { Link } from 'react-router-dom';
import useProjectCategory from '../hooks/use-project-category';
import SubCategories from './SubCategoryPage.jsx';

function Categories() {
    const { groupedProjects } = useProjectCategory();
console.log('groupedprojects', groupedProjects);
    const renderCategoryImages = () => {
        return Object.entries(groupedProjects).map(([categoryName, categoryData], index) => (  
            <div key={index}>
                <Link to={`/projects/${categoryName}`}>
                    <img src={categoryData.image} alt={categoryName} />
                </Link>
                {console.log('categoryName:', categoryName)}
                <section>
               
        <SubCategories key={index} categoryData={categoryData} categoryName={categoryName} />
        {console.log('categoryNameSub:', categoryName)}
        </section> 
            </div>
        ));
    }
 
    return (
        <>
        <section className="allProjectsContainer">
            <div id="project-list">
                {renderCategoryImages()}
            </div>
        </section>
       
        </>
    );
   
}

export default Categories;










// import React from 'react';
// import "../components/Projects/AllprojectsPage.css";
// import useProjectCategory from '../hooks/use-project-category';

// function Categories() {
//     const { categories, isLoading, error } = useProjectCategory();

//     if (isLoading) {
//         return <p>Loading...</p>;
//     }

//     if (error) {
//         return <p>Error: {error.message}</p>;
//     }

//     const renderCategoryImages = () => {
//         return categories.map(category => (
//             <div key={category}>
//                 <img src={`/public/Category/${category.toLowerCase()}.png`} alt={category} />
//             </div>
//         ));
//     }

//     return (
//         <section className="allProjectsContainer">
//             <div id="project-list">
//                 {renderCategoryImages()}
//             </div>
//         </section>
//     );
// }

// export default Categories;






// import React, { useState, useEffect } from 'react';
// import "../components/Projects/AllprojectsPage.css";
// import useProjectCategory from '../hooks/use-project-category';

// function Categories(){
//     const [ categoryImages, setIsCategoryImages ] = useState({});
    
//   useEffect(() =>{
//     const getCategoryImages = async () =>{
//         try{
//             const response = await fetch('/public/category-imges.json');
//             const data = await response.json();
//             setIsCategoryImages(data);
//         }catch (error) {
//             console.error('Error loading category images:', error);
//         }
//     };
//     getCategoryImages();

//   }, []);

//     const renderCategoryImages = () => {

        
//         return Object.entries(categoryImages).map(([category, imagePath]) => (
//             <div key={category}>
//                 <img src={imagePath} alt={category}/>
//             </div>

//         ));;
//     }
   
//     return (
        
//         <section className="allProjectsContainer">
//         <div id="project-list">
//           {renderCategoryImages()}
//         </div>
//         </section>

    
//     );
// }
// export default Categories;
