import LoginForm from "../components/Login/LoginForm.jsx";
import NewLoginForm from "../components/Login/NewLoginForm.jsx";

function LoginPage(){
   
    return (
<>
<section className="form" >
            <h1>Turn dreams into a <span className="italic">reality</span></h1>
            <h2 className="sub-head">Do you want to enrol in a course? Do you need to purchase tools or equipment to aid your studies? Ask for help, become a sponsee today!</h2>
            <div className="newProjectForm">
                <h3>Already have a profile? <span className="orange">Sign in</span></h3>
        <LoginForm />
        <h3>Don't have a profile? <span className="orange">Create a login</span></h3>
        <NewLoginForm/>
        </div>
    </section>
</>
)
}
export default LoginPage;