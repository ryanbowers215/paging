import { getCurrentUser } from "../page"
import { redirect } from "next/navigation"


const ProtectedRoute = ({children}) => {
    if(!getCurrentUser()){
        return redirect("/login");
    } else {
        return children
    }
}

export default ProtectedRoute