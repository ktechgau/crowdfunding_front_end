import {Link, Outlet} from "react-router-dom";
import "../components/Home/HomePage.css";
import ScrollToAnchor from "../components/ScrollToAnchor";
import RandomProjectImg from "../components/Projects/RandomProjectSort";
import useUserTotal from "../hooks/use-user-total";
import usePledgeTotal from "../hooks/use-pledge-total";
import hero3 from "../assets/Hero/hero2.mp4";
import arrow from "../assets/Hero/arrow.png";
import useUser from "../hooks/use-user";
import { useAuth } from "../hooks/use-auth";


function HomePage(){
    const {totalUsers} = useUserTotal(); //for getting usertotals
    const {totalPledges}= usePledgeTotal();
    const {usersData} = useUser();
    const {auth, setAuth} = useAuth();
   

   
   
        return (  
            <>
            {/* <section className = "search">
            {auth.token && (
                    <p>{`${"Welcome back, "} ${usersData}`}</p>
                )} 
           

           
            
            </section>*/}
            <section className="hero">
            <div className="overlay">
            <div className="overlayContainer">
            <p><span className="italic" id="line1">Invest in</span>  </p>
                <p  id="line2">Knowledge</p>
                <p  id="line3"><span className="italic">Transform</span></p>
                <p  id="line4">Lives</p>
                <p>
                    <Link to="cta-button">
                        <img className="arrow" src={arrow}/>
                    </Link>
                </p>
            </div>
            </div>
            <div className="heroImg">
                <video className="heroVid"
                src={hero3} type="video/mp4" autoPlay loop />     
            </div>
            </section>

            <section className="cta-button" id="cta-button">
            <Link className= "link" to="/projects">Help Someone</Link>
            </section>
            
            
            
            <section className="features">
            <p className="headingText"><span className="italic" id="headingline1">Help</span> someone</p>
                <p className="headingText"><span className="italic" id="headingline2">Achieve</span> goals</p>   
                 {/* <div className="featureProjects">  */}
                    <div className="random-image">
                        <RandomProjectImg/>
                    </div>
                
                {/* </div> */}
            </section>

            <section className="howItWorks">
                <p className="overlayText2"><span className="italic" id="line1">How</span> it works</p>
                <div className="blurb">
                    <p className="text">Our platform enables individuals to fund their educational endeavors through personalized crowdfunding campaigns. </p>
                    <p className="text">Users share their goals, receive pledges from supporters, and access funds once their targets are met.</p>
                    <p className="text">It's a community-driven solution for achieving educational aspirations.</p>
                </div>
            </section>

            <section className="cta-button" id="cta-button">
            <Link className= "link" to="/ask">Ask for Help</Link>
            </section>

            
            <section className="counterContainer">
                <div className="totals">
                    <p id="counterText1"><span className="italic">We've helped</span></p>
                    <p id="counterText2">{totalUsers}</p>
                    <p id="counterText3"><span className="italic">people raise </span></p>
                    <p id="counterText2">{totalPledges}</p>
                    
                </div>
            </section>
           

        <Outlet/>
        <ScrollToAnchor/>
        
        </>
        )  
    };


export default HomePage;

