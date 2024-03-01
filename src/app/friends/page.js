"use client"
import "./friends.scss"
import Layout from "../components/layout"
import ProtectedRoute from "../components/protectedRoute"

const Friends = ({}) => {
    return ( <div>
        <ProtectedRoute>
        <Layout>
        <div style={{flex:6}}>
            Friends Page
        </div>
        </Layout>
        </ProtectedRoute>
    </div>)
}

export default Friends