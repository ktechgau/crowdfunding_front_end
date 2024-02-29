import NewProjectForm from "../components/Projects/NewProjectForm.jsx";
import "../components/Projects/NewProjectPage.css"
import arrow from "../assets/Hero/arrow.png";
import light from "../assets/Images/light.png";
import help from "../assets/Hero/help.png";

function NewProjectPage(){
    return (
    <>
    <section className="hero">
            <div className="overlay">
                <div className="overlayContainer">
                    <p className="overlayText">
                        <span className="italic" id="line1">Ask</span> for
                    </p>
                    <p className="overlayText" id="line2">Help</p>
                    <p className="overlayText" id="line3"><span className="italic">Reach</span></p>
                    <p className="overlayText" id="line4">Your Goal</p>
                    <p className="overlayText">
                        <a href="#form">
                        <img className="arrow" src={arrow}/>
                        </a>
                    </p>
                        
                </div>
            </div>
            <div className="heroImg">
                <img className="heroVid" src={help} alt="image of a lightbulb with a graduation hat on it" />
            </div>
        </section>

        <section className="project-details">
            <p className="text-category">Make your goals a</p>
                <p className="overlayText-project"><span className="italic" id="line1-project">Reality</span></p>
        </section>

        <section className="newProjectForm">
                <h3>Create your <span className="orange">Page</span></h3>
                <NewProjectForm />
        </section>
       
        </>  
    )
};
export default NewProjectPage;