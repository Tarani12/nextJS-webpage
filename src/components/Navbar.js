"use client";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";

const Navbar = () => {
    return (
        <>
            {/* College Logo - Responsive */}
            <nav className="navbar navbar-light bg-white d-flex justify-content-center py-2">
                <Image
                    src="/collegeLogo.png"
                    alt="College Logo"
                    width={500}  
                    height={80}   
                    className="img-fluid"
                    style={{ maxWidth: "100%", height: "auto" }}
                />
            </nav>

            {/* Exam Portal Bar with Profile Icon */}
            <nav className="navbar navbar-expand-lg px-3 d-flex align-items-center">
                <div className="container position-relative d-flex justify-content-between align-items-center">
                    {/* Assessment Page Heading */}
                    <h1 className="fw-bold fs-5 text-center w-100 m-0 p-2 border border-dark rounded">
                        Assessment Page
                    </h1>

                    {/* Profile Icon with Dropdown */}
                    <Dropdown className="position-absolute end-0 me-3 me-md-5">
                        <Dropdown.Toggle
                            variant="transparent"
                            id="profile-dropdown"
                            className="border-0 p-0"
                        >
                            <FaUser size={24} style={{ color: "#495057" }} />  
                        </Dropdown.Toggle>
                        <Dropdown.Menu align="end">
                            <Dropdown.Item href="#">Profile</Dropdown.Item>
                            <Dropdown.Item href="#">Settings</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
