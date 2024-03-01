import "./leftBar.scss"
import Link from "next/link"

const LeftBar = () => {
    return(
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                <Link href = "/profile/me" style={{textDecoration: "none"}}>
                    <div className="user">
                        <img src = "https://images.pexels.com/photos/3747502/pexels-photo-3747502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt = '' />
                        <span>Ryan Bowers</span>
                    </div>
                    </Link>
                    <Link href = "/friends" style={{textDecoration: "none"}}>
                    <div className="user">
                       <a>👥</a>
                       <span>Friends</span> 
                    </div>
                    </Link>
                    <Link href = "/books" style={{textDecoration: "none"}}>
                    <div className="user">
                       <a>📚</a>
                       <span>Books</span>
                    </div>
                    </Link>
                    <hr></hr>
                </div>
                <div className = "menu">
                    <span>Currently Reading</span>
                    <div className="item">
                       <span>Beautiful World Where Are You</span> 
                    </div>
                    <div className="item">
                       <span>Pride and Prejudice</span> 
                    </div>
                    <div className="item">
                       <span>1984</span>
                    </div>
                    <hr></hr>
                </div>
                <div className = "menu">
                    <span>Shelves</span>
                    <div className="item">
                       <span>Currently Reading</span> 
                    </div>
                    <div className="item">
                       <span>To Be Read</span> 
                    </div>
                    <div className="item">
                       <span>Read</span> 
                    </div>
                    <div className="item">
                       <span>Books I Own</span> 
                    </div>
                    <div className="item">
                       <span>Wishlist</span> 
                    </div>
                    <hr></hr>
                </div>
                
            </div>
        </div>
    )
}

export default LeftBar