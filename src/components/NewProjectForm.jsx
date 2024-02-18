import { useState } from "react";

import postProject from "../api/post-project.js";

function NewProjectForm (){
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
        postProject(
            projectData.title,
            projectData.description,
            projectData.goal,
            projectData.image,
            projectData.date_created,
            //projectData.category
        )
        .then((response) => {
            console.log(response);
        });
    }
    }

     return(
    <form>
        <div>
            <label htmlFor="title">Title: </label>
            <input id="title"
            type="text"  
            placeholder="What is your name?"
            onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="img">Enter your image URL: </label>
            <input type="url" 
            id="img" 
            placeholder="Upload your image here"
            onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="isOpen">Asking for donations: </label>
            <input type="checkbox" 
            id="isOpen" 
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
            <label htmlFor="description">Tell us about yourself and your study aspirations:
            </label>
            <textarea rows={15} cols={50}
            input="text"
            placeholder="Why are you creating an OpenDoor?"
            id="description"  
            onChange={handleChange}
            />   
        </div>
        <div>
            <label htmlFor="dateCreated">Date Created:</label>
            <input type="date"
            id="dateCreated" 
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
       <button type="submit" onClick={handleSubmit}>
        Create an OpenDoor Page</button>

    </form>
    );
}
export default NewProjectForm;