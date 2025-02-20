import React, { useContext } from "react";
import { AppContext } from "../../App";

function Login(){

    const{setIsLogin}=useContext(AppContext)
    return(
        <div className="login">
            <h2>Login</h2>

            <div className="inpuwrapper">
                <label htmlFor="">username</label>
                <input type="text" />
            </div>
            <div className="inpuwrapper">
                <label htmlFor="">password</label>
                <input type="text" />
            </div>

            <button onClick={()=>setIsLogin(true)}>Login</button>
        </div>
    )
}
export default Login;
