import React from 'react';
import useProjectCategory from '../hooks/use-project-category';
import "../components/Projects/SubCategory.css";
import SubCategoryList from '../components/Projects/SubCategoryList';
import door from "../assets/Hero/door.png";
import arrow from "../assets/Hero/arrow.png";

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

const handleArrowClick = () => {
    const targetElement = document.getElementById("details3");
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            left: 0,
            behavior: "smooth"
        });
    }
};


return(
    <>


        <section className="hero">
            <div className="overlay">
                <div className="overlayContainer">
                    <p className="overlayText">
                        <span className="italic" id="line1">See</span>
                    </p>
                    <p className="overlayText" id="line2">who</p>
                    <p className="overlayText" id="line3"><span className="italic"> is</span></p>
                    <p className="overlayText" id="line4">
                    in Need
                    </p>
        
                </div>
            </div>
            <div className="heroImg">
                <img className="heroVid" src={door} alt="image of a lightbulb with a graduation hat on it" />
            </div>
        </section>
        <div>
            <img onClick={handleArrowClick} className="arrow" src={arrow} />
        </div>
       

    <section className="categories2" id="details3">
    <div className="categories-container">
       {Object.keys(groupedProjects).map(categoryName =>
        <SubCategoryList key={categoryName} groupedProjects={groupedProjects}/>
        )}
    </div>
    </section>

    </>
);
}


export default SubCategoryPage;

 
   


