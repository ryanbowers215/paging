import "./posts.scss"

const Posts = () => {
    const temp_pic = "https://images.pexels.com/photos/3747502/pexels-photo-3747502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    const posts = [
        {
            id: 1,
            name: 'Ryan',
            img: temp_pic,
            book: "Pride and Prejudice",
            rating: "⭐⭐⭐⭐",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },
        {
            id: 2,
            name: 'Lauren',
            img: temp_pic,
            book: "1984",
            rating: "⭐⭐⭐⭐⭐",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },
        {
            id: 3,
            name: 'John',
            img: temp_pic,
            book: "Beautiful World Where Are You",
            rating: "⭐⭐⭐⭐",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },
        {
            id: 4,
            name: 'Jane',
            img: temp_pic,
            book: "The House of Hades",
            rating: "⭐⭐⭐⭐",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },{
            id: 5,
            name: 'Ryan',
            img: temp_pic,
            book: "Slaughterhouse Five",
            rating: "⭐⭐⭐⭐⭐",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        }
    ];
    return(
        <div className = "postContainer">
            {posts.map(post=>(
            <div className = "post">
                <div className="picbox"><img src = {post.img}></img></div>
                <div className="textbox">
                    <div className="namebox">{post.name} Completed {post.book}!</div>
                    <hr></hr>
                    <div className="ratingbox">{post.rating}</div>
                    <hr></hr>
                    <div className="reviewbox">{post.review}</div>
    
                </div>
            </div>
            ))}
        </div>

    )
}

export default Posts
