import { useState, useEffect } from "react";
import getProjects from "../api/get-projects";

function useProjects() {
const [projects, setProjects] = useState([]);   //setting this state as an empty array as we're expecting the return to be arrays of objects
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState();

useEffect(() => {
    getProjects()
        .then((projects) => {
            setProjects(projects);
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error);
            setIsLoading(false);
        });
}, []); //this is a dependancy. The useEffect will run until this dependancy has changed..eg when the array is no longer empty

//useEffect runs when something is rendered to a component

return { projects, isLoading, error };
}
export default useProjects;