import LoginForm from "../components/Login/LoginForm.jsx";

function LoginPage(){
   
    return (
<>
<section className="form" >
            <h1>Turn dreams into a <span className="italic">reality</span></h1>
            <h2 className="sub-head">Do you want to enrol in a course? Do you need to purchase tools or equipment to aid your studies? Ask for help, become a sponsee today!</h2>
            <div className="newProjectForm">
                <h3>Create your <span className="orange">Page</span></h3>
        <LoginForm />
        </div>
    </section>
</>
)
}
export default LoginPage;