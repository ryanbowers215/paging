"use client"
import "./rightBar.scss"
import Link from "next/link"

const RightBar = () => {
    return(
        <div className="rightBar">
            <div className="container">
                <div className="menu">
                    <span>Notifications</span>
                    <div className="item">
                       <li>Friend liked your review!</li>
                       <li>Friend accepted your Friend Request!</li>
                       <li>Friend liked your review!</li>
                       <li>Friend accepted your Friend Request!</li>
                       <li>Friend sent you Friend Request!</li>
                    </div>
                    <hr></hr>
                </div>
                <div className = "menu">
                    <span>Friend Suggestions</span>
                    <div className="item">
                    <Link href = "/profile/friend1" style={{textDecoration: "none"}}>
                       <li>Friend 1</li>
                    </Link>
                    <Link href = "/profile/friend2" style={{textDecoration: "none"}}>
                       <li>Friend 2</li>
                    </Link> 
                    <Link href = "/profile/friend3" style={{textDecoration: "none"}}>
                       <li>Friend 3</li>
                    </Link>
                    <Link href = "/profile/friend4" style={{textDecoration: "none"}}>
                       <li>Friend 4</li>
                    </Link>
                    <Link href = "/profile/friend5" style={{textDecoration: "none"}}>
                       <li>Friend 5</li>
                     </Link>
                    </div>
                    <hr></hr>
                </div>
                <div className = "menu">
                    <Link href = "/profile/me/shelves/read" style={{textDecoration: "none", fontSize: "larger", textAlign: "center"}}>
                        <span>Recently Read</span>
                    </Link>
                    <div className="item">
                       <li>Book 1</li>
                       <li>Book 2</li>
                       <li>Book 3</li>
                       <li>Book 4</li>
                       <li>Book 5</li>
                    </div>
                    <hr></hr>
                </div>
                
            </div>
        </div>
    )
}

export default RightBar