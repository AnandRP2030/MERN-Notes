import { useNavigate } from "react-router-dom";
import Navbar from "./navbar"
const AdminLogin = () => {
    const navigate = useNavigate();
    const redirectDashboard = () => {
        navigate('/admin')
    }
    const redirectProfile = () => {
        navigate('/profile')
    }
    return (
        <>
        <Navbar />
        
        <h1> Admin Login</h1>

        <button onClick={redirectDashboard}>
            Login 
        </button>
        </>
    )
}
export default AdminLogin;