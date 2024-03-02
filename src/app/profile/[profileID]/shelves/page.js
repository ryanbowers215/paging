"use client"
import "./shelves.scss"
import Layout from "../../../components/layout"
import ProtectedRoute from "../../../components/protectedRoute"
import Profile from "../../../components/profile"
import Shelves from "../../../components/shelf"

function ShelvesPage() {
    return (
    <div>
        <ProtectedRoute>
        <Layout>
        <div style={{flex:6, textAlign: "center"}}>
        Shelves
        </div>
        </Layout>
        </ProtectedRoute>
    </div>)
}

export default ShelvesPage