import MenuBar from "../components/MenuBar.jsx";
import VolunteerDashboard from "../components/VolunteerDashboard.jsx";
import VolunteerNewDonationTable from "../components/VolunteerNewDonationTable.jsx";


const VolunteerDashboardPage = () => {
    return (
        <>
        <MenuBar/>
            <VolunteerDashboard/>
            <VolunteerNewDonationTable/>
        </>
    );
}
export default VolunteerDashboardPage;