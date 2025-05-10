import {RiUserSettingsFill} from "react-icons/ri";
import {useEffect, useState} from "react";
import {userDetails} from "../apiRequest/api.js";

const ProfileSection = () => {
    const [detail, setDetail] = useState([null]);
    const [formdata, setFormdata] = useState({
        email: "",
        firstName: "",
        lastName: "",
        profileImg: "",
        contactNo: "",
        address: "",
    });



    useEffect(() => {
        (async () => {
            try {
                const Details = await userDetails();
                console.log("Donations from ui",Details?.data);
                if(Details)
                {
                    setFormdata({
                        email: Details?.data?.email,
                        firstName: Details?.data?.firstName,
                        lastName: Details?.data?.lastName,
                        profileImg: Details?.data?.profileImg,
                        contactNo: Details?.data?.contactNo,
                        address: Details?.data?.address,
                    })
                }
                console.log(formdata);

            } catch (error) {
                console.error("Error fetching :", error);
            }
        })();
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'profileImg') {
            const file = files[0];
            setFormdata({ ...formdata, profileImg: file });
        } else {
            setFormdata({ ...formdata, [name]: value });
        }
    };
    return (
        <section className="bg-white my-10 mx-70">

            <div className="flex flex-row gap-2">
                <span><RiUserSettingsFill size={30} className="text-gray-700"/></span>
                <h1 className="text-2xl text-gray-700 font-mono font-semibold">Profile Details</h1>


            </div>
            <hr className="border-orange-500 border-2  w-60 mb-3"/>
            <div
                className="grid grid-cols-12 p-5 space-x-20 bg-gray-400/30 rounded-2xl text-md font-semibold text-orange-400 ">
                <div className="col-span-12">
                    <div
                        className="w-20 h-20  rounded-md border-2 border-orange-400 overflow-hidden">
                        <img
                            alt="Donor Profile"
                            src={`http://localhost:5050/upload-file/${formdata?.profileImg}`}
                            className="w-full h-full object-cover"
                            onClick={() => window.open(`http://localhost:5050/upload-file/mypic.png`, "_blank")}
                        />

                    </div>
                    <div className="my-4">
                        <label
                            htmlFor="avatar"
                            className="cursor-pointer w-full text-center py-2 px-1 bg-orange-500 text-white rounded-md text-[12px] font-semibold hover:bg-blue-500"
                        >
                            Change Photo
                        </label>
                        <input
                            id="avatar"
                            name="avatar"
                            type="file"
                            className="hidden"
                        />
                    </div>


                </div>
                <div className="col-span-6">
                    <label>First Name :</label>
                    <input
                        type="text" name="firstName" value={formdata.firstName} onChange={handleChange}
                        className="w-full rounded-md pl-2  text-gray-800 border-2 border-orange-300 outline-none focus:outline-none"/>
                </div>

                <div className="col-span-6">
                    <label>Last Name :</label>
                    <input
                        type="text" name="lastName" value={formdata.lastName} onChange={handleChange}
                        className="w-full  pl-2 rounded-md text-gray-800 border-2 border-orange-300 outline-none focus:outline-none"/>
                </div>

                <div className="col-span-6">
                    <label>Email :</label>
                    <input
                        type="email" name="email"  value={formdata.email} onChange={handleChange}
                        className="w-full pl-2  rounded-md text-gray-800 border-2 border-orange-300 outline-none focus:outline-none"/>
                </div>

                <div className="col-span-6">
                    <label>Address :</label>
                    <input
                        type="text" name="address" value={formdata.address} onChange={handleChange}
                        className="w-full pl-2  rounded-md text-gray-800 border-2 border-orange-300 outline-none focus:outline-none"/>
                </div>

                <div className="col-span-6">
                    <label>Contact Number :</label>
                    <input
                        type="phone" name="contactNo" value={formdata.contactNo} onChange={handleChange}
                        className="w-full pl-2 rounded-md text-gray-800 border-2 border-orange-300 outline-none focus:outline-none"/>
                </div>
                <div className="col-span-6">
                    <button
                        className="w-20 mt-5 rounded-md border p-1 font-bold font-mono text-sm hov bg-orange-500 text-white
                    hover:bg-blue-400 border-2 hover:scale-110 hover:border-blue-400
                    border-orange-400 utline-none focus:outline-none"
                    >Update
                    </button>
                </div>
            </div>

        </section>
    )

}
export default ProfileSection;