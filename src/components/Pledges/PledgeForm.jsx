import { useState } from "react";
import { useNavigate } from "react-router-dom";

import postPledge from "../../api/post-pledge.js";


function PledgeForm ({projectId}){
    const navigate = useNavigate();
    console.log(projectId);
    

    const [pledgeData, setPledgeData] = useState ({
        amount: null,
        comment: " ",
        anonymous: false,
        project: projectId,
        
    });

    
    //handles the changes in the form
    const handleChange = (event) => {
        const {id, value} = event.target;
        setPledgeData((prevPledgeData) => ({
            ...prevPledgeData,
            [id]: value,
        }));
    };

    //handles the form submission
    const handleSubmit = (event) =>{
        event.preventDefault();
        if (projectId && pledgeData.amount) {
        postPledge(
            pledgeData,
            
        )
        .then((response) => {
            console.log(response);
            navigate(`/project/${projectId}`);
        });
    }
    }
     return(
    <form>
        <section className="form-container">
        <div>
            <label htmlFor="amount">Enter a dollar amount: </label>
            <input id="amount"
            type="number"  
            placeholder="$"
            onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="comment">Would you like to leave a comment? </label>
            <input type="text" 
            id="comment" 
            placeholder="Comment..."
            onChange={handleChange}
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
    Make a Pledge</button>
    </section>
    </form>
    
    );
}
export default PledgeForm;