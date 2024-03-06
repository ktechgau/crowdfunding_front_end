import thumb from "../assets/Hero/thumb.png";
import { useNavigate } from "react-router-dom";
import "../components/Projects/DeletedConfirmation.css";

function DeleteConfirmationPage () {
    const navigate=useNavigate();

    return (
        <>
       
      
        <section className="hero">
            <img className="heroVid" 
            src={thumb} alt="image of a lightbulb with a graduation hat on it" />
                        
                        
        <div className= "header" >         
            <p><span className="italic" id="line1">Success!</span></p>
            <p className="overlayText" id="line2">Your page </p>
            <p className="overlayText" id="line3"><span className="italic">is </span></p>
            <p className="overlayText" id="line4" >Deleted</p>
            <button className = "cta-button"onClick={() => navigate('/projects')}>
             Back to Projects</button> 
        </div>
        </section>

        </>
    )
}
export default DeleteConfirmationPage;