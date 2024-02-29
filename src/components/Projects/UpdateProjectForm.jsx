import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Projects/NewProjectForm.css";
import putProject from "../../api/put-project";


function UpdateProjectForm (){
    const navigate = useNavigate();

    const [projectData, setProjectData] = useState ({
        title: '',
        description:'',
        goal: null,
        image: '',
        is_open: true,
        date_created: null,
        //category: ([]), //initialise a new array?
    });

    
    //handles the changes in the form
    const handleChange = (event) => {
        const {id, value} = event.target;
        setProjectData((prevProjectData) => ({
            ...prevProjectData,
            [id]: value,
        }));
    };

    //handles the form submission
    const handleSubmit = (event) =>{
        event.preventDefault();
        if (projectData.title && projectData.goal) {
        putProject(
            {...projectData}
        )
        .then((response) => {
            navigate(`/project/${response.id}`);
        });
    }
    }

     return(
        <>
        <section className="form-container">
        <form >
       
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
            checked={projectData.is_open}
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
       
       </form>
    </section>
    <section className="cta-button" id="cta-button">
    <button className="link" type="submit" onClick={handleSubmit}>Update</button>
   
    </section>

   

    </>
    );
}
export default UpdateProjectForm;