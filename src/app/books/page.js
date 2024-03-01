"use client"
import "./books.scss"
import Layout from "../components/layout"
import ProtectedRoute from "../components/protectedRoute"

const Books = ({}) => {
    return ( <div>
        <ProtectedRoute>
        <Layout>
        <div style={{flex:6}}>
            Books Page
        </div>
        </Layout>
        </ProtectedRoute>
    </div>)
}

export default Books