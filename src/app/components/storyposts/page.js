import "./stories.scss"
import Link from "next/link";

function Stories() {

    //Temporary Story Data
    const temp_pic = "https://images.pexels.com/photos/3747502/pexels-photo-3747502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    const stories = [
    {id: 1, name: 'Ryan',img: temp_pic},
    {id: 2,name: 'Lauren',img: temp_pic},
    {id: 3, name: 'John',img: temp_pic},
    {id: 4, name: 'Jane',img: temp_pic},
    { id: 5, name: 'Ryan',img: temp_pic}, 
    {id: 1,name: 'Ryan',img: temp_pic},
    { id: 2,name: 'Lauren',img: temp_pic}
];

return(
    <div className = "storyContainer">
    <div className="stories">

        {stories.map(story=>(
            <div className="story">
                <Link href="/books" className="link">
                <img src={story.img} alt="" />
                </Link>
            </div>
        ))}
    </div>
    </div>
)

}
export default Stories