import {NavLink} from "react-router-dom";

const MenuBar = () => {
    return (
        <>
            <section className=" bg-black">
                <div className="container mx-auto px-4 py-3">
                    <div className="grid grid-cols-12 ">
                        <div className="col-span-3 flex flex-row">
                            <div className="w-[40px] p-[2px]">
                                <img alt="logo" src="/kindvest-logo.png"/>
                            </div>
                            <span className="text-white text-lg">KindVest</span>
                        </div>
                        <div className="col-span-9">
                            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                                <ul className="navbar-nav flex gap-x-5 float-right text-white gap-x-2">
                                    <li className="nav-item hover:bg-orange-400
                                    hover:px-3 hover:py-[3px] hover: rounded-full p-[3px]">
                                        <NavLink to={"/"}>Home </NavLink> </li>
                                    <li className="nav-item hover:bg-orange-400
                                    hover:px-3 hover:py-[3px] hover: rounded-full p-[3px]">
                                        <NavLink to={"/"}>About Us </NavLink> </li>
                                    <li className="nav-item hover:bg-orange-400 hover:px-3 hover:py-[3px] hover: rounded-full p-[3px]">
                                        <NavLink to={"/"}>Testimonials</NavLink> </li>
                                    <li className="nav-item hover:bg-orange-400 hover:px-3 hover:py-[3px] hover: rounded-full p-[3px]">
                                        <NavLink to={"/login"}>Login</NavLink></li>
                                    <li className="nav-item hover:bg-orange-400 hover:px-3 hover:py-[3px] hover: rounded-full p-[3px] ">
                                        <NavLink to={"/register"}>Register</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MenuBar;