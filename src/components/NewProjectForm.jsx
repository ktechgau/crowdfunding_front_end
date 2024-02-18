import { useState } from "react";

function NewProjectForm (){
    
    return(
    <form>
        <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" placeholder="What is your name?"/>
        </div>
        <div>
            <label htmlFor="img">Image field </label>
            <input type="text" id="img" placeholder="Upload your image here"/>
        </div>
        <div>
            <label htmlFor="goal">What is your dollar goal amount?</label>
            <input type="text" id="goal" placeholder="Enter your goal amount"/>
        </div>
        <div>
            <label htmlFor="description">Tell us about yourself and your study aspirations:</label>
            <input type="text" id="description" placeholder="Why are you creating an OpenDoor?"/>
        </div>
        <div>
            <label htmlFor="category">Select a category for your area of study</label>
            <input type="text" id="category" placeholder="Choose a category"/>
        </div>
       <button type="submit">Create an OpenDoor Page</button>

    </form>
    );
}
export default NewProjectForm;