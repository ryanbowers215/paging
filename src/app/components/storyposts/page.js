import "./stories.scss"

const Stories = () => {

    //Temporary Story Data
    const temp_pic = "https://images.pexels.com/photos/3747502/pexels-photo-3747502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    const stories = [
    {
        id: 1,
        name: 'Ryan',
        img: temp_pic
    },
    {
        id: 2,
        name: 'Lauren',
        img: temp_pic
    },
    {
        id: 3,
        name: 'John',
        img: temp_pic
    },
    {
        id: 4,
        name: 'Jane',
        img: temp_pic
    },{
        id: 5,
        name: 'Ryan',
        img: temp_pic
    }
];

return(
    <div className = "storyContainer">

    <h2>Your friends are currently reading</h2>
    <div className="stories">

        {stories.map(story=>(
            <div className="story">
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
    </div>
)

}
export default Stories