"use client"
import Layout from "../../../../components/layout"
import ProtectedRoute from "../../../../components/protectedRoute"
import Shelf from "../../../../components/shelf"
import Shelves from "../../../../components/shelves/page"

function ShelfPage({ params }) {

    return (
    <div>
        <ProtectedRoute>
        <Layout>
        <div style={{flex:6}}>
        <Shelf shelfname={params.shelfname}/>
        
            
        
        </div>
        </Layout>
        </ProtectedRoute>
    </div>)
}

export default ShelfPage