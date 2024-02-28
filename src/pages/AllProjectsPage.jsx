import useProjectCategory from "../hooks/use-project-category.js";
import arrow from "../assets/Hero/arrow.png";
import light from "../assets/Images/light.png";
import "../components/Projects/AllprojectsPage.css";
import Categories from "./CategoryPage.jsx";

function AllProjectsPage(){
  
    const { groupedProjects, isLoading, error } = useProjectCategory();
    console.log("allprojects page:", groupedProjects)
    if (isLoading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>Error: {error.message}</p>;
      }
   
    return (
        <>
        <section className="hero2">
            <div className="search">
                <p>Enter search function here</p>
            </div>
            <div className="overlay2">
                <div className="overlayContainer2">
                    <p className="overlayText2">
                        <span className="italic" id="line1">Help</span>
                    </p>
                    <p className="overlayText2" id="line2">Someone</p>
                    <p className="overlayText2" id="line3"><span className="italic">Reach</span></p>
                    <p className="overlayText2" id="line4">Their Goal</p>
                    <p className="overlayText">
                        <a href="#form">
                        <img className="arrow" src={arrow}/>
                        </a>
                    </p>
                        
                </div>
            </div>
            <div className="projectHero">
                <img className="lightImg" src={light} alt="image of a lightbulb with a graduation hat on it" />
            </div>
        </section>

        <section className="project-details">
            <p className="text-category">Browse pages by</p>
                <p className="overlayText-project"><span className="italic" id="line1-project">Category</span></p>
        </section>

       <section>
        <Categories groupedProjects={groupedProjects}/> {/* Renders the Categories component */}
       </section>
        </>
    );
}
export default AllProjectsPage;
