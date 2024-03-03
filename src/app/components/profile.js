"use client"
import "./profile.scss"
import Link from "next/link"
import { useState } from "react";

function Profile({profileID}) {
    const temp_pic = "https://images.pexels.com/photos/3747502/pexels-photo-3747502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    const cover = "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    const [friends, setFriends] = useState(false)
    return (
        <div className = "profile">
            <div className = "images">
                <img src = {cover} className="cover"/>
                <img src = {temp_pic} className="profilePic"/>
            </div>

            <div className="profileContainer">
                <div className="userInfo">
                        <div className="left">
                            <p>Favorite Book</p>
                            <img src={temp_pic}/>

                        </div>

                        <div className="center">
                            <span>{profileID}</span>
                            <p className="username">{profileID}</p>
                            <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                        </div>

                        <div className="right">
                            <button onClick={()=>setFriends(!friends)}>{friends ? "Remove Friend" : "Send Friend Request"}</button>

                        </div>
                </div>
            </div>


        </div>
    )
}

export default Profile