import "./shelves.scss"
import Link from "next/link";
import { useState } from "react";
import ShelfPage from "../../profile/[profileID]/shelves/[shelfname]/page";

const Shelves = () => {
    const temp_pic = "https://images.pexels.com/photos/3747502/pexels-photo-3747502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    const shelves = [
        {id: 1,name: 'To Be Read',book1: temp_pic, book2: temp_pic, book3: temp_pic, book4: temp_pic,desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"},
        {id: 2, name: 'Books I Own',book1: temp_pic,book2: temp_pic,book3: temp_pic,book4: temp_pic,desc: "" },
        {id: 3, name: 'Read',book1: temp_pic,book2: temp_pic,book3: temp_pic,book4: temp_pic,desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {id: 4,name: 'Wishlist', book1: temp_pic,book2: temp_pic,book3: temp_pic,book4: temp_pic, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
        {id: 5,name: 'Favorites',book1: temp_pic,book2: temp_pic,book3: temp_pic,book4: temp_pic,desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {id: 6,name: 'yeah yeah', book1: temp_pic,book2: temp_pic, book3: temp_pic,book4: temp_pic,desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}
    ];
    return(
        <div className="shelvesContainer">
            {shelves.map(shelf=>(
                <div className="shelf">
                    <div className = "nameBox">
                        <Link href = {`../../profile/USERNAME/shelves/${(shelf.name).replaceAll(" ", "-").toLowerCase()}`} style={{textDecoration: "none"}}>
                        <span>{shelf.name}</span>
                        </Link>
                    </div>
                    <div className="descBox">
                        <span>{shelf.desc}</span>
                    </div>
                    <div className="bookBox">
                        <img src={shelf.book1} />
                        <img src={shelf.book2} />
                        <img src={shelf.book3} />
                        <img src={shelf.book4} />
                    </div>

                </div>
            ))}
        </div>
       

    )
}

export default Shelves
