import MenuBar from "../components/MenuBar.jsx";
import DonorDashboard from "../components/DonorDashboard.jsx";
import DonorTable from "../components/DonorTable.jsx";


const DonorDashboardPage = () => {
    return (
        <>
        <MenuBar/>
            <DonorDashboard />
            <DonorTable/>
        </>
    );
}
export default DonorDashboardPage;