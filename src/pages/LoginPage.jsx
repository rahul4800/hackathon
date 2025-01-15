import { useState } from "react";
import "../styles/loginPage.css";
const Login = () => {

    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="login-container">
            <h1>Login/Register</h1>
           
            <form>
            <div className="form-toggle">
                <button className={isLogin ? "active" : ""}
                onClick={(e)=>{
                    e.preventDefault();
                    setIsLogin(true)
                }}
                >Login</button>
                <button className={!isLogin ? "active" : ""}
                onClick={(e)=>{
                    e.preventDefault();
                    setIsLogin(false)
                }}
                >SignUp</button>
            </div>
            {isLogin ? <>
                
                <input type="email" placeholder="Enter Your Email" required />
                <input type="password" placeholder="Enter Your Password" required/>

                <div className="Login-btn">
                    <button>Login</button>
                </div>
                <p>Not a member? <a href="#" onClick={()=> setIsLogin(false)}>  Signup Now</a></p>
            </> : <>
            <input type="text" placeholder="Enter Your Name" required/>
                <input type="email" placeholder="Enter Your Email" required/>
                <input type="number" placeholder="Enter Your Phone Number" required />

                <div className="Login-btn">
                    <button>SignUp</button>
                </div>
            </>}
                


            </form>
        </div>
    );
}

export default Login;