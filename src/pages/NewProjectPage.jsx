import NewProjectForm from "../components/Projects/NewProjectForm.jsx";
import "../components/Projects/NewProjectPage.css"
import arrow from "../assets/Hero/arrow.png";
import help from "../assets/Hero/help.png";


function NewProjectPage(){
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

    return (
    <>
    <section className="hero">
        <img className="heroVid" 
        src={help} alt="image of a lightbulb with a graduation hat on it" />
    <div className="header">
        <p><span className="italic" id="line1">Ask</span> for</p>
        <p className="overlayText" id="line2">Help</p>
        <p className="overlayText" id="line3"><span className="italic">Reach</span></p>
        <p className="overlayText" id="line4">Your Goal</p>        
        <img onClick={handleArrowClick} className="arrow" src={arrow} />
    </div>
    </section>
            
                   

        <section className="project-details" id="project-details2">
            <p className="text-category" id="text-category">Make your goals a</p>
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