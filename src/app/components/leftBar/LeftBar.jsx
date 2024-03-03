"use client"
import "./leftBar.scss"
import Link from "next/link"

const temp_pic = "https://images.pexels.com/photos/3747502/pexels-photo-3747502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const LeftBar = () => {
    return(
        <div className="leftBar">
            <div className="container">
                <div className="menu">

                  <Link href = "/profile/ryan" style={{textDecoration: "none"}}>
                    <div className="user">
                        <img src = {temp_pic} alt = '' />
                        <span>Ryan Bowers</span>
                    </div>
                  </Link>

                  <Link href = "/friends" style={{textDecoration: "none"}}>
                    <div className="user">
                       <a>👥</a>
                       <span>Friends</span> 
                    </div>
                  </Link>

                  <Link href = "/books" style={{textDecoration: "none"}}>
                    <div className="user">
                       <a>📖</a>
                       <span>Books</span>
                    </div>
                  </Link>

                </div>
                <hr></hr>
                <div className = "menu">

                  <Link href = "/profile/ryan/shelves/currently-reading" style={{textDecoration: "none", fontSize: "larger"}}>
                    <span>Currently Reading</span>
                  </Link>

                    <div className="item">

                      <Link href="/books" style={{textDecoration: "none"}}>
                        <span>Beautiful World, Where Are You</span> 
                       </Link>

                    </div>
                    <div className="item">

                      <Link href="/books" style={{textDecoration: "none"}}>
                       <span>Pride and Prejudice</span> 
                      </Link>

                    </div>
                    <div className="item">

                    <Link href="/books" style={{textDecoration: "none"}}>
                       <span>1984</span> 
                    </Link>

                    </div>
                </div>
                <hr></hr>
                <div className = "menu">

                  <Link href = "/profile/ryan/shelves/all" style={{textDecoration: "none", fontSize: "larger"}}>
                    <span>Shelves</span>
                   </Link>

                    <div className="item">

                     <Link href = "/profile/ryan/shelves/currently-reading" style={{textDecoration: "none"}}>
                       <span>Currently Reading</span> 
                      </Link>

                    </div>
                    <div className="item">

                    <Link href = "/profile/ryan/shelves/to-be-read" style={{textDecoration: "none"}}>
                       <span>To Be Read</span> 
                     </Link>

                    </div>
                    <div className="item">

                    <Link href = "/profile/ryan/shelves/read" style={{textDecoration: "none"}}>
                       <span>Read</span> 
                     </Link>

                    </div>
                    <div className="item">

                    <Link href = "/profile/ryan/shelves/books-i-own" style={{textDecoration: "none"}}>
                       <span>Books I Own</span> 
                     </Link>

                    </div>
                    <div className="item">
                      
                    <Link href = "/profile/ryan/shelves/wishlist" style={{textDecoration: "none"}}>
                       <span>Wishlist</span>
                     </Link>
                     
                    </div>
                </div>
                <hr></hr>
                
            </div>
        </div>
    )
}

export default LeftBar