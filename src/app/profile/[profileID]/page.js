"use client"
import "./profile.scss"
import Layout from "../../components/layout"
import ProtectedRoute from "../../components/protectedRoute"
import Profile from "../../components/profile"
import Posts from "../../components/posts/page"
import Stories from "../../components/storyposts/page"
import Shelves from "../../components/shelves/page"

function ProfilePage({ params }) {
    return (
    <div>
        <ProtectedRoute>
        <Layout>
        <div style={{flex:6}}>
            <Profile profileID={params.profileID}/>
            <h2>{params.profileID} is currently reading</h2>
            <Stories />
            <h2>{params.profileID}'s shelves</h2>
            <Shelves />
            <h2>{params.profileID}'s updates</h2>
            <Posts />
        </div>
        </Layout>
        </ProtectedRoute>
    </div>)
}

export default ProfilePage