"use client"
import "./navbar.scss"
import Link from "next/link"
import myPhoto from '../../assets/me.jpg';

// replace emojis with material icons when I can get it installed
const temp_pic = "https://images.pexels.com/photos/3747502/pexels-photo-3747502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const NavBar = () => {
    return (
        <div className="navbar">
            <div className = "left">
                <Link href="/home" style={{textDecoration: "none"}}>
                    <span>Paging</span>
                </Link>
                <div className="search">
                    <a>🔍</a>
                    <input type="text" placeholder="Search..."/>
                </div>

            </div>
                    

            <div className = "right">
            <a>⚙️</a>
            <Link href = "/profile/ryan" style={{textDecoration: "none"}}>
                <div className="user">
                    <img src = {temp_pic} alt = '' /> 
                    <span>Ryan Bowers</span>
                </div>
            </Link>
            </div>


        </div>
    )
}

export default NavBar