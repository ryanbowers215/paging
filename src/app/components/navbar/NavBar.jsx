import "./navbar.scss"
import Link from "next/link"

// replace emojis with material icons when I can get it installed

const NavBar = () => {
    return (
        <div className="navbar">
            <div className = "left">
                <Link href="/home" style={{textDecoration: "none"}}>
                    <span>Paging</span>
                </Link>
                    <a>🌙</a>
                    <a>🌐</a>
                <div className="search">
                <a>🔍</a>
                <input type="text" placeholder="Search..."/>
                </div>

                </div>
                    

            <div className = "right">
            <Link href = "/friends">
            <h4>👥</h4>
            </Link>
            <h4>🔔</h4>
            <Link href = "/profile/me" style={{textDecoration: "none"}}>
                <div className="user">
                    <img src = "https://images.pexels.com/photos/3747502/pexels-photo-3747502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt = '' /> 
                    <span>Ryan Bowers</span>
                </div>
            </Link>
            </div>


        </div>
    )
}

export default NavBar