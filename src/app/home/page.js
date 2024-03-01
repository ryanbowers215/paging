"use client"
import "./home.scss"
import NavBar from "../components/navbar/NavBar"
import LeftBar from "../components/leftBar/LeftBar"
import RightBar from "../components/rightBar/rightBar"
import Layout from "../components/layout"
import ProtectedRoute from "../components/protectedRoute"

const Home = () => {

    return ( 
    <div className = "home">
        <ProtectedRoute>
        <Layout>
            <div style={{flex:6}}>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            </div>
        </Layout>
        </ProtectedRoute>
    </div>)
}

export default Home