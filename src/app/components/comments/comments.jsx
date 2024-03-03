"use client"
import "./comments.scss"

function Comments() {

    const temp_pic = "https://images.pexels.com/photos/3747502/pexels-photo-3747502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    const comments = [
        {id: 1, name: 'Lauren', pfp: temp_pic,timestamp: "3 hours ago",com: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" },
        {id: 2,name: 'Ryan',pfp: temp_pic,timestamp: "a few seconds ago",com: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"},
        {id: 3, name: 'Jane',pfp: temp_pic,timestamp: "a few seconds ago",com: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {id: 4,name: 'John', pfp: temp_pic,timestamp: "2 hours ago",com: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"},
        {id: 5,name: 'Lauren',pfp: temp_pic,timestamp: "10 minutes ago",com: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}
    ];
    return(
        <div className = "comments">
            <div className = "write">
                <img src={temp_pic} alt = "" />
                <input type="text" placeholder="Write a Comment!"/>
                <button>Post</button>

            </div>


            {
            comments.map(comment=>(
                <div className = "comment">
                    <img src={comment.pfp} />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.com}</p>
                    </div>
                    <div className="date">{comment.timestamp}</div>
                </div>
            ))
        }




        </div>
    )
}

export default Comments