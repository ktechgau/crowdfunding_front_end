import NewProjectForm from "../components/Projects/NewProjectForm.jsx";
import "../components/Projects/NewProjectPage.css"


function NewProjectPage(){
    return (
    <>
    <section className="hero2">
            <div className="search">
                <p>Enter search function here</p>
            </div>
            <div className="overlay2">
                <div className="overlayContainer2">
                    <p className="overlayText2">
                        <span className="italic" id="line1">Ask</span> for
                    </p>
                    <p className="overlayText2" id="line2">Help</p>
                    <p className="overlayText2" id="line3"><span className="italic">Reach</span></p>
                    <p className="overlayText2" id="line4">Your Goal</p>
                    <p className="overlayText">
                        <a href="#form">
                        <img className="arrow" src="src/assets/Hero/arrow.png"/>
                        </a>
                    </p>
                        
                </div>
            </div>
            <div className="projectHero">
                <img className="lightImg" src="src/assets/Images/light.png" alt="image of a lightbulb with a graduation hat on it" />
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