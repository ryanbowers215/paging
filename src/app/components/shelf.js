import "./shelf.scss"
import Link from "next/link";


export default function Shelf({shelfname}) {
    const temp_pic = "https://images.pexels.com/photos/3747502/pexels-photo-3747502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    const books = [
        {id: 1, cover: temp_pic},{id: 1, cover: temp_pic},{id: 1, cover: temp_pic},{id: 1, cover: temp_pic},
        {id: 1, cover: temp_pic},{id: 1, cover: temp_pic},{id: 1, cover: temp_pic},{id: 1, cover: temp_pic},
        {id: 1, cover: temp_pic},{id: 1, cover: temp_pic},{id: 1, cover: temp_pic},{id: 1, cover: temp_pic},
        {id: 1, cover: temp_pic},{id: 1, cover: temp_pic},{id: 1, cover: temp_pic},{id: 1, cover: temp_pic},
        {id: 1, cover: temp_pic},{id: 1, cover: temp_pic},{id: 1, cover: temp_pic},{id: 1, cover: temp_pic}
       
]
    return (
        <div>
            <div>
            <h2>{(shelfname).replaceAll("-", " ")}</h2>
            </div>
            <div className ="bookContainer">
            {books.map(book=>(
                <div className = "book">
                    <Link href="/books">
                    <img src={book.cover}/>
                    </Link>
                </div>
            ))}
                



            </div>
        </div>
    )
}