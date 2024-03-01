"use client"
import LeftBar from "./leftBar/LeftBar"
import NavBar from "./navbar/NavBar"
import RightBar from "./rightBar/RightBar"


const Layout = ({children}) => {
    return (
    <div>
        <NavBar />
        <div style={{display: "flex", justifyContent: "space-between"}}>
        <LeftBar />
        {children}
        <RightBar />
        </div>
    </div>)
}

export default Layout