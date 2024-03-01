import "./login.scss"
import Register from "../register/page"
import Link from "next/link"

const Login = () => {
    return (
        <div className = "login">
            <div className = "card">
                <div className = "left">
                    <h1>Paging</h1>
                    <p>by Ryan Bowers</p>
                    <span>Don't have an account?</span>
                    <Link href="/register"><button>Register</button></Link>
                </div>
                <div className = "right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <Link href="/home"><button>Login</button></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login