"use client"
import "./profile.scss"
import Layout from "../../components/layout"
import ProtectedRoute from "../../components/protectedRoute"
import Profile from "../../components/profile"
import Posts from "../../components/posts/page"
import Stories from "../../components/storyposts/page"

function ProfilePage({ params }) {
    return (
    <div>
        <ProtectedRoute>
        <Layout>
        <div style={{flex:6}}>
            <Profile profileID={params.profileID}/>
        </div>
        </Layout>
        </ProtectedRoute>
    </div>)
}

export default ProfilePage