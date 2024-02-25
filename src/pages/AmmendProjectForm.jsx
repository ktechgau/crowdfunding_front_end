import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Projects/NewProjectForm.css";
import useProjectPut from "../../hooks/use-user";
//import { useAuth } from "../../hooks/use-auth";

function AmmendProjectForm(){
    const navigate = useNavigate();
    //const { auth } = useAuth(); //gets authentication token
    const {ammendProjectData} = useProjectPut(projectId);

    const [newProjectData, setNewProjectData] = useState({
        title: '',
        description:'',
        goal: null,
        image: '',
        is_open: true,
        date_created: null,
        //category: ([]), //initialise a new array?

    });

    //handles changes in form
    const handleChange = (event) => {
        const {id, value} = event.target;
        setNewProjectData((prevProjectData) => ({
            ...prevProjectData,
            [id]: value,
        }));
    };

    //handles form submission
    const handleSubmit = (event) =>{
        event.preventDefault();
        if (newProjectData.title && newProjectData.goal){
        ammendProjectData(newProjectData)
            .then ((response) => {
                console.lot(response);
                navigate(`/project/${response.id}`)
        });
           
        }
    };

return(
    <form>
        <section className="form-container">
        <div>
            <label htmlFor="title">Title </label>
            <input id="title"
            type="text"  
            placeholder="Heading for your page"
            onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="image">Enter your image URL </label>
            <input type="url" 
            id="image" 
            placeholder="Upload your image here"
            onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="is_open">Currently asking for donations? </label>
            <input type="checkbox" 
            id="is_open" 
            checked={newProjectData.is_open}
            onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="goal">What is your dollar goal amount?</label>
            <input type="number" 
            id="goal" 
            placeholder="Enter your goal amount"
            onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="description">Tell us about yourself and your study aspirations
            </label>
            <textarea rows={15} cols={50}
            input="text"
            placeholder="Why are you creating an OpenDoor?"
            id="description"  
            onChange={handleChange}
            />   
        </div>
        <div>
            <label htmlFor="date_created">Date Created</label>
            <input type="date"
            id="date_created" 
            onChange={handleChange}
            />
        </div>
        {/* <div>
            <label htmlFor="category">Select a category for your area of study</label>
            <select id="category"
            onChange={handleChange}>
            <option key={category} value={category}>{category}</option>
            </select>
        </div> */}
       
    </section>

    <section className="cta-button" id="cta-button">
    <button className="link" type="submit" onClick={handleSubmit}>
    Update your Page</button>
    </section>

    </form>

    
    );
}
export default AmmendProjectForm;
