import "./posts.scss"
import Link from "next/link";
import Comments from "../comments/comments";
import { useState } from "react";

function Posts() {
    const [commentOpen, setCommentOpen] = useState(false)
    const temp_pic = "https://images.pexels.com/photos/3747502/pexels-photo-3747502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    const posts = [
        {id: 1, name: 'Ryan', img: temp_pic, pfp: temp_pic, timestamp: "a few seconds ago", book: "Pride and Prejudice", rating: "⭐⭐⭐⭐",review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {id: 2, name: 'Lauren',img: temp_pic,pfp: temp_pic,timestamp: "a few minutes ago",book: "1984",rating: "⭐⭐⭐⭐⭐",review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"},
        {id: 3,name: 'John',img: temp_pic,pfp: temp_pic,timestamp: "3 hours ago",book: "Beautiful World, Where Are You",rating: "⭐⭐⭐⭐",review: ""}
    ];
    return(
        <div className = "postContainer">
            {posts.map(post=>(
            <div className = "post">
                <div>
                    <div className = "postbox">
                        <div className="textbox">
                            <div className="namebox">
                                <div className = 'firstbox'>
                                    <div><Link href={`/profile/${(post.name).toLowerCase()}`} className="link"><img src={post.pfp}/></Link></div>
                                    <div><Link href={`/profile/${(post.name).toLowerCase()}`} className="link">{post.name}</Link> Completed <Link href="/books" className="link">{post.book}!</Link></div>
                                </div>
                                <div className = "timestamp">{post.timestamp}</div>
                            </div>
                            <div className="ratingbox">{post.rating}</div>
                            <div className="reviewbox"><div>{post.review}</div>
                        </div>
                        
                    </div>
                    <div className="picbox"><Link href="/books" className="link"><img src = {post.img}></img></Link></div>  
                </div>
                <div className="likeboxContainer">
                    <div className="likebox">
                        <div className="like">Like</div>
                        <div className="commentButton" onClick={()=>setCommentOpen(!commentOpen)}>{commentOpen ? "Hide" : "View"} Comments</div>
                        <div className="share">Share</div>
                    </div>   
                </div>
            </div>
                <div>
                    {commentOpen && <Comments />}
                </div>
                
            </div>
            ))}
        </div>

    )
}

export default Posts
