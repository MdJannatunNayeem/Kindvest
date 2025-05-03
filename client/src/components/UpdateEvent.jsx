


import  { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {findDonationList, FindEventById, UpdateOnGoingEvent} from "../apiRequest/api.js";
import {ErrorToast, SuccessToast} from "../Helper/helper.js";

const UpdateEvent= () => {
    const { id } = useParams(); //
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        donationId: "",
        description: "",
        areaName: "",
        status: "",
        title:""
       // logo: ""
    });
  //  const [preview, setPreview] = useState(null);
  //  const [file, setFile] = useState(null);
      const [donations, setDonations] = useState([]);
    // Fetch existing company data
    useEffect(() => {
        (async () => {
            try {
                const response = await FindEventById(id);

                const data = response?.data[0];
                console.log("Fetched data", data);
                console.log("Form Data State", {
                    donationId: data.donationDetails?._id,
                    description: data.description,
                    areaName: data.areaName,
                    status: data.status,
                    title: data.donationDetails?.title,
                });

                if (data) {
                    setFormData({
                        donationId: data.donationDetails?._id,
                        description: data.description,
                        areaName: data.areaName,
                        status: data.status,
                        title: data.donationDetails?.title,
                        //logo: data.logo,
                    });
                   // setPreview(`http://localhost:5050/upload-file/${data.logo}`);
                }
            } catch (err) {
                console.error("Failed to fetch:", err);
            }
        })();
    }, [id]);

    //donations list

    useEffect(() => {
        (async () => {
            try {
                const DonationList = await findDonationList();
                setDonations(DonationList);
                console.log("Don",DonationList);

            } catch (error) {
                console.error('Error fetching :', error);
            }
        })();
    }, []);




    // Handle logo upload
    /*const handleFileChange = (e) => {
        //const selectedFile = e.target.files[0];
      //  setFile(selectedFile);
      //  setPreview(URL.createObjectURL(selectedFile));
    };*/

    // Handle form submission
    const submitData = async (e) => {
        e.preventDefault();
        try {
            const requestBody = {
                donationId: formData.donationId,
                description: formData.description,
                areaName: formData.areaName,
                status: formData.status,
                // If you need to add a file, handle it separately.
            };
           // if (file) updateData.append("file", file);

            const response = await UpdateOnGoingEvent(id,requestBody);


            if (response.status) {
                SuccessToast(" updated successfully!");
                navigate("/admin-dashboard");
            } else {
                ErrorToast("Failed to update.");
            }
        } catch (error) {
            console.error("Error updating company:", error);
            alert("Something went wrong.");
        }
    };

    return (
        <>
            <section className="rounded-md p-2 shadow-xl bg-gray-100 flex justify-center ">
                <div
                    className="flex  items-center justify-center px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
                    <div
                        className="xl:mx-auto xl:w-full shadow-lg p-4 xl:max-w-sm 2xl:max-w-md rounded-xl bg-white">
                        <div className="mb-2 flex justify-center"/>
                        <h2 className="text-center text-2xl font-bold leading-tight text-orange-400">
                            Update a Donation Event
                        </h2>

                        <form className="mt-8" method="POST" action="#">
                            <div className=" grid grid-cols-12 space-y-5 space-x-3">
                                <div className="col-span-6">
                                    <label className="text-base font-medium text-orange-400">
                                        Tittle
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            name="donationId"
                                            onChange={(e) => setFormData({...formData, donationId: e.target.value})}
                                            value={formData.donationId}

                                            placeholder="Select a title"

                                            className="flex h-10 w-full rounded-md border border-orange-400 bg-transparent px-3 py-2 text-sm placeholder:text-orange-400 focus:outline-orange-400 focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            <option value={formData.donationId}>{formData.title} </option>
                                            {donations?.data?.map((d) => (
                                                <option key={d._id} value={d._id}>
                                                    {d.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="col-span-6">
                                    <div className="flex items-center justify-between">
                                        <label className="text-base font-medium text-orange-400">
                                            Area Name
                                        </label>

                                    </div>
                                    <div className="mt-2">
                                        <input
                                            onChange={(e) => setFormData({
                                                ...formData,
                                                areaName: e.target.value
                                            })}
                                            value={formData.areaName}
                                            placeholder="write your area"
                                            type="textarea"
                                            className="flex h-10 w-full rounded-md border border-orange-400 bg-transparent px-3 py-2 text-sm placeholder:text-orange-400 focus:outline-orange-400 focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-12">
                                    <div className="flex items-center justify-between">
                                        <label className="text-base font-medium text-orange-400">
                                            Description
                                        </label>

                                    </div>
                                    <div className="mt-2">
                                        <input
                                            onChange={(e) => setFormData({
                                                ...formData,
                                                description: e.target.value
                                            })}
                                            value={formData.description}
                                            placeholder="write your description"
                                            type="textarea"
                                            className="flex h-20 w-full rounded-md border border-orange-400 bg-transparent px-3 py-2 text-sm placeholder:text-orange-400 focus:outline-orange-400 focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-6">
                                    <div className="flex items-center justify-between">
                                        <label className="text-base font-medium text-orange-400">
                                            Status
                                        </label>

                                    </div>
                                    <div className="mt-2">
                                        <select
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    status: e.target.value
                                                })
                                            }
                                            value={formData.status}
                                            className="flex h-10 w-full rounded-md border border-orange-400 bg-transparent px-3 py-2 text-sm text-orange-600 placeholder:text-orange-400 focus:outline-orange-400 focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            required
                                        >
                                            <option value="">Select status</option>
                                            <option value="pending">Pending</option>
                                            <option value="running">Running</option>
                                            <option value="finished">Finished</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-span-12">
                                    <button
                                        onClick={submitData}
                                        className="inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-blue-400"
                                        type="submit"
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </>
    );
};

export default UpdateEvent;
