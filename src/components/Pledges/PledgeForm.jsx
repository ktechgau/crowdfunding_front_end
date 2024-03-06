import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useProject from "../../hooks/use-project.js";
import postPledge from "../../api/post-pledge.js";


function PledgeForm ({projectId, updateProjectData}){
    const navigate = useNavigate();
    const [pledgeSuccess, setPledgeSuccess] = useState(false);
    const [pledgeData, setPledgeData] = useState ({
        amount: 0,
        comment: " ",
        anonymous: false,
        project: projectId,
    });
    const [isLoading, setIsLoading] = useState(false);
    const { projectData: updatedProject, isLoading: isUpdating } = useProject(projectId, {
        headers: { 'Cache-Control': 'no-cache' } // Pass cache-control header
    });

    //handles the changes in the form
    const handleChange = (event) => {
        const {id, value} = event.target;
        setPledgeData((prevPledgeData) => ({
            ...prevPledgeData,
            [id]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (projectId && pledgeData.amount) {
            try {
                setIsLoading(true);
                //checks if ocmment is provided
                if (pledgeData.comment){
                    //validate comment field
                    if (pledgeData.comment.trim() === ''){
                        throw new Error('Comment field cannot be empty');
                    }
                }
                const response = await postPledge(pledgeData);
                console.log(response); // Log the response to see the pledge details
    
                // Update project data in ProjectPage after successful pledge
                updateProjectData((prevProjectData) => ({
                    ...prevProjectData,
                    project: {
                        ...prevProjectData.project,
                        pledges: [...prevProjectData.project.pledges, response], // Add new pledge data to the existing pledges
                    },
                }));
    
                setPledgeSuccess(true); // Set pledge success to true to display thank you message
                setPledgeData({ // Reset form fields after successful pledge
                    amount: '',
                    supporter: '',
                    comment: '',
                    anonymous: false,
                    project: projectId,
                });

                //Fetches updated project Data
                
               
                setTimeout(() => {
                    window.location.reload();
                }, 4000);
           
            } catch (error) {
                console.error('Error submitting pledge:', error);
            } finally{
                setIsLoading(false);            }
        }
    };

            
     return(
    <form>

        <section className="form-container">
            {/* Render loading indicator if data is being loaded */}
            {isLoading && <p>Loading...</p>}
        <div>
            <label htmlFor="amount">Enter a dollar amount: </label>
            <input id="amount"
            type="number"  
            placeholder="$"
            value={pledgeData.amount}
            onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="comment">Would you like to leave a comment? </label>
            <input type="text" 
            id="comment" 
            placeholder="required"
            onChange={handleChange}
            value={pledgeData.comment}
            />
        </div>
        <div>
            <label htmlFor="anonymous">Make my support anonymous: </label>
            <input type="checkbox" 
            id="anonymous" 
            checked={pledgeData.anonymous}
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
    Pledge</button>
    </section>
    
       
       
        {pledgeSuccess && (
             <>
             <h3 className="text-category3">Thank you for your pledge!</h3> 
             <h3>..this page will refresh soon to show your pledge.</h3>           
             </>
        )}
       
       
        
    </form>
    );
}
export default PledgeForm;