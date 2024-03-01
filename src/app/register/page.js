import "./register.scss"
import Login from "../login/page"
import Link from "next/link"

const Register = () => {
    return (
        <div className = "register">
            <div className = "card">
                <div className = "left">
                    <h1>Welcome to Paging.</h1>
                    <p>by Ryan Bowers</p>
                    <span>Already have an account?</span>
                    <Link href="/login"><button>Login</button></Link>
                </div>
                <div className = "right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <input type="text" placeholder="Name" />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register