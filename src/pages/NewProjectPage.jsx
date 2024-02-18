import NewProjectForm from "../components/NewProjectForm.jsx";

function NewProjectPage(){
    return (
     <>
     <div className="projectHero">
        <img className="lightImg" src="src/assets/Images/light.png" alt="image of a lightbulb with a graduation hat on it"/>
     </div>
    
    <NewProjectForm/>
    </>  
    );
}
export default NewProjectPage;