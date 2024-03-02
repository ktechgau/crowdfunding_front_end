import { useState } from "react";
import { useNavigate } from "react-router-dom";

import postPledge from "../../api/post-pledge.js";


function PledgeForm ({projectId}){
    const navigate = useNavigate();
    const [pledgeSuccess, setPledgeSuccess] = useState(false);
    const [pledgeData, setPledgeData] = useState ({
        amount: " ",
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
    const handleSubmit = async () => {
        try {
          // Call API to post pledge with pledgeDetails
          await postPledge(pledgeData);
          setPledgeSuccess(true); // Set pledge success to true to display thank you message
          setPledgeData({ // Reset form fields after successful pledge
            amount: '',
            supporter: '',
            comment: '',
          });
        } catch (error) {
          console.error('Error submitting pledge:', error);
        }
        console.log(setPledgeData,setPledgeSuccess);
      };
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
    <button className="link2" type="submit" onClick={handleSubmit}>
    Pledge</button>
    </section>
        {pledgeSuccess && (
            <p>Thank you for your pledge!</p>            
        )}

    </form>
    );
}
export default PledgeForm;