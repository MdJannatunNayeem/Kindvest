import MenuBar from "../components/MenuBar.jsx";
import AdminDashboard from "../components/AdminDashboard.jsx";
import AdminTab from "../components/AdminTab.jsx";



const AdminDashboardPage = () => {
    return (
        <div>
        <MenuBar/>
            <AdminDashboard />
            <AdminTab/>
        </div>
    );
}
export default AdminDashboardPage;