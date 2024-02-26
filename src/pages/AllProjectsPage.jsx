import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/Projects/ProjectCard.jsx";
import arrow from "../assets/Hero/arrow.png";
import light from "../assets/Images/light.png";
import "../components/Projects/AllprojectsPage.css";

function AllProjectsPage(){
    const { projects } = useProjects();
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

        <section className="allProjectsContainer">
        <div id="project-list">
            {projects.map((projectData, key) =>{
                return <ProjectCard  key={key} projectData={projectData}/>;
            })}
        </div>
        </section>

        </>
    );
}
export default AllProjectsPage;
