"use client"
import "./rightBar.scss"
import Link from "next/link"
const temp_pic = "https://images.pexels.com/photos/3747502/pexels-photo-3747502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const RightBar = () => {
    return(
        <div className="rightBar">
            <div className="container">
                <div className="menu">
                    <span>Notifications</span>
                    <hr></hr>
                    <div className="item">
                       <li>Friend liked your review!</li>
                       <li>Friend accepted your Friend Request!</li>
                       <li>Friend liked your review!</li>
                       <li>Friend accepted your Friend Request!</li>
                       <li>Friend sent you Friend Request!</li>
                       <li>Friend liked your review!</li>
                       <li>Friend accepted your Friend Request!</li>
                       <li>Friend liked your review!</li>
                       <li>Friend accepted your Friend Request!</li>
                       <li>Friend sent you Friend Request!</li>
                       <li>Friend liked your review!</li>
                       <li>Friend accepted your Friend Request!</li>
                       <li>Friend liked your review!</li>
                       <li>Friend accepted your Friend Request!</li>
                       <li>Friend sent you Friend Request!</li>
                       <hr></hr>
                    </div>
                    <hr></hr>
                </div>
                <div className = "menu">
                    <span>Friend Suggestions</span>
                    <hr></hr>
                    <div className="item">
                        <li>
                            <div className="userInfo">
                        <img src = {temp_pic} alt = '' />
                            <Link href = "/profile/lauren" style={{textDecoration: "none", fontSize: "small"}}>Lauren</Link>
                            </div>
                            <div className="buttons">
                                <button>Friend Request</button>
                                <button>Dismiss</button>
                            </div>
                        </li>
                        <li>
                            <div className="userInfo">
                        <img src = {temp_pic} alt = '' />
                            <Link href = "/profile/janedoe" style={{textDecoration: "none", fontSize: "small"}}>Jane Doe</Link>
                            </div>
                            <div className="buttons">
                                <button>Friend Request</button>
                                <button>Dismiss</button>
                            </div>
                        </li>
                        <li>
                            <div className="userInfo">
                        <img src = {temp_pic} alt = '' />
                            <Link href = "/profile/johndoe" style={{textDecoration: "none", fontSize: "small"}}>John Doe</Link>
                            </div>
                            <div className="buttons">
                                <button>Friend Request</button>
                                <button>Dismiss</button>
                            </div>
                        </li>
                        <li>
                            <div className="userInfo">
                        <img src = {temp_pic} alt = '' />
                            <Link href = "/profile/friend4" style={{textDecoration: "none", fontSize: "small"}}>Friend 4</Link>
                            </div>
                            <div className="buttons">
                                <button>Friend Request</button>
                                <button>Dismiss</button>
                            </div>
                        </li>
                        <li>
                            <div className="userInfo">
                        <img src = {temp_pic} alt = '' />
                            <Link href = "/profile/friend5" style={{textDecoration: "none", fontSize: "small"}}>Friend 5</Link>
                            </div>
                            <div className="buttons">
                                <button>Friend Request</button>
                                <button>Dismiss</button>
                            </div>
                        </li>
                        <li>
                            <div className="userInfo">
                        <img src = {temp_pic} alt = '' />
                            <Link href = "/profile/friend6" style={{textDecoration: "none", fontSize: "small"}}>Friend 6</Link>
                            </div>
                            <div className="buttons">
                                <button>Friend Request</button>
                                <button>Dismiss</button>
                            </div>
                        </li>
                        <li>
                            <div className="userInfo">
                        <img src = {temp_pic} alt = '' />
                            <Link href = "/profile/friend7" style={{textDecoration: "none", fontSize: "small"}}>Friend 7</Link>
                            </div>
                            <div className="buttons">
                                <button>Friend Request</button>
                                <button>Dismiss</button>
                            </div>
                        </li>
                        <li>
                            <div className="userInfo">
                        <img src = {temp_pic} alt = '' />
                            <Link href = "/profile/friend8" style={{textDecoration: "none", fontSize: "small"}}>Friend 8</Link>
                            </div>
                            <div className="buttons">
                                <button>Friend Request</button>
                                <button>Dismiss</button>
                            </div>
                        </li>
                        <li>
                            <div className="userInfo">
                        <img src = {temp_pic} alt = '' />
                            <Link href = "/profile/friend9" style={{textDecoration: "none", fontSize: "small"}}>Friend 9</Link>
                            </div>
                            <div className="buttons">
                                <button>Friend Request</button>
                                <button>Dismiss</button>
                            </div>
                        </li>
                        <li>
                            <div className="userInfo">
                        <img src = {temp_pic} alt = '' />
                            <Link href = "/profile/friend10" style={{textDecoration: "none", fontSize: "small"}}>Friend 10</Link>
                            </div>
                            <div className="buttons">
                                <button>Friend Request</button>
                                <button>Dismiss</button>
                            </div>
                        </li>
                        <hr></hr>
                    </div>
                    <hr></hr>
                </div> 
            </div>
        </div>
    )
}

export default RightBar