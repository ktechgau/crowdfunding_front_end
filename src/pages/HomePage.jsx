
import "../components/HomePage.css";

function HomePage(){
        return (  
        <section className="hero">
            <div className="search">
            <p>Enter search function here</p>
            </div>
            <div className="overlay">
            <div className="overlayContainer">
            <p className="overlayText">
                <span className="italic" id="line1">Invest</span> in 
            </p>
                <p className="overlayText" id="line2">Knowledge</p>
                <p className="overlayText" id="line3"><span className="italic">Transform</span></p>
                <p className="overlayText" id="line4">Lives</p>
            </div>
            </div>
            <div className="heroImg">
                <video autoPlay loop className="heroVid">
                <source type="video/mp4" 
                src="src/assets/Hero/hero2.mp4"/>
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

//eventualy change this home page to have just featured projects, not all8