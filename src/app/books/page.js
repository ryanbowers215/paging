"use client"
import "./books.scss"
import Layout from "../components/layout"
import ProtectedRoute from "../components/protectedRoute"

function Books() {
    return ( <div>
        <ProtectedRoute>
        <Layout>
        <div style={{flex:6}}>
            <h2>Books</h2>
        </div>
        </Layout>
        </ProtectedRoute>
    </div>)
}

export default Books