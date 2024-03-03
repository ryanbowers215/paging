"use client"
import "./allshelves.scss"
import Layout from "../../../../components/layout"
import ProtectedRoute from "../../../../components/protectedRoute"
import Shelves from "../../../../components/shelves/page"

const AllShelves = () => {

    return ( 
    <div className = "home">
        <ProtectedRoute>
        <Layout>
            <div style={{flex:6}}>
            <h2 className = "allshelves">all shelves</h2>
            <Shelves />
   
            </div>
        </Layout>
        </ProtectedRoute>
    </div>)
}

export default AllShelves