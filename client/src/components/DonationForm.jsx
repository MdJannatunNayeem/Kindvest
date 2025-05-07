import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import {ErrorToast, IsEmpty} from "../Helper/helper.js";
import { donateNow, fileUpload} from "../apiRequest/api.js";

const DonationForm = () => {

    const navigate = useNavigate();
    const [data, setData] = useState({donationDescription: "", quantity: "",donationPic:""});
    const [file, setFile] = useState(null);
    const {id:eventId} = useParams();

    const fileUploadFun = async () => {
        if (!file) {
            ErrorToast("Please select a file");
            return;
        }
        const formData = new FormData();
        formData.append("file", file);
        const result = await fileUpload(formData);
        console.log("picture",result);
        return result?.data?.file.filename;
    };



    const submitData = async (e) => {
        e.preventDefault();

        if (IsEmpty(data.donationDescription)) {
            ErrorToast("Type is required.");
        } else {

            console.log("Donate now data:", data);
            const img = await fileUploadFun();
            console.log("donation img",img);
            const fullData ={...data,donationPic: img};

            let result = await donateNow(eventId,fullData);
            if (result === true) {
                navigate("/donor-dashboard");
            }

        }
    };

    return (<>

        <section className="rounded-md p-2  shadow-xl bg-gray-200 flex justify-center items-center  ">
            <div
                className="flex  items-center  justify-center px-4 py-8 w-300">
                <div
                    className="xl:mx-auto xl:w-full shadow-lg p-4 xl:max-w-sm 2xl:max-w-md rounded-xl bg-white">
                    <div className=" flex justify-center items-center "/>
                    <h2 className="text-center text-2xl font-bold leading-tight text-orange-400 bg-gray-900 border border-orange-500
                    rounded-xl">
                        Donate Now
                    </h2>

                    <form className="mt-4 " method="POST" action="#">
                        <div className="space-y-2 ">
                            <div>
                                <label className="text-base font-medium text-orange-400">
                                    Donation Description
                                </label>
                                <div className="mt-2 ">
                                    <input
                                        onChange={(e) => setData({...data, donationDescription: e.target.value})}
                                        value={data.donationDescription}
                                        placeholder="Describe short in your donation description"
                                        type="textarea"
                                        className="flex h-20 w-full rounded-md border border-orange-400 bg-transparent px-3 py-2 text-sm placeholder:text-orange-400 focus:outline-orange-400 focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label className="text-base font-medium text-orange-400">
                                        Quantity
                                    </label>

                                </div>
                                <div className="mt-2">
                                    <input
                                        onChange={(e) => setData({
                                            ...data,
                                            quantity: e.target.value
                                        })}
                                        value={data.quantity}
                                        placeholder="0"
                                        type="number"
                                        className="flex h-10 w-full rounded-md border border-orange-400 bg-transparent px-3 py-2 text-sm placeholder:text-orange-400 focus:outline-orange-400 focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                </div>
                            </div>


                            <div>
                                <label className="block mt-1 text-sm font-medium text-orange-400">Donation Picture</label>
                                <input
                                    onChange={(e) => setFile(e.target.files[0])}
                                    name="avatar"
                                    type="file"
                                    className="mt-1 flex items-center justify-center w-50 text-sm text-orange-300 file:mr-4 file:py-3 file:px-4
                                file:rounded-md file:border-0 file:text-sm file:font-semibold
                                file:bg-orange-400 file:text-white hover:file:bg-blue-500"
                                />
                            </div>

                            <div>
                                <button
                                    onClick={submitData}
                                    className="inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-blue-400"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default DonationForm