import "./login.css";

export default function Login() {
    return (
        <div className="login">
            <div className="login-wrapper">
                <div className="login-left">
                    <h3 className="login-logo">Social-Med</h3>
                    <span className="login-desc">
                        Connect with friends and the world around you with Social-Med
                    </span>
                </div>
                <div className="login-right">
                    <div className="login-box">
                        <input placeholder="Email" className="login-input" />
                        <input placeholder="Password" className="login-input" />
                        <button className="login-button">Log In</button>
                        <span className="login-forgot">Forgot Password?</span>
                        <button className="login-register-button">Create a new account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}