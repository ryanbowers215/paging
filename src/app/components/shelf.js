import "./shelf.scss"


export default function Shelf({shelfname}) {
    const temp_pic = "https://images.pexels.com/photos/3747502/pexels-photo-3747502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    const books = [
        {id: 1, cover: temp_pic},
        {id: 1, cover: temp_pic},
        {id: 1, cover: temp_pic},
        {id: 1, cover: temp_pic},
        {id: 1, cover: temp_pic},
        {id: 1, cover: temp_pic},
        {id: 1, cover: temp_pic},
        {id: 1, cover: temp_pic},
        {id: 1, cover: temp_pic},
        {id: 1, cover: temp_pic},
        {id: 1, cover: temp_pic},
        {id: 1, cover: temp_pic},
        {id: 1, cover: temp_pic},
        {id: 1, cover: temp_pic},
        {id: 1, cover: temp_pic},
        {id: 1, cover: temp_pic},
        {id: 1, cover: temp_pic},
        {id: 1, cover: temp_pic},
        {id: 1, cover: temp_pic},
        {id: 1, cover: temp_pic},
        {id: 1, cover: temp_pic},
        {id: 1, cover: temp_pic},
        {id: 1, cover: temp_pic},
        {id: 1, cover: temp_pic},
        
]
    return (
        <div>
            <div>
            <h2>{(shelfname).replaceAll("-", " ").toLowerCase()}</h2>
            </div>
            <div className ="bookContainer">
            {books.map(book=>(
                <div className = "book">
                    <img src={book.cover}/>
                </div>
            ))}
                



            </div>
        </div>
    )
}