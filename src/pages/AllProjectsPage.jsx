import useProjectCategory from "../hooks/use-project-category.js";
import arrow from "../assets/Hero/arrow.png";
import light from "../assets/Images/light.png";
import "../components/Projects/AllProjectsPage.css"
import { Link } from "react-router-dom";

function AllProjectsPage(){
  
    const { groupedProjects, isLoading, error } = useProjectCategory();
    
    const handleArrowClick = () => {
        const targetElement = document.getElementById("project-details2");
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                left: 0,
                behavior: "smooth"
            });
        }
    };
    

    if (isLoading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>Error: {error.message}</p>;
      }
   
    return (
        <>
        <section className="hero">
            <div className="overlay">
                <div className="overlayContainer">
                    <p className="overlayText">
                        <span className="italic" id="line1">Help</span>
                    </p>
                    <p className="overlayText" id="line2">Someone</p>
                    <p className="overlayText" id="line3"><span className="italic">Reach</span></p>
                    <p className="overlayText" id="line4">Their Goal</p>
                           
                </div>
            </div>
            <div className="heroImg">
                <img className="heroVid" src={light} alt="image of a lightbulb with a graduation hat on it" />
            </div>
            </section>
            <div>
            <img onClick={handleArrowClick} className="arrow" src={arrow} />
        </div>
         
       

        <section className="project-details" id="project-details" >
            <p className="text-category">Browse pages by</p>
                <p className="overlayText-project"><span className="italic" id="line1-project">Category</span></p>
        </section>

       <section className="categories">
        <div className="categories-container">
        {Object.keys(groupedProjects).map(categoryName => (
           <div className="category-list" key={categoryName}>
            <Link className="cta-button2" to={`/projects/${categoryName}`}>
                   
                    <h2>{categoryName}</h2>
                </Link>
               
            </div>
        ))}
         </div>
       </section>
        </>
    );
}
export default AllProjectsPage;