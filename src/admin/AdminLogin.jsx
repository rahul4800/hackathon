import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/adminLogin.css";


const AdminLogin = ()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(username === "admin" && password === "admin"){
            navigate("/admindashboard")
        } else{
            alert("Invalid Credentials!");
        }

    }


    return(
        <section>
            <div className="admin-form">
                <form onSubmit={handleSubmit} className="admin-login-form" >
                    <div className="admin-heading" >
                        <h1>Admin Login</h1>
                    </div>

                    <input type="text" placeholder="Username" 
                    onChange={(e) =>setUsername(e.target.value)}
                    required
                    />
                    <input type="password" placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />

                    <div className="submit-tabs">
                        <Link to="#" className="text-danger" >Forget Password</Link>
                        <input type="submit" placeholder="submit" className="submit-btn"
                        value={"Login"} />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default AdminLogin;