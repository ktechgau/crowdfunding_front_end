import thumb from "../assets/Hero/thumb.png";
import { useNavigate } from "react-router-dom";
import "../components/Projects/DeletedConfirmation.css";

function DeleteConfirmationPage () {
    const navigate=useNavigate();

    return (
        <>
       
      
        <section className="hero">
            <div className="overlay">
                <div className="overlayContainer">
                    <p className="overlayText">
                        <span className="italic" id="line1">Success!</span>
                    </p>
                    <p className="overlayText" id="line2">Your page </p>
                    <p className="overlayText" id="line3"><span className="italic">is </span></p>
                    <p className="overlayText" id="line4" 
                    onClick={() => 
                        navigate('/projects')}>Deleted</p>
                </div>
            </div>
            <div className="heroImg">
                <img className="heroVid" src={thumb} alt="image of a lightbulb with a graduation hat on it" />
              
            
            
            </div>
           
      
        </section>
        <div className = "back-to-project">
             <button className = "cta-button"onClick={() => navigate('/projects')}>
                                Back to Projects</button> 
        </div>
        </>
    )
}
export default DeleteConfirmationPage;