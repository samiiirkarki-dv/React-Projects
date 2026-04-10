import "./Hero.css";

const HeroSection = () => {
    return (
        <div>
            <div className="container">
                <h2>Login Form</h2>

                <div className="inputs">
                <input type="email"  placeholder="Enter your email" autoFocus/>
                <input type="password" placeholder="Enter your password"  />
            </div>
            <div className="btndiv">
                <button className="btn">Login</button>
            </div>
            

            <div className="extra">
                <input type="checkbox" /> <span>Remember Me</span>
                <a href="#">Forget Password?</a>
            </div>
            <hr />

            <div className="create">
                <a href="#">Create Account</a>
            </div>
            </div>
        </div>
    )
}

export default HeroSection;