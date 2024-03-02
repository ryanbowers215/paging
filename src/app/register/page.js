import "./register.scss"
import Login from "../login/page"
import Link from "next/link"

const Register = () => {
    return (
        <div className = "register">
            <div className = "card">
                <div className = "left">
                    <h1>Welcome to Paging.</h1>
                    <p>A book-focused Social Media</p>
                    <span>Already have an account?</span>
                    <Link href="/login"><button>Login</button></Link>
                </div>
                <div className = "right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Preferred First Name" />
                        <input type="password" placeholder="Password" />
                        <Link href = "/terms" style={{textDecoration: "none"}}><h4>Terms and Conditions</h4></Link>
                        <button>Register</button>
                        <p>By registering, you acknowledge that you have read and understand the terms and conditions.</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register