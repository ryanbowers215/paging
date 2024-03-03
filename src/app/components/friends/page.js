import "./friends.scss"
import Link from "next/link";

const Friends = () => {
    const temp_pic = "https://images.pexels.com/photos/3747502/pexels-photo-3747502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    const friends = [
        {name: "Ryan", username: "ryan", pfp: temp_pic, friends: 8, bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"},
        {name: "Lauren", username: "lauren", pfp: temp_pic, friends: 9, bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."},
        {name: "John", username: "johndoe", pfp: temp_pic, friends: 5, bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"},
        {name: "Jane", username: "janedoe", pfp: temp_pic, friends: 5, bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"},
        {name: "user", username: "user", pfp: temp_pic, friends: 2, bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {name: "Ryan", username: "ryan", pfp: temp_pic, friends: 8, bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"},
        {name: "Lauren", username: "lauren", pfp: temp_pic, friends: 9, bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."},
        {name: "John", username: "johndoe", pfp: temp_pic, friends: 5, bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"},
        {name: "Jane", username: "janedoe", pfp: temp_pic, friends: 5, bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"},
        {name: "user", username: "user", pfp: temp_pic, friends: 2, bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    ]
return(
    <div className="friendsContainer">
            {friends.map(friend=>(
                <div className="friendBox">
                    <div className="topBox">
                        <div className="topLeft">
                            <div className="pfpBox">
                            <Link href = {`/profile/${(friend.username).replaceAll(" ", "-").toLowerCase()}`} style={{textDecoration: "none"}}>
                                <img src={friend.pfp} />
                                </Link>
                            </div>
                            <div className = "nameBox">
                            <Link href = {`/profile/${(friend.username).replaceAll(" ", "-").toLowerCase()}`} style={{textDecoration: "none"}}>
                            <span>{friend.name}</span>
                            </Link>
                            </div>
                        </div>
                        <div className="topRight">
                            <span>{friend.friends} friends</span>
                        </div>
                    </div>
                    <div className="bioBox">
                        <span>{friend.bio}</span>
                    </div>
                    

                </div>
            ))}
        </div>
)
}

export default Friends