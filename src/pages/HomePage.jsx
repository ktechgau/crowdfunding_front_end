import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "../components/HomePage.css";

function HomePage(){
        return (
        <section className="hero">
            <div className="heroImg">
                <video autoPlay loop controls className="heroVid">
                <source type="video/mp4" 
                src="src/assets/Hero/hero.mp4"/>
                </video>
            
            </div>
        </section>
        )  
    };

    /*const { projects } = useProjects();
    return (
        <div id="project-list">
            {projects.map((projectData, key) =>{
                return <ProjectCard  key={key} projectData={projectData}/>;
            })}
        </div>
    );*/

export default HomePage;

//eventualy change this home page to have just featured projects, not all
