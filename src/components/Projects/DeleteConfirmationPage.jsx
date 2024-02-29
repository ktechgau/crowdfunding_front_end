import thumb from "../../assets/Hero/thumb.png";
import { useNavigate } from "react-router-dom";

function DeleteConfirmationPage () {
    const navigate=useNavigate();

    return (
        
        <section className="hero">
            <div className="overlay">
                <div className="overlayContainer">
                    <p className="overlayText">
                        <span className="italic" id="line1">Your</span>
                    </p>
                    <p className="overlayText" id="line2">Project </p>
                    <p className="overlayText" id="line3"><span className="italic">is</span></p>
                    <p className="overlayText" id="line4">Deleted</p>
                   
                        
                         <button className = "cta-button"onClick={() => navigate('/projects')}>
                                Back to Projects</button> 
                        
                        
                    
                        
                </div>
            </div>
            <div className="heroImg">
                <img className="heroVid" src={thumb} alt="image of a lightbulb with a graduation hat on it" />
            </div>
        </section>
    )
}
export default DeleteConfirmationPage;