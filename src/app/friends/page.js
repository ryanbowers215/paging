"use client"
import "./friends.scss"
import Layout from "../components/layout"
import ProtectedRoute from "../components/protectedRoute"
import Friends from "../components/friends/page"


const FriendsPage = ({}) => {
    return ( <div>
        <ProtectedRoute>
        <Layout>
        <div style={{flex:6}}>
            <h2>Your Friends</h2>
            <Friends />


            


        </div>
        </Layout>
        </ProtectedRoute>
    </div>)
}

export default FriendsPage