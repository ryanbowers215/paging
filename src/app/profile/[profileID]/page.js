"use client"
import "./profile.scss"
import Layout from "../../components/layout"
import ProtectedRoute from "../../components/protectedRoute"
import Profile from "../../components/profile"

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