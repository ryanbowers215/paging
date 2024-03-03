"use client"
import "./home.scss"
import Layout from "../components/layout"
import ProtectedRoute from "../components/protectedRoute"
import Stories from "../components/storyposts/page"
import Posts from "../components/posts/page"

function Home() {

    return ( 
    <div className = "home">
        <ProtectedRoute>
        <Layout>
            <div style={{flex:6}}>
            <h2>Your friends are currently reading</h2>
            <Stories/>
            <Posts />
            <h2>You might like</h2>
            <Stories />
            <Posts />
   
            </div>
        </Layout>
        </ProtectedRoute>
    </div>)
}

export default Home